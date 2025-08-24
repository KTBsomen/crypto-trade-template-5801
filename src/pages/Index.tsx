import { ArrowRight, FileText, Palette, Zap, Shield, Users, Brain, Heart, Star } from "lucide-react";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative container px-4 pt-32 pb-20">
        <div className="absolute inset-0 -z-10 bg-[#0A0A0A]" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <div className="inline-block mb-6 px-4 py-2 rounded-full glass">
              <span className="text-sm font-medium flex items-center">
                <Brain className="w-4 h-4 mr-2 text-primary" />
                Targeting Human Psychology
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Turn Invoices Into
              <br />
              <span className="text-primary">Brand Identity</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Invoices are your <span className="text-foreground font-semibold">last interaction with paid customers</span>. 
              Make them a powerful marketing and trust-building tool that creates lasting brand loyalty.
            </p>

            {/* Psychology Features */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="flex items-start gap-3 glass p-4 rounded-lg">
                <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Emotional Connection</h3>
                  <p className="text-sm text-muted-foreground">Transform boring invoices into memorable brand experiences</p>
                </div>
              </div>
              <div className="flex items-start gap-3 glass p-4 rounded-lg">
                <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Professional Trust</h3>
                  <p className="text-sm text-muted-foreground">Build credibility with beautifully designed, secure invoices</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="button-gradient">
                <Palette className="mr-2 w-4 h-4" />
                Start Building Trust
              </Button>
              <Button size="lg" variant="outline" className="glass">
                View Psychology Guide <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right: Simple Image */}
          <div className="hidden lg:block">
            <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              <img
                src="/lovable-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
                alt="Professional Invoice Design Platform"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="container px-4 py-20 border-t border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Every Feature. One Simple Coin System.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            No tiers, no limitations. Every coin purchase gives you access to our complete professional toolkit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center glass p-6 rounded-xl">
            <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Enterprise Security</h3>
            <p className="text-sm text-muted-foreground">Digital signatures, password protection, audit trails</p>
          </div>
          <div className="text-center glass p-6 rounded-xl">
            <Palette className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Brand Personalization</h3>
            <p className="text-sm text-muted-foreground">Custom templates, colors, fonts, and brand elements</p>
          </div>
          <div className="text-center glass p-6 rounded-xl">
            <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Instant API Access</h3>
            <p className="text-sm text-muted-foreground">Generate PDFs instantly with our secure API service</p>
          </div>
        </div>
      </section>

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
        <div className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Brand's Last Impression
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of brands using psychology-driven invoice design to build customer loyalty and trust.
          </p>
          <Button size="lg" className="button-gradient">
            <Brain className="mr-2 w-4 h-4" />
            Start Building Trust
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
