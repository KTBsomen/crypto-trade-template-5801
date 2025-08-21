import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, Palette, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { ScenariosSection } from "@/components/ScenariosSection";
import { ApiDocumentation } from "@/components/ApiDocumentation";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [showSticky, setShowSticky] = useState(false);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setShowSticky(rect.bottom <= 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  // Enhanced parallax transforms for the main image
  const imageScale = useTransform(scrollY, [0, 500, 1100], [0.8, 1.15, 1.35]);
  const imageY = useTransform(scrollY, [0, 500, 1100], [0, 220, 420]);
  const imageOpacity = useTransform(scrollY, [0, 600, 1000], [1, 1, 0]);
  const imageX = useTransform(scrollY, [0, 400, 800], [0, 0, 0]);
  const parkedOpacity = useTransform(scrollY, [600, 1000], [0, 1]);
  const parkedY = useTransform(scrollY, [600, 1000], [60, 0]);
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-32 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Content */}
          <div className="lg:col-span-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
            >
              <span className="text-sm font-medium">
                <FileText className="w-4 h-4 inline-block mr-2" />
                Enterprise Invoice PDF Generator API
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tight text-left">
              <span className="text-muted-foreground">
                <TextGenerateEffect words="Design invoices," />
              </span>
              <br />
              <span className="text-foreground font-medium">
                <TextGenerateEffect words="generate PDFs instantly" />
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl text-left"
            >
              Enterprise-grade invoice generation with professional templates, digital signatures, and audit trails. {" "}
              <span className="text-foreground font-medium">Built for scale and compliance.</span>
            </motion.p>

            {/* Enterprise Features Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm">Instant API</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm">Digital Signatures</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm">Team Management</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Button size="lg" className="button-gradient">
                <Palette className="mr-2 w-4 h-4" />
                Start Designing
              </Button>
              <Button size="lg" variant="outline" className="glass">
                View API Docs <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          {/* Right: Parallax Image that grows then parks below hero */}
          <div className="lg:col-span-4 hidden lg:block relative">
            <motion.div 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
              style={{
                scale: imageScale,
                y: imageY,
                opacity: imageOpacity,
                x: imageX,
                transformOrigin: 'center right'
              }}
              initial={{ opacity: 0, scale: 0.5, x: 60 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div 
                className="glass rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 w-[380px] h-[380px]"
              >
                <img
                  src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
                  alt="Enterprise Invoice Designer"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Image Section parked below Hero (appears on scroll) */}
      <motion.section 
        className="container px-4 py-24 hidden lg:block"
        style={{ opacity: parkedOpacity, y: parkedY }}
      >
        <div className="mx-auto flex items-center justify-center">
          <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 w-full max-w-5xl h-[70vh]">
            <img
              src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
              alt="Enterprise Invoice Designer parked showcase"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </motion.section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Workflow Section */}
      <div id="workflow" className="bg-black">
        <WorkflowSection />
      </div>

      {/* Features Section */}
      <div id="features" className="bg-black">
        <FeaturesSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-black">
        <PricingSection />
      </div>

      {/* Scenarios Section */}
      <div id="scenarios" className="bg-black">
        <ScenariosSection />
      </div>

      {/* API Documentation */}
      <div className="bg-black">
        <ApiDocumentation />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/lovable-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start creating invoices?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who generate professional PDFs with our API service.
          </p>
          <Button size="lg" className="button-gradient">
            <Palette className="mr-2 w-4 h-4" />
            Start Designing
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
