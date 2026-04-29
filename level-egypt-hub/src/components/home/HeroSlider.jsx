import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    brand: "SNEAKERS",
    tag: "New Arrivals",
    title: "Step Up",
    subtitle: "The latest sneakers from Nike, Puma\n& Hugo Boss — only at Level Egypt.",
    cta: "Shop Sneakers",
    cta2: "View All",
    ctaHref: "https://level-egypt.com/collections/sneakers",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=1400&h=700&fit=crop&crop=center",
    overlay: "from-black/75 via-black/40 to-black/5",
  },
  {
    id: 2,
    brand: "BAGS",
    tag: "New Collection",
    title: "Carry Bold",
    subtitle: "Premium bags for every look —\nexplore the Level Egypt collection.",
    cta: "Shop Bags",
    cta2: "View All",
    ctaHref: "https://level-egypt.com/collections/bags",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1400&h=700&fit=crop&crop=center",
    overlay: "from-black/70 via-black/35 to-black/5",
  },
  {
    id: 3,
    brand: "SLIPPERS",
    tag: "Summer Picks",
    title: "Chill Season",
    subtitle: "Comfortable slippers & sandals for every day\n— Crocs, Adidas & more.",
    cta: "Shop Slippers",
    cta2: "View All",
    ctaHref: "https://level-egypt.com/collections/sleeper",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=1400&h=700&fit=crop&crop=center",
    overlay: "from-black/65 via-black/30 to-black/5",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const slide = slides[current];

  return (
    <div className="relative w-full overflow-hidden bg-black" style={{ height: "clamp(420px, 60vw, 680px)" }}>

      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${s.overlay}`} />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-8 sm:px-14 lg:px-20 max-w-2xl">
          {/* Brand label */}
          <p className="text-[11px] font-bold tracking-[0.25em] text-accent uppercase mb-3">
            {slide.brand}
          </p>

          {/* Tag badge */}
          <span className="inline-block bg-accent text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 mb-5">
            {slide.tag}
          </span>

          {/* Title */}
          <h1
            className="font-semibold text-white uppercase leading-none mb-5"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 0.9,
              letterSpacing: "0.05em",
            }}
          >
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-white/60 whitespace-pre-line mb-8 leading-relaxed max-w-sm">
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={slide.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:bg-white/90 transition-colors"
            >
              {slide.cta}
            </a>
            <a
              href="https://level-egypt.com"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 border border-accent text-accent text-[11px] font-bold uppercase tracking-widest hover:bg-accent/10 transition-colors"
            >
              {slide.cta2}
            </a>
          </div>
        </div>
      </div>



      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-7" : "bg-white/30 w-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}