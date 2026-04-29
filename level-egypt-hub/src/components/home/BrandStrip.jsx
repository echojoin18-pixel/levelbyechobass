import { useRef, useState } from "react";

const brands = [
  { name: "Adidas", href: "https://level-egypt.com/search?q=adidas" },
  { name: "Nike", href: "https://level-egypt.com/search?q=nike" },
  { name: "Puma", href: "https://level-egypt.com/search?q=puma" },
  { name: "New Balance", href: "https://level-egypt.com/search?q=new+balance" },
  { name: "Under Armour", href: "https://level-egypt.com/search?q=under+armour" },
  { name: "Asics", href: "https://level-egypt.com/search?q=asics" },
  { name: "GUCCI", href: "https://level-egypt.com/search?q=gucci" },
  { name: "Louis Vuitton", href: "https://level-egypt.com/search?q=louis+vuitton" },
  { name: "DIOR", href: "https://level-egypt.com/search?q=dior" },
  { name: "Calvin Klein", href: "https://level-egypt.com/search?q=calvin+klein" },
  { name: "BOSS", href: "https://level-egypt.com/search?q=hugo+boss" },
  { name: "Tommy Hilfiger", href: "https://level-egypt.com/search?q=tommy+hilfiger" },
  { name: "Alexander McQueen", href: "https://level-egypt.com/search?q=alexander+mcqueen" },
];

export default function BrandStrip() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    setIsPaused(true);
    startX.current = e.clientX;
    scrollStart.current = containerRef.current?.scrollLeft ?? 0;
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    containerRef.current.scrollLeft = scrollStart.current - (e.clientX - startX.current);
  };
  const stopDrag = () => {
    isDragging.current = false;
    setIsPaused(false);
  };

  const items = [...brands, ...brands, ...brands];

  return (
    <section className="py-10 px-4 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-black text-white uppercase tracking-wider text-center mb-6">Shop by Brand</h2>
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          {items.map(({ name, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={name}
              className="flex-none px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-amber-400/40 hover:bg-white/10 transition-all whitespace-nowrap text-sm font-bold text-white/60 hover:text-white"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}