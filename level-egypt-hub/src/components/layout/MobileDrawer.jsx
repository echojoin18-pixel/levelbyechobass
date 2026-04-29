import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

const LEVEL_LOGO = "https://media.base44.com/images/public/69ef8203e23882c441088e9b/69c0f4e5e_level-logo.png";

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const menuData = [
  {
    label: "Men",
    href: "https://level-egypt.com/collections/man",
    sub: [
      { label: "All Men", href: "https://level-egypt.com/collections/man" },
      { label: "Premium Quality", href: "https://level-egypt.com/collections/premium-quality" },
      { label: "Original", href: "https://level-egypt.com/collections/original-mans-shoes" },
      { label: "Sneakers", href: "https://level-egypt.com/collections/sneakers" },
      { label: "Top Sellers", href: "https://level-egypt.com/collections/top-sellers-man" },
    ],
  },
  {
    label: "Women",
    href: "https://level-egypt.com/collections/woman",
    sub: [
      { label: "All Women", href: "https://level-egypt.com/collections/woman" },
      { label: "Premium Quality", href: "https://level-egypt.com/collections/premium-quality-womens-shoes" },
      { label: "Sneakers", href: "https://level-egypt.com/collections/sneakers-woman" },
      { label: "Top Sellers", href: "https://level-egypt.com/collections/top-sellers-woman" },
    ],
  },
  {
    label: "Kids",
    href: "https://level-egypt.com/collections/kids",
    sub: [
      { label: "All Kids", href: "https://level-egypt.com/collections/kids" },
      { label: "New Arrivals 2025", href: "https://level-egypt.com/collections/new-arrivals-kids" },
    ],
  },
  {
    label: "Bags",
    href: "https://level-egypt.com/collections/bags",
    sub: [
      { label: "All Bags", href: "https://level-egypt.com/collections/bags" },
      { label: "Cross Bags", href: "https://level-egypt.com/collections/cross-bags" },
    ],
  },
  {
    label: "Crocs",
    href: "https://level-egypt.com/collections/crocs-mirror-original-men-and-women-and-kids",
    sub: [],
  },
  {
    label: "New Arrivals",
    href: "https://level-egypt.com/collections/new-arrivals-2025",
    sub: [
      { label: "New Men", href: "https://level-egypt.com/collections/new-arrivals-man-2025" },
      { label: "New Women", href: "https://level-egypt.com/collections/new-arrivals-woman-2025" },
      { label: "New Kids", href: "https://level-egypt.com/collections/new-arrivals-kids" },
    ],
  },
];

const CONTACT_NUMBER = "201066999543"; // رقم الواتساب

export default function MobileDrawer({ isOpen, onClose }) {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (label) =>
    setOpenSection((prev) => (prev === label ? null : label));

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-[#0d0d0d] border-r border-white/10 z-50 transform transition-transform duration-300 lg:hidden flex flex-col pb-16 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <img src={LEVEL_LOGO} alt="Level Egypt" className="h-8 w-auto object-contain" />
          <button onClick={onClose} className="p-1 text-white/60 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Items */}
        <div className="overflow-y-auto flex-1">
          {/* Home */}
          <a
            href="https://level-egypt.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center px-5 py-3.5 text-white/80 hover:text-accent hover:bg-white/5 transition-all text-sm font-medium"
          >
            Home
          </a>

          {/* Accordion items */}
          {menuData.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => item.sub.length ? toggle(item.label) : window.open(item.href, '_blank')}
                className="w-full flex items-center justify-between px-5 py-3.5 text-white/80 hover:text-accent hover:bg-white/5 transition-all text-sm font-medium"
              >
                {item.label}
                {item.sub.length > 0 && (
                  <ChevronDown className={`w-4 h-4 transition-transform ${openSection === item.label ? "rotate-180" : ""}`} />
                )}
              </button>

              {/* Sub-items */}
              {item.sub.length > 0 && openSection === item.label && (
                <div className="bg-black/30">
                  {item.sub.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block px-8 py-2.5 text-xs text-white/50 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="px-5 py-1.5 border-t border-white/10">
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-accent transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-accent transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-accent transition-colors"><TikTokIcon /></a>
            <a href={`https://wa.me/${CONTACT_NUMBER}`} target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300 transition-colors"><WhatsAppIcon /></a>
          </div>
        </div>

        {/* Language Section */}
        <div className="border-t border-white/10 px-5 py-2 flex items-center gap-3">
          <button className="text-sm font-medium text-white">English</button>
          <span className="text-white/30">|</span>
          <button className="text-sm font-medium text-white/50 hover:text-white transition-colors">العربية</button>
        </div>
      </div>
    </>
  );
}