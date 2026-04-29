import { useState, useEffect } from "react";
import { Heart, ShoppingBag } from "lucide-react";

const deals = [
  { id: 101, brand: "STEVE MADDEN", name: "Consequence Sneaker", price: 1800, oldPrice: 3600, discount: 50, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center" },
  { id: 102, brand: "GUESS", name: "Stessi Shoulder Bag", price: 2100, oldPrice: 3500, discount: 40, image: "https://images.unsplash.com/photo-1591561954555-607968c989ab?w=400&h=400&fit=crop&crop=center" },
  { id: 103, brand: "BOSS", name: "Logo Print Tee", price: 990, oldPrice: 1650, discount: 40, image: "https://images.unsplash.com/photo-1503341338985-95ad5ab1b1cc?w=400&h=400&fit=crop&crop=center" },
  { id: 104, brand: "ADIDAS", name: "Stan Smith OG", price: 1950, oldPrice: 2800, discount: 30, image: "https://images.unsplash.com/photo-1504539985568-a9f2a96f8ee3?w=400&h=400&fit=crop&crop=center" },
];

function useCountdown(targetHours) {
  const [time, setTime] = useState({ h: targetHours, m: 59, s: 59 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return time;
}

const pad = (n) => String(n).padStart(2, "0");

export default function DealsSection() {
  const { h, m, s } = useCountdown(5);
  const [wishlisted, setWishlisted] = useState(new Set());

  return (
    <section className="py-10 px-4 bg-[#161616]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Limited Time</span>
            <h2 className="text-xl font-black text-white uppercase tracking-wider">Deals of the Day</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/50 mr-1">Ends in:</span>
            {[pad(h), pad(m), pad(s)].map((val, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="bg-amber-400 text-black text-sm font-black px-2 py-1 rounded min-w-[32px] text-center">{val}</span>
                {i < 2 && <span className="text-amber-400 font-bold">:</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {deals.map((product) => (
            <div key={product.id} className="bg-[#111] rounded-xl overflow-hidden group relative">
              <div className="relative aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-2 left-2 text-[10px] font-black bg-red-500 text-white px-2 py-0.5 rounded-full">-{product.discount}%</span>
                <button
                  onClick={() => setWishlisted((prev) => { const n = new Set(prev); n.has(product.id) ? n.delete(product.id) : n.add(product.id); return n; })}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center"
                >
                  <Heart className={`w-3.5 h-3.5 ${wishlisted.has(product.id) ? "fill-red-500 text-red-500" : "text-white"}`} />
                </button>
              </div>
              <div className="p-3">
                <button className="w-full mb-2 py-1.5 bg-amber-400/10 text-amber-400 text-xs font-semibold rounded-lg hover:bg-amber-400 hover:text-black transition-colors flex items-center justify-center gap-1.5">
                  <ShoppingBag className="w-3 h-3" />
                  Add to Cart
                </button>
                <p className="text-[10px] font-bold text-amber-400/80 tracking-wider uppercase truncate">{product.brand}</p>
                <p className="text-xs text-white/70 mt-0.5 line-clamp-2 leading-tight">{product.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-sm font-bold text-white">{product.price.toLocaleString()} EGP</p>
                  <p className="text-xs text-white/30 line-through">{product.oldPrice.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}