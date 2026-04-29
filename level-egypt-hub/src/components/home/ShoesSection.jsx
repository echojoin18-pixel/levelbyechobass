import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";

const menProducts = [
  { id: 1001, brand: "HUGO BOSS", name: "TTNM EVO Runn Sneakers Man 8008-1 Black", price: 3950, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2382_c5a0e351-9b77-4cfe-a8e9-47e91cd2f13d.jpg?v=1772668825" },
  { id: 1002, brand: "ALEXANDER MCQUEEN", name: "Oversized Sneakers Man AX210 Black & Olive", price: 4950, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_1338copy.jpg?v=1772662831" },
  { id: 1003, brand: "ZEGNA", name: "Triple Stitch Low-Top Italian Sneakers Man ZE209 Black", price: 3750, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_1351copy.jpg?v=1772661429" },
  { id: 1004, brand: "PRADA", name: "Milano Italian Sneakers Man 2EG01 Black", price: 6150, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_1355copy.jpg?v=1772660574" },
];

const womenProducts = [
  { id: 1101, brand: "GUCCI", name: "Tennis 1977 Slip-On Sneakers Woman JEN-673 Navy", price: 1605, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9736.jpg?v=1748613992" },
  { id: 1102, brand: "GUCCI", name: "Tennis 1977 Slip-On Sneakers Woman JEN-673 Beige", price: 1605, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9738_6604aa90-ecd7-4fc9-b194-e46179920b21.jpg?v=1748614616" },
  { id: 1103, brand: "GOLDEN GOOSE", name: "Ball Star Low-Top Sneakers Woman F007393 Silver", price: 2450, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0730copy.jpg?v=1765848286" },
  { id: 1104, brand: "MICHAEL KORS", name: "Solid Athletic Shoes Woman JEN-662 Coffee", price: 1940, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9729_6955ebd6-592b-48fa-bee0-ab48b51745cd.jpg?v=1748611280" },
];

const tabs = [
  { key: "men", label: "Man", products: menProducts, href: "https://level-egypt.com/collections/man" },
  { key: "women", label: "Women", products: womenProducts, href: "https://level-egypt.com/collections/woman" },
];

export default function ShoesSection() {
  const [activeTab, setActiveTab] = useState("men");
  const [wishlisted, setWishlisted] = useState(new Set());

  const current = tabs.find((t) => t.key === activeTab);

  const toggleWishlist = (id) => {
    setWishlisted((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };

  return (
    <section className="py-8 px-4 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-white uppercase tracking-wide">Shoes</h2>
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
            View All {current.label} Shoes →
          </a>
        </div>
      </div>
    </section>
  );
}