import React from 'react'
import Sidebar from '@/components/sidebar'
import Image from 'next/image';
import { HugeiconsIcon } from '@hugeicons/react';
import { Notification02Icon,ArrowDown01Icon,ArrowRight01Icon } from '@hugeicons/core-free-icons';
const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="flex h-full flex-1 bg-zinc-50 w-full">
        <Sidebar/>
        <div className="flex flex-col flex-1 bg-white border-zinc-200 border-l">
          <header className=" border-zinc-200 py-4 px-4 font-inter flex items-center border-b text-gray-400">
            <div className="text-sm items-center flex gap-2 px-4">
              <span>Main Menu</span>
              <span className="mt-[.5px]">
                <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={16}
                      color="currentColor"
                      strokeWidth={1.5}
                    />
              </span>
              <span className="text-gray-700">Dashboard</span>
            </div>
            <div className="ml-auto flex gap-5">
              <button className="border rounded-md size-10 flex items-center justify-center border-zinc-300 text-zinc-800 cursor-pointer">
                <HugeiconsIcon
                    icon={Notification02Icon}
                    size={18}
                    color="currentColor"
                    strokeWidth={1}
                  />
              </button>
              <button className="flex px-4 items-center border-l border-zinc-300 cursor-pointer">
                <div className="relative rounded-full "><Image src="/avatar.png" alt="avatar" width={50} height={50} className="object-cover rounded-full size-10"></Image><div className="size-2.5 rounded-full bg-green-500 ring-2 ring-green-500/30 absolute bottom-0 right-0"></div></div>
                <div className="flex flex-col ml-3 text-left">
                  <span className="font-semibold text-zinc-800 text-sm">Liew Xing Yu</span>
                  <span className="text-xs text-zinc-400">liewxingyu@gmail.com</span>
                </div>
                <div className="ml-3">
                  <HugeiconsIcon
                    icon={ArrowDown01Icon}
                    size={20}
                    color="currentColor"
                    strokeWidth={1}
                  />
                  </div>
              </button>
            </div>
          </header>
         {children}
        </div>
    </div>
 
  )
}

export default layout