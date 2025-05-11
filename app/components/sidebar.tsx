'use client';
import React from 'react'
import Logo from '@/components/logo';
import { usePathname } from 'next/navigation';
import { HugeiconsIcon } from '@hugeicons/react';
import { Invoice01Icon,DashboardSquare02Icon } from '@hugeicons/core-free-icons';
import Link from 'next/link';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-[300px]  py-5 px-6 h-full flex flex-col">
        <Logo/>
        <div className="mt-5">
            <div className="items-center rounded-xl bg-white px-3 py-2 border border-gray-200 flex gap-3">
                <div className="flex rounded-full items-center justify-center bg-linear-to-r shadow-md from-zinc-600 to-zinc-900 text-white font-inter font-medium px-2 w-8 h-8 text-sm">FH</div>
                <div className="flex flex-col flex-1 overflow-hidden">
                    <span className="text-zinc-800 font-medium text-sm font-inter truncate">Feng Heng Aluminium And Glass</span>
                    <span className="text-xs text-zinc-400">Business Account</span>
                </div>
            </div>
        </div>
        <div className="py-8 flex flex-col">
          <span className="font-inter text-xs text-gray-400 font-medium px-1">Main Menu</span>
          <div className="py-2 flex flex-col  *:px-3  gap-y-2 *:py-3 *:flex *:rounded-md  *:font-medium text-sm *:items-center *:font-inter *:gap-x-4 ">
          <Link href="/dashboard" className={`${pathname === '/dashboard' ? 'text-white bg-secondary' : 'text-gray-500 hover:text-white hover:bg-secondary'}`}>
              <HugeiconsIcon
                icon={DashboardSquare02Icon}
                size={22}
                color="currentColor"
                strokeWidth={2}
              />
              <span>Dashboard</span>
            </Link>
            <Link href="/invoice" className={`${pathname === '/invoice' ? 'text-white bg-secondary' : 'text-gray-500 hover:text-white hover:bg-secondary'}`}>
              <HugeiconsIcon
                icon={Invoice01Icon}
                size={22}
                color="currentColor"
                strokeWidth={2}
              />
              <span>Invoices</span>
            </Link>
          </div>
       
          
        </div>
       
    </div>
  )
}

export default Sidebar