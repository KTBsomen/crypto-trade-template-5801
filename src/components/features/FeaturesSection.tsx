import { useState } from "react";
import { FeatureContent } from "./FeatureContent";
import { features } from "@/config/features";

export const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left side - Feature list */}
          <div className="md:col-span-5 space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`relative flex items-center gap-4 p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeFeature === index
                    ? "glass shadow-lg shadow-primary/10 border-primary/20"
                    : "glass-subtle hover:glass"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                {activeFeature === index && (
                  <div className="absolute left-0 top-0 w-1 h-full bg-primary rounded-l-xl" />
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
              </div>
            ))}
          </div>

          {/* Right side - Feature content */}
          <div className="md:col-span-7 flex items-center">
            <FeatureContent image={features[activeFeature].image} title={features[activeFeature].title} />
          </div>
        </div>
      </div>
    </section>
  );
};
