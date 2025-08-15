import { motion } from "framer-motion";
import { Building2, Store, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ScenarioCard = ({ 
  title, 
  description, 
  icon: Icon,
  usage,
  coins,
  cost,
  popular = false
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  usage: string;
  coins: number;
  cost: number;
  popular?: boolean;
}) => (
  <Card className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 border-white/10 h-full">
    {popular && (
      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary/10 text-primary border-primary/20">
        Most Popular
      </Badge>
    )}
    <CardHeader>
      <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
      <p className="text-sm text-gray-400">{description}</p>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <div className="text-sm text-gray-300">{usage}</div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Coins needed</span>
          <span className="font-bold text-primary">{coins} coins</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Monthly cost</span>
          <span className="font-bold">${cost}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export const ScenariosSection = () => {
  const scenarios = [
    {
      title: "Freelancer",
      description: "Individual freelancer sending invoices to clients",
      icon: Users,
      usage: "50 PDFs + 5 AI designs per month",
      coins: 60,
      cost: 1.2
    },
    {
      title: "Small Business",
      description: "Local business with regular customers",
      icon: Store,
      usage: "200 PDFs + 15 AI designs per month",
      coins: 230,
      cost: 4.6,
      popular: true
    },
    {
      title: "Growing Company",
      description: "Scaling business with multiple clients",
      icon: Building2,
      usage: "500 PDFs + 25 AI designs per month",
      coins: 550,
      cost: 11.0
    },
    {
      title: "Enterprise",
      description: "Large organization with high volume",
      icon: Zap,
      usage: "2000 PDFs + 50 AI designs per month",
      coins: 2100,
      cost: 42.0
    }
  ];

  return (
    <section className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-normal mb-6">
          Real-World{" "}
          <span className="text-gradient font-medium">Scenarios</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          See how different businesses use our service and estimate your monthly coin requirements.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {scenarios.map((scenario, index) => (
          <motion.div
            key={scenario.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ScenarioCard {...scenario} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mt-12"
      >
        <div className="inline-block px-6 py-3 rounded-lg bg-primary/10 border border-primary/20">
          <div className="text-sm text-primary font-medium">💡 Pro Tip</div>
          <div className="text-sm text-gray-300 mt-1">
            Coins never expire! Buy in bulk and use them whenever you need.
          </div>
        </div>
      </motion.div>
    </section>
  );
};