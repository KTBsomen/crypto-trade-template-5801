import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FeatureContent } from "./FeatureContent";
import { features } from "@/config/features";

export const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const total = features.length;
  const [mode, setMode] = useState<'idle' | 'active' | 'done'>('idle');
  const lastScrollY = useRef<number>(0);

  const scrollToIndex = useCallback((index: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTopAbs = window.scrollY + rect.top;
    const target = sectionTopAbs + index * window.innerHeight;

    setIsAnimating(true);
    window.scrollTo({ top: target, behavior: "smooth" });
    window.setTimeout(() => setIsAnimating(false), 600);
  }, []);

  // Derive active feature only while in 'active' mode
  useEffect(() => {
    if (mode !== "active") return;
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTopAbs = window.scrollY + rect.top;
      const progress = (window.scrollY - sectionTopAbs) / window.innerHeight;
      const idx = Math.min(total - 1, Math.max(0, Math.round(progress)));
      if (idx !== activeFeature) setActiveFeature(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [mode, activeFeature, total]);

  // Activate scrollytelling only when crossing section top downward,
  // and reset to idle when user scrolls above section again
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTopAbs = window.scrollY + rect.top;
      const dirDown = window.scrollY > (lastScrollY.current || 0);

      // Reset to idle when above section
      if (window.scrollY < sectionTopAbs - 10) {
        if (mode !== "idle") setMode("idle");
      }

      // Enter active mode only when crossing the top while scrolling down
      if (
        mode === "idle" &&
        dirDown &&
        window.scrollY >= sectionTopAbs - 10 &&
        window.scrollY <= sectionTopAbs + 100
      ) {
        setMode("active");
        setActiveFeature(0);
        window.scrollTo({ top: sectionTopAbs, behavior: "smooth" });
      }

      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [mode]);

  // Intercept wheel inside the section to snap between features when active
  const handleWheel = (e: React.WheelEvent) => {
    if (!sectionRef.current || isAnimating) return;
    if (mode !== "active") return;

    const rect = sectionRef.current.getBoundingClientRect();
    // Only intercept when the section's center crosses the viewport
    const inView = rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.4;
    if (!inView) return;

    const sectionTopAbs = window.scrollY + rect.top;
    const currentSnapTop = sectionTopAbs + activeFeature * window.innerHeight;
    const sectionBottomAbs = sectionTopAbs + total * window.innerHeight;

    // Allow normal scroll to exit upward at the first feature
    if (activeFeature === 0 && e.deltaY < 0 && window.scrollY <= currentSnapTop + 2) {
      setMode("idle");
      return; // do not prevent default
    }

    // Release interception after last feature and continue
    if (activeFeature === total - 1 && e.deltaY > 0 && window.scrollY >= currentSnapTop - 2) {
      setMode("done");
      setIsAnimating(true);
      window.scrollTo({ top: sectionBottomAbs, behavior: "smooth" });
      window.setTimeout(() => setIsAnimating(false), 600);
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const next = e.deltaY > 0 ? Math.min(total - 1, activeFeature + 1) : Math.max(0, activeFeature - 1);
    if (next !== activeFeature) scrollToIndex(next);
  };

  return (
    <section
      ref={sectionRef}
      onWheel={handleWheel}
      style={{ height: mode === "active" ? `${total * 100}vh` : "auto" }}
      className="relative"
    >
      <div className={mode === "active" ? "sticky top-0 h-screen" : ""}>
        <div className="container px-4 py-16 md:py-24 h-full flex flex-col">
          {/* Header Section */}
          <div className="max-w-2xl mb-8 md:mb-16">
            <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
              Enterprise Invoice
              <br />
              <span className="text-gradient font-medium">Features & Tools</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-left">
              Professional tools designed for enterprise invoice workflows with security and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 flex-1">
            {/* Left side - Feature list */}
            <div className="md:col-span-5 space-y-6">
              {features.map((feature, index) => {
                if (mode === "active" && index !== activeFeature) return null;
                return (
                  <motion.div
                    key={feature.title}
                    className={`relative flex items-center gap-4 p-6 rounded-xl transition-all duration-500 cursor-pointer ${
                      activeFeature === index
                        ? "glass shadow-lg shadow-primary/10 border-primary/20"
                        : "glass-subtle hover:glass"
                    }`}
                    onClick={() => scrollToIndex(index)}
                    initial={{ opacity: 0.6 }}
                    animate={{
                      opacity: activeFeature === index ? 1 : 0.6,
                      scale: activeFeature === index ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeFeature === index && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 w-1 h-full bg-primary rounded-l-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    <div className="flex items-center gap-4 min-w-0 relative">
                      <div className={`${activeFeature === index ? "text-primary" : "text-muted-foreground"} transition-colors`}>
                        {feature.icon}
                      </div>
                      <div className="text-left min-w-0">
                        <h3 className={`font-semibold text-base transition-colors ${activeFeature === index ? "text-primary" : ""}`}>
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right side - Feature content */}
            <div className="md:col-span-7 flex items-center">
              <FeatureContent image={features[activeFeature].image} title={features[activeFeature].title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
