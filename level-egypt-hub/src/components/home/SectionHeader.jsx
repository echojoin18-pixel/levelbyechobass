export default function SectionHeader({ title, viewAllHref, viewAllLabel = "View All →", children }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-black text-white uppercase tracking-wider">{title}</h2>
      <div className="flex items-center gap-2">
        {children}
        {viewAllHref && (
          <a href={viewAllHref} target="_blank" rel="noreferrer"
            className="text-xs text-[#c8a951] hover:text-[#e0c06a] transition-colors font-medium">
            {viewAllLabel}
          </a>
        )}
      </div>
    </div>
  );
}

export function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 text-xs font-bold uppercase tracking-wider transition-all rounded ${
        active ? "bg-[#c8a951] text-black" : "text-white/50 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}