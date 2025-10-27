import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Stock {
  symbol: string;
  name: string;
  change: number;
  price: number;
}

const MarketStats = () => {
  const [bullishStocks, setBullishStocks] = useState<Stock[]>([]);
  const [bearishStocks, setBearishStocks] = useState<Stock[]>([]);
  const [chartData, setChartData] = useState<number[]>([]);

  // Simulate live market data
  useEffect(() => {
    const generateMockStocks = () => {
      const indianStocks = [
        { symbol: "RELIANCE", name: "Reliance Industries" },
        { symbol: "TCS", name: "Tata Consultancy" },
        { symbol: "HDFCBANK", name: "HDFC Bank" },
        { symbol: "INFY", name: "Infosys" },
        { symbol: "ICICIBANK", name: "ICICI Bank" },
        { symbol: "HINDUNILVR", name: "Hindustan Unilever" },
        { symbol: "ITC", name: "ITC Limited" },
        { symbol: "SBIN", name: "State Bank of India" },
        { symbol: "BHARTIARTL", name: "Bharti Airtel" },
        { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank" },
        { symbol: "LT", name: "Larsen & Toubro" },
        { symbol: "AXISBANK", name: "Axis Bank" },
        { symbol: "ASIANPAINT", name: "Asian Paints" },
        { symbol: "MARUTI", name: "Maruti Suzuki" },
        { symbol: "SUNPHARMA", name: "Sun Pharma" },
        { symbol: "WIPRO", name: "Wipro" },
        { symbol: "TITAN", name: "Titan Company" },
        { symbol: "BAJFINANCE", name: "Bajaj Finance" },
        { symbol: "ADANIENT", name: "Adani Enterprises" },
        { symbol: "ONGC", name: "ONGC" },
      ];

      const stocks = indianStocks.map((stock) => ({
        ...stock,
        change: (Math.random() * 10 - 3).toFixed(2),
        price: (Math.random() * 3000 + 500).toFixed(2),
      }));

      const sorted = [...stocks].sort((a, b) => parseFloat(b.change) - parseFloat(a.change));
      setBullishStocks(sorted.slice(0, 10).map(s => ({ ...s, change: parseFloat(s.change), price: parseFloat(s.price) })));
      setBearishStocks(sorted.slice(-10).reverse().map(s => ({ ...s, change: parseFloat(s.change), price: parseFloat(s.price) })));
    };

    generateMockStocks();
    const interval = setInterval(generateMockStocks, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animate chart line
  useEffect(() => {
    const generateChartData = () => {
      setChartData(Array.from({ length: 50 }, () => Math.random() * 100));
    };

    generateChartData();
    const interval = setInterval(generateChartData, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="market-stats" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
            <Activity className="text-primary animate-pulse" size={20} />
            <span className="text-sm font-medium text-muted-foreground">Live Market Data</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Indian Market Movers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-time tracking of top performing and declining stocks in the Indian market
          </p>
        </div>

        {/* Animated Chart Visualization */}
        <div className="mb-12 flex justify-center">
          <Card className="p-6 bg-card/40 backdrop-blur-sm border-border/50 w-full max-w-4xl">
            <div className="flex items-end justify-between h-32 gap-1">
              {chartData.map((value, index) => (
                <div
                  key={index}
                  className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t transition-all duration-1000 ease-out hover:from-accent hover:to-primary"
                  style={{ 
                    height: `${value}%`,
                    opacity: 0.3 + (value / 100) * 0.7,
                    animationDelay: `${index * 20}ms`
                  }}
                />
              ))}
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Market Activity Visualization
            </div>
          </Card>
        </div>

        {/* Stocks Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bullish Stocks */}
          <Card className="p-6 bg-card/40 backdrop-blur-sm border-border/50 hover-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-green-500/10 border border-green-500/20">
                <TrendingUp className="text-green-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Top Bullish</h3>
                <p className="text-sm text-muted-foreground">Strongest gainers</p>
              </div>
            </div>
            <div className="space-y-3">
              {bullishStocks.map((stock, index) => (
                <div
                  key={stock.symbol}
                  className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/30 hover:border-green-500/30 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{stock.symbol}</div>
                    <div className="text-xs text-muted-foreground truncate">{stock.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sm">₹{stock.price.toFixed(2)}</div>
                    <div className="text-xs text-green-500 font-medium">
                      +{stock.change.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Bearish Stocks */}
          <Card className="p-6 bg-card/40 backdrop-blur-sm border-border/50 hover-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-red-500/10 border border-red-500/20">
                <TrendingDown className="text-red-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Top Bearish</h3>
                <p className="text-sm text-muted-foreground">Largest decliners</p>
              </div>
            </div>
            <div className="space-y-3">
              {bearishStocks.map((stock, index) => (
                <div
                  key={stock.symbol}
                  className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/30 hover:border-red-500/30 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{stock.symbol}</div>
                    <div className="text-xs text-muted-foreground truncate">{stock.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-sm">₹{stock.price.toFixed(2)}</div>
                    <div className="text-xs text-red-500 font-medium">
                      {stock.change.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            * Simulated data for demonstration purposes. Updates every 5 seconds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketStats;
