export default function SideBar({ tabs, activeTab, onTabChange }) {
  return (
    <aside className="w-48 mt-6 min-h-screen shrink-0">
      {tabs.map((tab) => (
        <div className="flex flex-col items-start mb-4" key={tab} onClick={() => onTabChange(tab)}>
          <button className="bg-[#27AE60] w-full p-2 rounded-lg">
            <span className="text-sm w-full font-ui font-semibold text-white">{tab}</span>
          </button>
        </div>
      ))}
    </aside>
  );
}
