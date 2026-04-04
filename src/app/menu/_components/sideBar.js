export default function SideBar({ tabs, activeTab, onTabChange }) {
  return (
    <aside className="w-46 mt-4 h-screen shrink-0 sticky top-23 hidden lg:block">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`w-full py-2.5 rounded-md cursor-pointer transition-colors duration-200 text-sm font-bold text-white mb-3
            ${activeTab === tab ? 'bg-[#1a8a47]' : 'bg-[#27AE60] hover:bg-[#2C9751]'}`}
        >
          {tab}
        </button>
      ))}
    </aside>
  );
}
