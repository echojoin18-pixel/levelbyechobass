import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";

const menProducts = [
  { id: 701, brand: "CROCS", name: "Crocband Non-Slip Sneakers 205393 Navy", price: 750, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_3069.jpg?v=1752816307" },
  { id: 702, brand: "CROCS", name: "Crocband Non-Slip Sneakers 205393 Black", price: 750, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_3067.jpg?v=1752816106" },
  { id: 703, brand: "NIKE", name: "Victory One Slipper Man 580-AN White", price: 650, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_3101.jpg?v=1752817486" },
  { id: 704, brand: "NIKE", name: "Victory One Slipper Man 580-AN Black", price: 650, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_3153.jpg?v=1752817898" },
];
const womenProducts = [
  { id: 801, brand: "CROCS", name: "Crocband Sneakers Woman 205089-W Fuchsia", price: 790, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_3122.jpg?v=1752789062" },
  { id: 802, brand: "NIKE", name: "Victory One Slipper Woman 825Nike Black & Pink", price: 600, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2862.jpg?v=1752786448" },
  { id: 803, brand: "NIKE", name: "Victory One Slipper Woman 825Nike White", price: 600, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2866.jpg?v=1752783989" },
  { id: 804, brand: "NIKE", name: "Victory One Slipper Woman 825Nike Pink", price: 600, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2860.jpg?v=1752783113" },
];
const kidsProducts = [
  { id: 901, brand: "CROCS", name: "Crocband Kids Multi Style Sneakers 205100 Baby Blue", price: 690, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2880.jpg?v=1752802053" },
  { id: 902, brand: "CROCS", name: "Crocband Kids Multi Style Sneakers 205100 Fuchsia", price: 690, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2890.jpg?v=1752801748" },
  { id: 903, brand: "CROCS", name: "Stitch Kids Waterproof Slippers 204536 Stitch Blue", price: 790, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2904.jpg?v=1752804092" },
  { id: 904, brand: "CROCS", name: "SpiderMan Kids Waterproof Slippers 012-138 Beige", price: 450, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2933.jpg?v=1752811264" },
];

const tabs = [
  { key: "men", label: "Man", products: menProducts, href: "https://level-egypt.com/collections/crocs-mirror-original-men-and-women-and-kids" },
  { key: "women", label: "Women", products: womenProducts, href: "https://level-egypt.com/collections/crocs-mirror-original-men-and-women-and-kids" },
  { key: "kids", label: "Kids", products: kidsProducts, href: "https://level-egypt.com/collections/crocs-mirror-original-men-and-women-and-kids" },
];

export default function CrocsSection() {
  const [activeTab, setActiveTab] = useState("men");
  const [wishlisted, setWishlisted] = useState(new Set());
  const current = tabs.find((t) => t.key === activeTab);
  const toggleWishlist = (id) => { setWishlisted((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; }); };

  return (
    <section className="py-8 px-4 bg-[#161616]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-white uppercase tracking-wide">Crocs</h2>
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
            <div key={product.id} className="relative rounded-lg overflow-hidden bg-[#1a1a1a] group">
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
            View All {current.label} Crocs →
          </a>
        </div>
      </div>
    </section>
  );
}