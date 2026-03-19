'use client';

import MenuCard from './_components/menuCard';
import SideBar from './_components/sideBar';
import { menu, tabs } from './_components/menuData';
import { useState } from 'react';

export default function Menu() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const filtered = menu.filter((item) => item.tabs.includes(activeTab));

  return (
    <section>
      <div className="h-[250px] w-full bg-green-800 mb-8">Save this later</div>
      <section className="max-w-[1250px] w-full min-h-screen mx-auto flex flex-col px-6 mb-10">
        <div className="flex w-full">
          <div className="w-48 shrink-0" /> {/* spacer matching sidebar width */}
          <p className="text-2xl font-medium p-6">{activeTab}</p>
        </div>
        <div className="flex w-full">
          <SideBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-6 auto-rows-[350px]">
            {filtered.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
