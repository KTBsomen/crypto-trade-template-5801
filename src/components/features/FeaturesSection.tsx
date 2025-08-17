import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FeatureContent } from "./FeatureContent";
import { features } from "@/config/features";

export const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      const windowHeight = window.innerHeight;

      // Check if we're in the features section
      if (sectionTop <= windowHeight * 0.5 && sectionBottom >= windowHeight * 0.5) {
        // Calculate which feature should be active based on scroll position
        const scrollProgress = (windowHeight * 0.5 - sectionTop) / (sectionRect.height - windowHeight);
        const featureIndex = Math.floor(scrollProgress * features.length);
        const clampedIndex = Math.max(0, Math.min(features.length - 1, featureIndex));
        
        if (clampedIndex !== activeFeature) {
          setActiveFeature(clampedIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeFeature]);

  return (
    <section ref={sectionRef} className="container px-4 py-24 min-h-screen">
      {/* Header Section */}
      <div className="max-w-2xl mb-20">
        <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight text-left">
          Enterprise Invoice
          <br />
          <span className="text-gradient font-medium">Features & Tools</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-left">
          Professional tools designed for enterprise invoice workflows with security and compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left side - Feature list */}
        <div className="md:col-span-5 space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              ref={(el) => (featureRefs.current[index] = el)}
              className={`
                flex items-center gap-4 p-6 rounded-xl transition-all duration-500 cursor-pointer
                ${activeFeature === index 
                  ? 'glass shadow-lg shadow-primary/10 border-primary/20' 
                  : 'glass-subtle hover:glass'
                }
              `}
              onClick={() => setActiveFeature(index)}
              initial={{ opacity: 0.6 }}
              animate={{ 
                opacity: activeFeature === index ? 1 : 0.6,
                scale: activeFeature === index ? 1.02 : 1
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
                <div className={`${activeFeature === index ? 'text-primary' : 'text-muted-foreground'} transition-colors`}>
                  {feature.icon}
                </div>
                <div className="text-left min-w-0">
                  <h3 className={`font-semibold text-base transition-colors ${activeFeature === index ? 'text-primary' : ''}`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right side - Feature content */}
        <div className="md:col-span-7 sticky top-24">
          <FeatureContent
            image={features[activeFeature].image}
            title={features[activeFeature].title}
          />
        </div>
      </div>
    </section>
  );
};