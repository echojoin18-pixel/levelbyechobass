import { Truck, RotateCcw, Shield, Headphones } from "lucide-react";

const badges = [
  { icon: Truck, title: "Free Shipping", subtitle: "On orders over 500 EGP" },
  { icon: RotateCcw, title: "Easy Returns", subtitle: "30-day return policy" },
  { icon: Shield, title: "100% Authentic", subtitle: "Genuine products guaranteed" },
  { icon: Headphones, title: "24/7 Support", subtitle: "We're always here to help" },
];

export default function TrustBadges() {
  return (
    <section className="py-8 px-4 bg-[#161616] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.title} className="flex items-center gap-3 p-4">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{badge.title}</p>
                  <p className="text-xs text-white/50">{badge.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}