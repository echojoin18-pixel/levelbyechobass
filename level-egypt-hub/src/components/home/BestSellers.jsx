import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";

const menProducts = [
  { id: 301, brand: "ADIDAS", name: "Super Star Man GX5257 White", price: 1600, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0917.jpg?v=1734575582" },
  { id: 302, brand: "ADIDAS", name: "Super Star Man GZ5218 Black", price: 1600, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0989_ced450c1-9fda-465e-aa85-bcd445c9e2fe.jpg?v=1734576175" },
  { id: 303, brand: "ADIDAS", name: "Super Star Man HQ6450 Beige", price: 1815, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0899.jpg?v=1734575238" },
  { id: 304, brand: "ADIDAS", name: "Super Star Man IF2577 White", price: 1815, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0907.jpg?v=1734577432" },
  { id: 305, brand: "ASICS", name: "Gel Sneakers Man 1011B-133 Gray", price: 2040, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0952.jpg?v=1734632190" },
  { id: 306, brand: "ASICS", name: "Gel Sneakers Man 1011B-133 White", price: 2040, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0950.jpg?v=1734632190" },
];

const womenProducts = [
  { id: 401, brand: "NEW BALANCE", name: "Wrpd Runner Woman JEN-880 Dark Gray", price: 1470, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9803.jpg?v=1748638121" },
  { id: 402, brand: "NEW BALANCE", name: "Wrpd Runner Woman JEN-880 Light Gray", price: 1470, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9807_2ae7d37f-dfb4-4187-9278-4411f12b9c3f.jpg?v=1748639032" },
  { id: 403, brand: "NEW BALANCE", name: "Wrpd Runner Woman JEN-880 Black", price: 1470, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9806.jpg?v=1748639957" },
  { id: 404, brand: "ADIDAS", name: "Super Star Kitty Woman GW7168 White", price: 1480, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_1033.jpg?v=1734565950" },
  { id: 405, brand: "PUMA", name: "Suede Platform Bubble Woman Beige", price: 1480, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_4530.jpg?v=1743603529" },
  { id: 406, brand: "PUMA", name: "Suede Platform Bubble Woman Pink", price: 1480, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_4532.jpg?v=1743603991" },
];

const tabs = [
  { key: "men", label: "Men", products: menProducts, href: "https://level-egypt.com/collections/top-sellers-man" },
  { key: "women", label: "Women", products: womenProducts, href: "https://level-egypt.com/collections/top-sellers-woman" },
];

export default function BestSellers() {
  const [activeTab, setActiveTab] = useState("men");
  const [wishlisted, setWishlisted] = useState(new Set());

  const current = tabs.find((t) => t.key === activeTab);

  const toggleWishlist = (id) => {
    setWishlisted((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  return (
    <section className="py-8 px-4 bg-[#161616]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-white uppercase tracking-wide">Best Sellers</h2>
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-1 text-xs font-bold uppercase tracking-wider transition-all ${activeTab === tab.key ? "bg-accent text-white" : "text-white/50 hover:text-white"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {current.products.slice(0, 4).map((product) => (
            <div key={product.id} className="relative rounded-lg overflow-hidden bg-[#111] group">
              <div className="relative aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-2 left-2 bg-accent text-white text-[9px] font-bold px-2 py-0.5 uppercase">Top</span>
                <button onClick={() => toggleWishlist(product.id)} className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                  <Heart className={`w-3.5 h-3.5 ${wishlisted.has(product.id) ? "fill-red-500 text-red-500" : "text-white"}`} />
                </button>
              </div>
              <div className="p-2.5">
                <button className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-white/10 hover:bg-white/20 text-white text-[10px] font-semibold uppercase tracking-wider transition-colors mb-2">
                  <ShoppingBag className="w-3 h-3" /> Add to Cart
                </button>
                <p className="text-[9px] text-accent font-bold uppercase tracking-wider mb-0.5">{product.brand}</p>
                <p className="text-white/80 text-[10px] leading-tight line-clamp-2 mb-1">{product.name}</p>
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-accent text-accent" />)}
                </div>
                <p className="text-white font-bold text-xs">{product.price.toLocaleString()} EGP</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a href={current.href} target="_blank" rel="noreferrer" className="inline-block px-8 py-2.5 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest hover:bg-white/5 transition-colors">
            View All {current.label} Best Sellers →
          </a>
        </div>
      </div>
    </section>
  );
}