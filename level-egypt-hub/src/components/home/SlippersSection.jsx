import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";

const menSlippers = [
  { id: 501, brand: "ADIDAS", name: "Adilette Comfort Slides Man AD444-1 Black", price: 790, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_1647copy.jpg?v=1775350756" },
  { id: 502, brand: "ADIDAS", name: "Adilette Comfort Slides Man AD444-1 Black & White", price: 790, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_1640copy.jpg?v=1775351113" },
  { id: 503, brand: "ADIDAS", name: "Adilette Comfort Slides Man AD444-1 Red", price: 790, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_1645copy.jpg?v=1775350435" },
  { id: 504, brand: "LOUIS VUITTON", name: "LV Monogram Leather Back Strap Slipper Man LV526 Black", price: 995, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_1667copy.jpg?v=1775429476" },
];

const womenSlippers = [
  { id: 601, brand: "GUCCI", name: "Flat Open Back Loafer Slipper Luxury Woman VK-111 Beige", price: 1255, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0933.jpg?v=1766128055" },
  { id: 602, brand: "GUCCI", name: "Flat Open Back Loafer Slipper Luxury Woman VK-111 Black", price: 1255, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0927_230007e6-84e2-4dcc-87ab-9394d9a4850b.jpg?v=1766127471" },
  { id: 603, brand: "CHANEL", name: "Flat Open Back Loafer Slipper Luxury Woman LQ20-16 Beige", price: 1150, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0937_2c8a99f8-303e-4bd2-9076-e96668fc282e.jpg?v=1766130044" },
  { id: 604, brand: "HERMÈS", name: "Groupie H Logo Mules Flats Slipper Woman H66-1 Black", price: 1650, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0264copy.jpg?v=1775687743" },
];

const tabs = [
  { key: "men", label: "Man", products: menSlippers, href: "https://level-egypt.com/collections/man" },
  { key: "women", label: "Women", products: womenSlippers, href: "https://level-egypt.com/collections/woman" },
];

export default function SlippersSection() {
  const [activeTab, setActiveTab] = useState("men");
  const [wishlisted, setWishlisted] = useState(new Set());
  const current = tabs.find((t) => t.key === activeTab);
  const toggleWishlist = (id) => { setWishlisted((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; }); };

  return (
    <section className="py-8 px-4 bg-[#161616]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-white uppercase tracking-wide">Slippers</h2>
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-1 text-xs font-bold uppercase tracking-wider transition-all ${activeTab === tab.key ? "bg-accent text-white" : "text-white/50 hover:text-white"}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {current.products.map((product) => (
            <div key={product.id} className="relative rounded-lg overflow-hidden bg-[#111] group">
              <div className="relative aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                <div className="flex mb-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-accent text-accent" />)}</div>
                <p className="text-white font-bold text-xs">{product.price.toLocaleString()} EGP</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href={current.href} target="_blank" rel="noreferrer" className="inline-block px-8 py-2.5 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest hover:bg-white/5 transition-colors">
            View All {current.label} Slippers →
          </a>
        </div>
      </div>
    </section>
  );
}