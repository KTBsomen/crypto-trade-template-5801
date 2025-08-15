import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Calculator, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CoinCalculator = () => {
  const [pdfRequests, setPdfRequests] = useState(100);
  const [aiCalls, setAiCalls] = useState(10);

  const coinsPerPdf = 1;
  const coinsPerAi = 2;
  
  const totalCoins = (pdfRequests * coinsPerPdf) + (aiCalls * coinsPerAi);
  const estimatedCost = totalCoins * 0.02; // $0.02 per coin

  const adjustValue = (setter: React.Dispatch<React.SetStateAction<number>>, current: number, change: number, min = 0) => {
    setter(Math.max(min, current + change));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-white/10">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            Coin Calculator
          </CardTitle>
          <p className="text-sm text-gray-400">
            Calculate how many coins you need for your usage
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* PDF Requests */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">PDF Requests</span>
              <span className="text-xs text-gray-400">1 coin each</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => adjustValue(setPdfRequests, pdfRequests, -10)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <div className="flex-1 text-center">
                <div className="text-2xl font-bold">{pdfRequests}</div>
                <div className="text-xs text-gray-400">{pdfRequests * coinsPerPdf} coins</div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => adjustValue(setPdfRequests, pdfRequests, 10)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* AI Design Calls */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">AI Design Calls</span>
              <span className="text-xs text-gray-400">2 coins each</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => adjustValue(setAiCalls, aiCalls, -5)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <div className="flex-1 text-center">
                <div className="text-2xl font-bold">{aiCalls}</div>
                <div className="text-xs text-gray-400">{aiCalls * coinsPerAi} coins</div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => adjustValue(setAiCalls, aiCalls, 5)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Total */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Total Coins Needed</span>
              <div className="flex items-center gap-1">
                <Coins className="w-4 h-4 text-primary" />
                <span className="text-xl font-bold text-primary">{totalCoins}</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400">Estimated Cost</div>
              <div className="text-lg font-bold">${estimatedCost.toFixed(2)}</div>
            </div>
          </div>

          <Button className="w-full button-gradient">
            Get {totalCoins} Coins
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};