export default function SideBar({ tabs, activeTab, onTabChange }) {
  return (
    <aside className=" w-full max-w-50 mt-3 hidden lg:block">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          // className={`w-full py-2.5 rounded-md cursor-pointer transition-colors duration-200 text-sm font-bold text-white mb-3
          //   ${activeTab === tab ? 'bg-[#1a8a47]' : 'bg-[#27AE60] hover:bg-[#2C9751]'}`}
          className={`w-full py-4 cursor-pointer border-b-1 border-gray-300 transition-colors duration-200 font-semibold text-sm
            ${activeTab === tab ? 'bg-[#FBEE36] rounded-sm border-0' : ''}
            `}
        >
          {tab}
        </button>
      ))}
    </aside>
  );
}
