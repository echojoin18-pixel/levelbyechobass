import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "MEN",
    href: "https://level-egypt.com/collections/man",
    sub: [
      { label: "All Men", href: "https://level-egypt.com/collections/man" },
      { label: "Premium Quality", href: "https://level-egypt.com/collections/premium-quality" },
      { label: "Original", href: "https://level-egypt.com/collections/original-mans-shoes" },
      { label: "Mirror", href: "https://level-egypt.com/collections/new-arrivals-man-2025" },
      { label: "ZARA & PULL BEAR", href: "https://level-egypt.com/collections/zara-pull-bear" },
      { label: "Sneakers", href: "https://level-egypt.com/collections/sneakers" },
      { label: "Skecher", href: "https://level-egypt.com/collections/skecher-man" },
      { label: "Top Sellers", href: "https://level-egypt.com/collections/top-sellers-man" },
      { label: "Shoes", href: "https://level-egypt.com/collections/shoes" },
      { label: "Boots", href: "https://level-egypt.com/collections/boots-for-men" },
    ],
  },
  {
    label: "WOMEN",
    href: "https://level-egypt.com/collections/woman",
    sub: [
      { label: "All Women", href: "https://level-egypt.com/collections/woman" },
      { label: "Premium Quality", href: "https://level-egypt.com/collections/premium-quality-womens-shoes" },
      { label: "Original", href: "https://level-egypt.com/collections/original-womens-shoes" },
      { label: "Shoes", href: "https://level-egypt.com/collections/shoes-woman" },
      { label: "Half Boot", href: "https://level-egypt.com/collections/half-boat" },
      { label: "Boots", href: "https://level-egypt.com/collections/boots-for-women" },
      { label: "Slipper", href: "https://level-egypt.com/collections/sleeper" },
      { label: "Mirror", href: "https://level-egypt.com/collections/new-arrivals-woman-2025" },
      { label: "Sneakers", href: "https://level-egypt.com/collections/sneakers-woman" },
      { label: "Top Sellers", href: "https://level-egypt.com/collections/top-sellers-woman" },
    ],
  },
  {
    label: "KIDS",
    href: "https://level-egypt.com/collections/kids",
    sub: [
      { label: "All Kids", href: "https://level-egypt.com/collections/kids" },
      { label: "New Arrivals 2025", href: "https://level-egypt.com/collections/new-arrivals-kids" },
      { label: "Top Sellers", href: "https://level-egypt.com/collections/top-sellers-kids" },
    ],
  },
  {
    label: "BAGS",
    href: "https://level-egypt.com/collections/bags",
    sub: [
      { label: "All Bags", href: "https://level-egypt.com/collections/bags" },
      { label: "Cross Bags", href: "https://level-egypt.com/collections/cross-bags" },
      { label: "Bags Woman", href: "https://level-egypt.com/collections/bags-woman" },
    ],
  },
  {
    label: "CROCS",
    href: "https://level-egypt.com/collections/crocs-mirror-original-men-and-women-and-kids",
    sub: [],
  },
  {
    label: "NEW ARRIVALS",
    href: "https://level-egypt.com/collections/new-arrivals-2025",
    accent: true,
    sub: [
      { label: "New Men", href: "https://level-egypt.com/collections/new-arrivals-man-2025" },
      { label: "New Women", href: "https://level-egypt.com/collections/new-arrivals-woman-2025" },
      { label: "New Kids", href: "https://level-egypt.com/collections/new-arrivals-kids" },
    ],
  },
];

function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };
  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center gap-1 px-4 py-3.5 text-xs font-semibold tracking-wider transition-colors whitespace-nowrap ${
          item.accent
            ? "text-red-500 hover:text-red-400"
            : "text-white/80 hover:text-white"
        }`}
      >
        {item.accent && <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-0.5" />}
        {item.label}
        {item.sub.length > 0 && <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />}
      </a>
      {open && item.sub.length > 0 && (
        <div className="absolute top-full left-0 mt-0 bg-[#141414] border border-white/10 shadow-2xl z-50 min-w-[200px] py-1">
          {item.sub.map((sub) => (
            <a key={sub.label} href={sub.href} target="_blank" rel="noreferrer"
              className="block px-5 py-2.5 text-xs text-white/65 hover:text-white hover:bg-white/5 transition-colors">
              {sub.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NavBar() {
  return (
    <nav className="hidden lg:block bg-[#111] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-0 h-12">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
}