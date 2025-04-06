import React from 'react'
import Logo from '@/components/logo';
import { HugeiconsIcon } from '@hugeicons/react';
import { Invoice01Icon,DashboardSquare02Icon } from '@hugeicons/core-free-icons';
import Link from 'next/link';
const sidebar = () => {
  return (
    <div className="w-[300px] bg-gray-50 border-r border-gray-200 py-5 px-6">
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
        <div className="py-6 flex flex-col">
          <span className="font-inter text-xs text-gray-400 font-medium px-1">Main Menu</span>
          <div className="py-2 flex flex-col *:text-gray-500 *:px-3 *:border gap-y-1 *:border-transparent *:py-3 *:flex *:rounded-lg  *:font-medium text-sm *:items-center *:font-inter *:gap-x-4 *:hover:bg-white *:hover:border-gray-200 *:hover:shadow-sm *:transition-all *:duration-200 *:hover:text-gray-800">
          <Link href="/">
              <HugeiconsIcon
                icon={DashboardSquare02Icon}
                size={22}
                color="currentColor"
                strokeWidth={1.5}
                className="text-gray-800"
              />
              <span>Dashboard</span>
            </Link>
            <Link href="/invoice">
              <HugeiconsIcon
                icon={Invoice01Icon}
                size={22}
                color="currentColor"
                strokeWidth={1.5}
                className="text-gray-800"
              />
              <span>Invoices</span>
            </Link>
          </div>
       
         
        </div>
    </div>
  )
}

export default sidebar