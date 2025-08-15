import { motion } from "framer-motion";
import { Check, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";
import { CoinCalculator } from "../CoinCalculator";

const CoinPack = ({
  name,
  coins,
  price,
  bonus,
  description,
  isPopular,
}: {
  name: string;
  coins: number;
  price: number;
  bonus?: number;
  description: string;
  isPopular?: boolean;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-6 flex flex-col">
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <Coins className="w-6 h-6 text-primary" />
          <span className="text-4xl font-bold">{coins.toLocaleString()}</span>
          <span className="text-sm text-gray-400">coins</span>
        </div>
        {bonus && (
          <div className="text-sm text-primary">+{bonus} bonus coins</div>
        )}
        <div className="text-2xl font-bold mt-2">${price}</div>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="space-y-2 mb-8 flex-grow">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Per coin:</span>
          <span className="text-gray-300">${(price / (coins + (bonus || 0))).toFixed(3)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">PDF generations:</span>
          <span className="text-primary">{(coins + (bonus || 0)).toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">AI designs:</span>
          <span className="text-primary">{Math.floor((coins + (bonus || 0)) / 2).toLocaleString()}</span>
        </div>
      </div>
      <Button className="button-gradient w-full">
        Buy {coins.toLocaleString()} Coins
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Coin-Based{" "}
          <span className="text-gradient font-medium">Pricing</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Pay only for what you use. Coins never expire and scale with your business needs.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <CoinPack
          name="Starter Pack"
          coins={100}
          price={2}
          description="Perfect for freelancers and small projects"
        />
        <CoinPack
          name="Business Pack"
          coins={500}
          price={8}
          bonus={50}
          description="Ideal for growing businesses with regular invoicing"
          isPopular
        />
        <CoinPack
          name="Enterprise Pack"
          coins={2000}
          price={30}
          bonus={300}
          description="For high-volume operations and enterprises"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-medium mb-4">Coin Calculator</h3>
          <p className="text-gray-400">
            Calculate exactly how many coins you need based on your usage
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <CoinCalculator />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 border border-white/10 rounded-xl p-6">
              <h4 className="font-medium mb-4">Pricing Details</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">PDF Generation</span>
                  <span className="font-medium">1 coin each</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">AI Design Generation</span>
                  <span className="font-medium">2 coins each</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Coin Value</span>
                  <span className="font-medium">$0.015 - $0.02</span>
                </div>
                <div className="border-t border-white/10 pt-3 mt-3">
                  <div className="flex justify-between text-primary">
                    <span className="font-medium">Coins Never Expire</span>
                    <span>✓</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Coins className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-medium text-primary mb-2">Top Up Anytime</h4>
                  <p className="text-sm text-gray-300">
                    Buy any amount of coins you need. No minimum purchase required.
                    Perfect for businesses with fluctuating invoice volumes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};