'use client';

import MenuCard from './_components/menuCard';
import SideBar from './_components/sideBar';
import { menu, tabs } from './_components/menuData';
import { useState } from 'react';

export default function Menu() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [displayTab, setDisplayTab] = useState(tabs[0]);
  const [visible, setVisible] = useState(true);

  const filtered = menu.filter((item) => item.tabs.includes(displayTab));

  const handleTabChange = (tab) => {
    setVisible(false);
    setTimeout(() => {
      setDisplayTab(tab);
      setActiveTab(tab);
      setVisible(true);
    }, 300); // match fade out duration
  };

  return (
    <section>
      <div className="h-[250px] w-full bg-green-800 mb-8">Save this later</div>
      <section className="max-w-[1250px] w-full min-h-screen mx-auto flex flex-col px-6 mb-10 mt-12">
        <div className="w-full lg:flex">
          <div className="w-48 shrink-0 flex hidden lg:block" />
          {/* spacer matching sidebar width */}

          <div className="flex flex-col content-center">
            {/* tabs mobile version */}
            <div className="relative lg:hidden mb-4 px-4">
              <select
                className="block w-full py-3 px-4 lg:hidden border border-[#27AE60] rounded-lg text-sm font-bold text-white bg-[#27AE60] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1a8a47] appearance-none"
                value={activeTab}
                onChange={(e) => handleTabChange(e.target.value)}
              >
                {tabs.map((tab) => (
                  <option key={tab} value={tab} className="bg-green-700">
                    {tab}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-8 flex items-center pointer-events-none text-white">
                ▼
              </div>
            </div>
            {/* tabs mobile version */}

            <p className="text-2xl font-ui font-medium px-6 hidden lg:block">{activeTab}</p>
          </div>
        </div>
        <div className="flex w-full">
          <SideBar tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
          {/* add this to container when the image and menu data are finalized auto-rows-[360px] */}
          <div
            className={`${
              visible ? 'fade-in' : 'fade-out'
            } flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 py-4 gap-8 auto-rows-[355px]`}
          >
            {filtered.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
