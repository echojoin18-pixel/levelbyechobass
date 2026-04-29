import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";

const kidsProducts = [
  { id: 3001, brand: "LEVEL SHOES", name: "Kids Running Sneakers Lightweight 2508 Orange", price: 1305, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9227_1a84ef5b-78fc-4c7a-bd01-21850bbe5af1.jpg?v=1766543265" },
  { id: 3002, brand: "LEVEL SHOES", name: "Kids Running Sneakers Lightweight 2508 Purple", price: 1305, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9225_d68fc8bf-4a4f-4a1d-8944-6119ccfe3a49.jpg?v=1766543070" },
  { id: 3003, brand: "LEVEL SHOES", name: "Kids Running Sneakers Lightweight 6642B Pink", price: 1155, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9079_82bf66ae-dcc6-4844-8663-a6c496d08148.jpg?v=1766542845" },
  { id: 3004, brand: "LEVEL SHOES", name: "Kids Running Sneakers Lightweight 6642B Purple", price: 1155, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9081_e5959934-539d-491a-a364-e3f7791348a4.jpg?v=1766542985" },
  { id: 3005, brand: "LEVEL SHOES", name: "Kids Running Sneakers Lightweight 10155 Black", price: 1505, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9195_e36f6155-3f7f-42ba-b91b-815082a05f49.jpg?v=1766541996" },
  { id: 3006, brand: "LEVEL SHOES", name: "Kids Running Sneakers Lightweight 10155 Pink", price: 1505, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9193_906ff0a8-ea6a-479e-b87e-613b9844e85b.jpg?v=1766541908" },
  { id: 3007, brand: "LEVEL SHOES", name: "Kids Running Sneakers Lightweight 10130 Pink", price: 1490, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9104_ca23e471-d008-42ab-b7d4-efe07687b3f3.jpg?v=1766541731" },
  { id: 3008, brand: "LEVEL SHOES", name: "Kids Running Sneakers Lightweight 10130 Black", price: 1490, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9100_a677b34f-bbef-43f7-b39b-5fdb78dbf96e.jpg?v=1766541585" },
];

export default function KidsNewArrivals() {
  const [wishlisted, setWishlisted] = useState(new Set());
  const toggle = (id) => { setWishlisted((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; }); };

  return (
    <section className="py-8 px-4 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-white uppercase tracking-wide">New Arrivals — Kids</h2>
          <a href="https://level-egypt.com/collections/kids" target="_blank" rel="noreferrer" className="text-xs text-accent font-semibold tracking-wider uppercase">View All →</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-3">
          {kidsProducts.map((product) => (
            <div key={product.id} className="relative rounded-lg overflow-hidden bg-[#111] group">
              <div className="relative aspect-square overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-accent text-white text-[9px] font-bold px-2 py-0.5 uppercase">New</span>
                <button onClick={() => toggle(product.id)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-black/80">
                  <Heart className={`w-4 h-4 ${wishlisted.has(product.id) ? "fill-red-500 text-red-500" : "text-white"}`} />
                </button>
              </div>
              <div className="p-2.5">
                <button className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-white/10 hover:bg-white/20 text-white text-[10px] font-semibold uppercase tracking-wider transition-colors mb-2">
                  <ShoppingBag className="w-3 h-3" /> Add to Cart
                </button>
                <p className="text-[9px] text-accent font-bold uppercase tracking-wider mb-0.5">{product.brand}</p>
                <p className="text-white/80 text-[10px] leading-tight line-clamp-2 mb-1">{product.name}</p>
                <p className="text-white font-bold text-xs">{product.price.toLocaleString()} EGP</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}