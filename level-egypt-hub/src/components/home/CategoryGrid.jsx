import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Men's",
    image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_2385_1c605de8-6893-4f7c-882e-4a7aa3ac5a3d.jpg?v=1772668909",
    href: "https://level-egypt.com/collections/man",
  },
  {
    name: "Women's",
    image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0744copy.jpg?v=1765771408",
    href: "https://level-egypt.com/collections/woman",
  },
  {
    name: "Kids",
    image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9227_1a84ef5b-78fc-4c7a-bd01-21850bbe5af1.jpg?v=1766543265",
    href: "https://level-egypt.com/collections/kids",
  },
  {
    name: "Bags",
    image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_0857_940db980-7136-4556-a0d7-fa6bc644204b.jpg?v=1765934051",
    href: "https://level-egypt.com/collections/bags",
  },
  {
    name: "Women's Bags",
    image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_9028_d08bab34-1f69-40a6-9d6d-799c12ea0a5e.jpg?v=1765856549",
    href: "https://level-egypt.com/collections/bags-woman",
  },
  {
    name: "Crocs",
    image: "https://cdn.shopify.com/s/files/1/0715/9218/1976/files/HSN_1647copy.jpg?v=1775350756",
    href: "https://level-egypt.com/collections/crocs-mirror-original-men-and-women-and-kids",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-4 px-4 bg-[#161616]">
      <div className="max-w-7xl mx-auto">

        {/* Mobile: circular cards */}
        <div className="flex lg:hidden gap-4 overflow-x-auto scrollbar-hide pb-1">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              target="_blank"
              rel="noreferrer"
              className="flex-none flex flex-col items-center gap-1.5 group"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent transition-colors">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-white text-[10px] font-semibold text-center leading-tight">
                {cat.name}
              </span>
            </a>
          ))}
        </div>

        {/* Desktop: circular cards */}
        <div className="hidden lg:flex justify-center gap-8">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent transition-colors">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-white font-semibold text-sm text-center">{cat.name}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}