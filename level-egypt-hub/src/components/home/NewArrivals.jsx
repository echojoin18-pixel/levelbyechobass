import { useState, useRef } from "react";
import { Heart, ShoppingBag } from "lucide-react";

const menProducts = [
  { id: 1, brand: "LEVEL SHOES", name: "British Style Yuppie Platform Sneakers Men F7512 Green", price: 2850, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2389.jpg?v=1752506600" },
  { id: 2, brand: "LEVEL SHOES", name: "British Style Yuppie Platform Sneakers Men F7512 Black", price: 2850, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_8796_53f75435-671e-4af9-b99d-b7c2dc60f142.jpg?v=1766626751" },
  { id: 3, brand: "LEVEL SHOES", name: "British Style Yuppie Platform Sneakers Men M7513 Havan", price: 2850, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2293.jpg?v=1752506213" },
  { id: 4, brand: "LEVEL SHOES", name: "British Style Yuppie Platform Sneakers Men M7513 Navy", price: 2850, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2291.jpg?v=1752505922" },
  { id: 5, brand: "LEVEL SHOES", name: "British Style Yuppie Platform Sneakers Men M7513 White", price: 2850, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2393.jpg?v=1752505499" },
  { id: 6, brand: "LEVEL SHOES", name: "British Style Yuppie Platform Sneakers Men F7311A Brown", price: 2850, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_8781_d55d935e-61e1-4480-9b6d-d281484e5e16.jpg?v=1766627205" },
  { id: 7, brand: "LEVEL SHOES", name: "British Style Yuppie Platform Sneakers Men F7311A Black", price: 2850, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_8776_edd301c2-8ffd-4b64-8625-27536622c021.jpg?v=1766627079" },
];

const womenProducts = [
  { id: 101, brand: "GUCCI", name: "Cotton Wool Web Houndstooth Sneakers Woman GG-1 Red", price: 3400, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0345copy.jpg?v=1775261209" },
  { id: 102, brand: "GUCCI", name: "Cotton Wool Web Houndstooth Sneakers Woman GG-1 Navy", price: 3400, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0349copy.jpg?v=1775262406" },
  { id: 103, brand: "GUCCI", name: "Cotton Wool Web Houndstooth Sneakers Woman GG-1 Beige", price: 3400, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0347copy.jpg?v=1775261811" },
  { id: 104, brand: "LOUIS VUITTON", name: "Trainer Sneakers Woman DS118 Gray", price: 2850, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0343copy_373d3984-3370-4e1b-a34e-e76b5f8d6de0.jpg?v=1775261531" },
  { id: 105, brand: "LOUIS VUITTON", name: "Trainer Sneakers Woman LV1802 White", price: 2850, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0340copy_cbaf83bd-4d8f-4a0c-8831-66142a563161.jpg?v=1775261654" },
  { id: 106, brand: "GUCCI", name: "Supreme Monogram Mix Rhyton Sneakers Woman Beige&Yellow", price: 3900, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0336copy.jpg?v=1775090511" },
  { id: 107, brand: "GUCCI", name: "Supreme Monogram Mix Rhyton Sneakers Woman Beige&Pink", price: 3900, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0334copy.jpg?v=1775089670" },
  { id: 108, brand: "DIOR", name: "Toile de Jouy Oblique Sneakers Woman Navy", price: 3400, image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0299copy.jpg?v=1775084038" },
];

const CARD_WIDTH = 200;
const SCROLL_AMOUNT = CARD_WIDTH + 12;

function DragSlider({ products }) {
  const [wishlisted, setWishlisted] = useState(new Set());
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const didDrag = useRef(false);

  const toggle = (id) => {
    setWishlisted((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    didDrag.current = false;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX.current;
    if (Math.abs(walk) > 5) didDrag.current = true;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const onMouseUp = () => {
    isDragging.current = false;
    sliderRef.current.style.cursor = "grab";
  };
  const onTouchStart = (e) => {
    startX.current = e.touches[0].pageX;
    scrollLeft.current = sliderRef.current.scrollLeft;
    didDrag.current = false;
  };
  const onTouchMove = (e) => {
    const walk = e.touches[0].pageX - startX.current;
    if (Math.abs(walk) > 5) didDrag.current = true;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide cursor-grab select-none pb-2 px-1"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex-none flex flex-col items-center group"
            style={{ width: `${CARD_WIDTH}px` }}
          >
            <div className="relative overflow-hidden" style={{ width: `${CARD_WIDTH}px`, height: `${CARD_WIDTH}px` }}>
              <img
                src={product.image}
                alt={product.name}
                draggable={false}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-accent text-white text-[9px] font-montserrat font-bold px-2 py-0.5 uppercase tracking-wider rounded-full">
                New
              </span>
              <button
                onClick={() => !didDrag.current && toggle(product.id)}
                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/80 transition-all"
              >
                <Heart className={`w-3.5 h-3.5 ${wishlisted.has(product.id) ? "fill-red-500 text-red-500" : "text-white"}`} />
              </button>
            </div>
            <div className="mt-2.5 text-center px-1 w-full">
              <p className="text-[9px] text-accent font-montserrat font-bold uppercase tracking-wider mb-0.5">
                {product.brand}
              </p>
              <p className="text-white/80 text-[10px] font-montserrat leading-tight line-clamp-2 mb-1">
                {product.name}
              </p>
              <p className="text-white font-montserrat font-bold text-xs mb-2">
                {product.price.toLocaleString()} EGP
              </p>
              <button className="w-full flex items-center justify-center gap-1.5 py-1.5 bg-white/10 hover:bg-white/20 text-white text-[10px] font-montserrat font-semibold uppercase tracking-wider transition-colors">
                <ShoppingBag className="w-3 h-3" /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArrivalsSection({ title, products, sectionBg = "" }) {
  return (
    <section className={`py-8 px-6 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-montserrat font-semibold text-white uppercase tracking-[0.1em] text-lg">
            {title}
          </h2>
          <a href="https://level-egypt.com/collections/new-arrivals-2025" target="_blank" rel="noreferrer" className="text-xs text-accent font-semibold tracking-wider uppercase">View All →</a>
        </div>
        <DragSlider products={products} />
      </div>
    </section>
  );
}

export default function NewArrivals() {
  return (
    <>
      <ArrivalsSection
        title="New Arrivals — Men"
        products={menProducts}
        sectionBg="bg-[#0d0d0d]"
      />
      <ArrivalsSection
        title="New Arrivals — Women"
        products={womenProducts}
        sectionBg="bg-[#0d0d0d]"
      />
    </>
  );
}