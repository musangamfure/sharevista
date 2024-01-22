'use client';

import { Upload, File, Shield } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = [
    {
      id: 1,
      name: 'Upload',
      icon: Upload,
      path: '/upload',
    },
    {
      id: 2,
      name: 'Files',
      icon: File,
      path: '/files',
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
      path: '/upgrade',
    },
  ];
  return (
    <div className='shadow-sm border-r h-full'>
      <div className='p-5 border-b'>
        <Image src='/logo.svg' width={70} height={50} alt='logo' />
      </div>
      <div className='flex flex-col float-left gap-2 w-full'>
        {menuItems.map((item, index) => (
          <button
            className={` flex  gap-2 px-6 hover:bg-gray-100 w-full rounded-md py-2 text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              activeIndex === index
                ? 'bg-blue-50 text-primary'
                : 'text-gray-500'
            }`}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
