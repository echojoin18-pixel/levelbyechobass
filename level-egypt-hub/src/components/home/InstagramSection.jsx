import { Instagram } from "lucide-react";

const posts = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=300&h=300&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300&h=300&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300&h=300&fit=crop&crop=center",
];

export default function InstagramSection() {
  return (
    <section className="py-10 px-4 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Instagram className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-bold text-amber-400">@levelegyptofficial</span>
        </div>
        <h2 className="text-xl font-black text-white uppercase tracking-wider mb-1">Follow Our Style</h2>
        <p className="text-sm text-white/50 mb-6">Tag us in your outfits for a chance to be featured</p>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
          {posts.map((url, i) => (
            <a key={i} href="https://instagram.com" target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-lg aspect-square block">
              <img src={url} alt={`Instagram post ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}