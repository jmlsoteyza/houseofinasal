'use client';

import MenuCard from './_components/menuCard';
import SideBar from './_components/sideBar';
import { menu, tabs } from './_components/menuData';
import { useState } from 'react';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Full Menu');

  const filtered = menu.filter((item) => item.tabs.includes(activeTab));

  return (
    <section className="max-w-[1250px] w-full min-h-screen mx-auto flex pt-2">
      <SideBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 grid grid-cols-3 gap-4 p-6">
        {filtered.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
