import { Home, Grid3X3, Tag, ShoppingBag, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Grid3X3, label: "Categories", path: "/" },
  { icon: Tag, label: "Brands", path: "/" },
  { icon: ShoppingBag, label: "Cart", path: "/" },
  { icon: User, label: "Account", path: "/" },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md border-t border-white/10 lg:hidden">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path && label === "Home";
          return (
            <Link
              key={label}
              to={path}
              className={`flex flex-col items-center gap-1 flex-1 py-2 transition-colors ${
                isActive ? "text-amber-400" : "text-white/40 hover:text-white/70"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}