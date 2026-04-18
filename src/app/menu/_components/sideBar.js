export default function SideBar({ tabs, activeTab, onTabChange }) {
  return (
    <aside className="w-full max-w-50 mt-3 hidden lg:block">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`w-full py-4 cursor-pointer border-b border-gray-300 transition-colors duration-200 text-sm text-left px-4
            ${
              activeTab === tab
                ? 'border-l-[3px] border-l-[#1a5c2a] font-bold text-[#1a5c2a]'
                : 'font-semibold text-gray-600 hover:text-[#1a5c2a]'
            }`}
        >
          {tab}
        </button>
      ))}
    </aside>
  );
}
