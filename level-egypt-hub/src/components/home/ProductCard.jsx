import { Heart, ShoppingBag, Star } from "lucide-react";

export default function ProductCard({ product, wishlisted, onToggleWishlist, cardBg = "bg-[#1a1a1a]", showStars = false, badge = "New" }) {
  return (
    <div className={`${cardBg} rounded-xl overflow-hidden group relative`}>
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {badge && (
          <span className="absolute top-2 left-2 text-[10px] font-bold bg-[#c8a951] text-black px-2 py-0.5 rounded">
            {badge}
          </span>
        )}
        <button
          onClick={() => onToggleWishlist(product.id)}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-black/80"
        >
          <Heart className={`w-3.5 h-3.5 transition-colors ${wishlisted ? "fill-red-500 text-red-500" : "text-white"}`} />
        </button>
      </div>
      <div className="p-3">
        <button className="w-full mb-2.5 py-1.5 bg-[#c8a951]/15 text-[#c8a951] text-xs font-semibold rounded hover:bg-[#c8a951] hover:text-black transition-colors flex items-center justify-center gap-1.5">
          <ShoppingBag className="w-3 h-3" />
          Add to Cart
        </button>
        <p className="text-[10px] font-bold text-[#c8a951]/90 tracking-widest uppercase truncate">{product.brand}</p>
        <p className="text-xs text-white/60 mt-0.5 leading-tight line-clamp-2 min-h-[32px]">{product.name}</p>
        {showStars && (
          <div className="flex items-center gap-0.5 my-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-[#c8a951] text-[#c8a951]" />
            ))}
          </div>
        )}
        <p className="text-sm font-bold text-white mt-1">{product.price.toLocaleString()} EGP</p>
      </div>
    </div>
  );
}