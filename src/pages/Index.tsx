import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, Palette } from "lucide-react";
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

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.92, 1.05, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
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
          <div className="lg:col-span-7 max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
            >
              <span className="text-sm font-medium">
                <FileText className="w-4 h-4 inline-block mr-2" />
                Professional Invoice PDF Generator API
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
              <span className="text-gray-200">
                <TextGenerateEffect words="Design invoices," />
              </span>
              <br />
              <span className="text-white font-medium">
                <TextGenerateEffect words="generate PDFs instantly" />
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
            >
              Create beautiful invoice templates with our designer, then use our API to generate professional PDFs instantly. {" "}
              <span className="text-white">Pay only for what you use with our coin system.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Button size="lg" className="button-gradient">
                <Palette className="mr-2 w-4 h-4" />
                Start Designing
              </Button>
              <Button size="lg" variant="link" className="text-white">
                View API Docs <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          {/* Right: Sticky Parallax Image */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky top-24">
              <div className="glass rounded-xl overflow-hidden">
                <motion.img
                  src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
                  alt="Invoice Designer Interface"
                  className="w-full h-auto"
                  style={{ scale, y, transformOrigin: 'right center' }}
                />
              </div>
            </div>
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
