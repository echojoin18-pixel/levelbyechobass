const LION_LOGO = "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/lllevel_1776708201907.png";

const offers = [
  "Premium Quality for Men, Women & Kids — Top International Brands",
  "Free Shipping Anywhere in Egypt — Delivered to Your Door",
  "14-Day Easy Returns — Shop with Confidence",
  "Adidas · Louis Vuitton · Gucci · Hugo Boss · Calvin Klein",
  "Men · Women · Kids — Thousands of Styles at Level Egypt",
];

export default function AnnouncementTicker() {
  return (
    <div className="bg-[#0d0d0d] border-t border-b border-white/8 py-2.5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...offers, ...offers].map((offer, i) => (
          <span key={i} className="flex items-center gap-4 px-4 text-xs font-medium text-white/70">
            <img src={LION_LOGO} alt="" className="w-4 h-4 object-contain opacity-40 inline" />
            {offer}
            <span className="text-white/20">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}