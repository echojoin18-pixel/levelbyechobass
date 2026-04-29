import { useRef, useEffect, useCallback } from "react";

const collections = [
  { title: "Men's Collection", subtitle: "Sport & Casual", href: "https://level-egypt.com/collections/man", image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_4372.jpg?v=1743442450" },
  { title: "Women's Collection", subtitle: "Elegant & Trendy", href: "https://level-egypt.com/collections/woman", image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9736.jpg?v=1748613992" },
  { title: "Kids", subtitle: "Little Steps, Big Style", href: "https://level-egypt.com/collections/kids", image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9227_1a84ef5b-78fc-4c7a-bd01-21850bbe5af1.jpg?v=1766543265" },
  { title: "Sneakers", subtitle: "Fresh Drops Weekly", href: "https://level-egypt.com/collections/sneakers", image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2385_1c605de8-6893-4f7c-882e-4a7aa3ac5a3d.jpg?v=1772668909" },
  { title: "Bags", subtitle: "New Season Styles", href: "https://level-egypt.com/collections/bags", image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0857_940db980-7136-4556-a0d7-fa6bc644204b.jpg?v=1765934051" },
  { title: "New Arrivals", subtitle: "Just Landed", href: "https://level-egypt.com/collections/new-arrivals-2025", image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0330copy.jpg?v=1775955824" },
  { title: "Slippers", subtitle: "Comfort & Cool", href: "https://level-egypt.com/collections/slipper-man", image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_1669copy.jpg?v=1775430172" },
  { title: "Boots", subtitle: "Built for Every Season", href: "https://level-egypt.com/collections/boots", image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/83.webp?v=1730656283" },
  { title: "Heels", subtitle: "Walk in Style", href: "https://level-egypt.com/collections/heels", image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/7655468811.webp?v=1776218643" },
  { title: "Crocs", subtitle: "Mirror Original", href: "https://level-egypt.com/collections/crocs-mirror-original-men-and-women-and-kids", image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_3061.jpg?v=1752815734" },
  { title: "ZARA & PULL&BEAR", subtitle: "Global Styles", href: "https://level-egypt.com/collections/zara-pull-bear", image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0773.jpg?v=1734373187" },
  { title: "Skechers", subtitle: "Comfort Redefined", href: "https://level-egypt.com/collections/skecher-man", image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2264.jpg?v=1752420237" },
];

const CARD_W = 145;
const CARD_GAP = 10;
const SPEED = 0.5;

export default function CollectionsGrid() {
  const trackRef = useRef(null);
  const rafRef = useRef(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const dragStart = useRef({ x: 0, pos: 0 });
  const didDragRef = useRef(false);
  const totalW = collections.length * (CARD_W + CARD_GAP);

  const tick = useCallback(() => {
    if (!trackRef.current) return;
    if (!pausedRef.current) {
      posRef.current += SPEED;
      if (posRef.current >= totalW) posRef.current = 0;
      trackRef.current.style.transform = `translateX(${-posRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [totalW]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const onMouseDown = (e) => {
    pausedRef.current = true;
    didDragRef.current = false;
    dragStart.current = { x: e.clientX, pos: posRef.current };
  };
  const onMouseMove = (e) => {
    if (!pausedRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    if (Math.abs(dx) > 3) didDragRef.current = true;
    let next = dragStart.current.pos - dx;
    if (next < 0) next += totalW;
    if (next >= totalW) next -= totalW;
    posRef.current = next;
    if (trackRef.current) trackRef.current.style.transform = `translateX(${-next}px)`;
  };
  const onMouseUp = () => { pausedRef.current = false; };
  const onTouchStart = (e) => {
    pausedRef.current = true;
    didDragRef.current = false;
    dragStart.current = { x: e.touches[0].clientX, pos: posRef.current };
  };
  const onTouchMove = (e) => {
    const dx = e.touches[0].clientX - dragStart.current.x;
    if (Math.abs(dx) > 5) didDragRef.current = true;
    let next = dragStart.current.pos - dx;
    if (next < 0) next += totalW;
    if (next >= totalW) next -= totalW;
    posRef.current = next;
    if (trackRef.current) trackRef.current.style.transform = `translateX(${-next}px)`;
  };
  const onTouchEnd = () => { pausedRef.current = false; };

  const doubled = [...collections, ...collections];

  return (
    <section className="py-8 px-4 bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-black text-white uppercase tracking-wide">Shop Collections</h2>
          <a href="https://level-egypt.com/collections" target="_blank" rel="noreferrer" className="text-xs text-accent font-semibold uppercase tracking-wider">View All →</a>
        </div>
      </div>
      <div
        className="cursor-grab select-none overflow-hidden"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{ gap: `${CARD_GAP}px`, willChange: "transform" }}
        >
          {doubled.map((col, i) => (
            <a
              key={i}
              href={col.href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => { if (didDragRef.current) e.preventDefault(); }}
              className="relative flex-none overflow-hidden rounded-xl group"
              style={{ width: `${CARD_W}px`, height: "190px" }}
            >
              <img src={col.image} alt={col.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white/60 text-[9px] uppercase tracking-wider mb-0.5">{col.subtitle}</p>
                <p className="text-white text-xs font-bold leading-tight">{col.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}