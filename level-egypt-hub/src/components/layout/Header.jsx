import { Search, User, ShoppingBag, Menu } from "lucide-react";

const LEVEL_LOGO = "https://media.base44.com/images/public/69ef8203e23882c441088e9b/0ffba1703_lllevel.png";

export default function Header({ onMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-white/[0.06]">
      <div className="px-4 sm:px-6 h-[72px] flex items-center relative">

        {/* Left: Hamburger (mobile) + Search */}
        <div className="flex items-center gap-1 w-1/3">
          <button
            onClick={onMenuOpen}
            className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <button className="p-2 text-white/60 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Center: Logo — absolutely centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <a href="https://level-egypt.com" target="_blank" rel="noreferrer" className="pointer-events-auto">
            <img
              src={LEVEL_LOGO}
              alt="Level Egypt"
              className="h-14 w-auto object-contain"
              style={{ maxHeight: "56px" }}
            />
          </a>
        </div>

        {/* Right: Language + Account + Cart */}
        <div className="flex items-center justify-end gap-1 w-1/3 ml-auto">
          {/* Language — desktop only */}
          <div className="hidden lg:flex items-center gap-1 text-white/50 hover:text-white text-xs cursor-pointer transition-colors mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
              <path d="M2 12h20"/>
            </svg>
            <span>English</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>

          {/* Account — desktop only */}
          <button className="hidden lg:flex p-2 text-white/60 hover:text-white transition-colors">
            <User className="w-5 h-5" />
          </button>

          {/* Cart */}
          <button className="relative p-2 text-white/60 hover:text-white transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">0</span>
          </button>
        </div>

      </div>
    </header>
  );
}