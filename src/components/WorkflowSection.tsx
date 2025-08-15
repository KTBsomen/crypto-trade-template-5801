import { motion } from "framer-motion";
import { Palette, Database, Code, Download } from "lucide-react";

const WorkflowStep = ({ 
  step, 
  title, 
  description, 
  icon: Icon,
  isLast = false 
}: { 
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;
  isLast?: boolean;
}) => (
  <div className="flex items-start gap-6">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      {!isLast && <div className="w-0.5 h-20 bg-gradient-to-b from-primary/50 to-transparent mt-4" />}
    </div>
    <div className="flex-1 pb-12">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium text-primary">Step {step}</span>
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export const WorkflowSection = () => {
  const steps = [
    {
      title: "Design Your Invoice",
      description: "Use our intuitive designer to create your invoice template with placeholders for dynamic data fields.",
      icon: Palette
    },
    {
      title: "Save to Database",
      description: "Your invoice template is securely stored in our database with a unique template ID for future use.",
      icon: Database
    },
    {
      title: "API Integration",
      description: "Send a POST request to our API with your template ID and the actual data to populate the placeholders.",
      icon: Code
    },
    {
      title: "Get PDF Download",
      description: "Receive an instant download link for your professionally generated PDF invoice.",
      icon: Download
    }
  ];

  return (
    <section className="container px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-normal mb-6">
            How It{" "}
            <span className="text-gradient font-medium">Works</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From design to delivery in four simple steps. Create once, generate unlimited PDFs.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <WorkflowStep
                step={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === steps.length - 1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};