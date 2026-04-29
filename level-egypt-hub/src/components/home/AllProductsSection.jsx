import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";

const menProducts = [
  { id: 2001, brand: "NEW BALANCE", name: "327 Retro Sneaker Man U327Mga Olive", price: 2170, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_4372.jpg?v=1743442450" },
  { id: 2002, brand: "LEVEL", name: "British Style Yuppie Platform Sneakers Man M7513 White", price: 2850, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2393.jpg?v=1752505499" },
  { id: 2003, brand: "SKECHERS", name: "Sneakers Man SN12767 Gray", price: 1790, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2467.jpg?v=1752431883" },
  { id: 2004, brand: "SKECHERS", name: "Sneakers Man 5802 Black", price: 1520, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0866.jpg?v=1734551637" },
];
const womenProducts = [
  { id: 2101, brand: "GUCCI", name: "Tennis 1977 Slip-On Sneakers Woman JEN-673 Navy", price: 1605, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9736.jpg?v=1748613992" },
  { id: 2102, brand: "BALENCIAGA", name: "3XL Sneakers Woman 1825124 Purple", price: 1500, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9711copy.jpg?v=1728383138" },
  { id: 2103, brand: "GUCCI", name: "Tennis 1977 Slip-On Sneakers Woman JEN-673 Beige", price: 1605, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9738_6604aa90-ecd7-4fc9-b194-e46179920b21.jpg?v=1748614616" },
  { id: 2104, brand: "TIMBERLAND", name: "Faux Suede Classic Loafer Woman JK-02 Camel", price: 1405, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_1084copy_a0052cd1-e2e1-4b3d-a788-9f7e5825c334.jpg?v=1766523194" },
];
const kidsProducts = [
  { id: 2201, brand: "LEVEL", name: "Kids Running Sneakers Lightweight 2508 Orange", price: 1305, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9227_1a84ef5b-78fc-4c7a-bd01-21850bbe5af1.jpg?v=1766543265" },
  { id: 2202, brand: "LEVEL", name: "Kids Running Sneakers Lightweight 6642B Pink", price: 1155, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9079_82bf66ae-dcc6-4844-8663-a6c496d08148.jpg?v=1766542845" },
  { id: 2203, brand: "LEVEL", name: "Kids Running Sneakers Lightweight 10155 Black", price: 1505, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9195_e36f6155-3f7f-42ba-b91b-815082a05f49.jpg?v=1766541996" },
  { id: 2204, brand: "LEVEL", name: "Kids Running Sneakers Lightweight 10155 Pink", price: 1505, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9193_906ff0a8-ea6a-479e-b87e-613b9844e85b.jpg?v=1766541908" },
];

const tabs = [
  { key: "men", label: "Man", products: menProducts, href: "https://level-egypt.com/collections/man" },
  { key: "women", label: "Women", products: womenProducts, href: "https://level-egypt.com/collections/woman" },
  { key: "kids", label: "Kids", products: kidsProducts, href: "https://level-egypt.com/collections/kids" },
];

export default function AllProductsSection() {
  const [activeTab, setActiveTab] = useState("men");
  const [wishlisted, setWishlisted] = useState(new Set());
  const current = tabs.find((t) => t.key === activeTab);
  const toggleWishlist = (id) => { setWishlisted((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; }); };

  return (
    <section className="py-8 px-4 bg-[#161616]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-white uppercase tracking-wide">All Products</h2>
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
            View All {current.label} Products →
          </a>
        </div>
      </div>
    </section>
  );
}