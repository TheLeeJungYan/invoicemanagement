import React from 'react'
import Logo from '@/components/logo';
const sidebar = () => {
  return (
    <div className="w-[300px] bg-gray-50 border-r border-gray-200 px-6 py-5">
        <Logo/>
        <div className="mt-5">
            <div className="items-center rounded-xl bg-white px-3 py-2 shadow-sm flex gap-3">
                <div className="flex rounded-full items-center justify-center bg-linear-to-r shadow-md from-zinc-600 to-zinc-900 text-white font-inter font-medium px-2 w-8 h-8 text-sm">GF</div>
                <div className="flex flex-col">
                    <span className="text-zinc-800 font-medium text-sm font-inter">Greek Freak</span>
                    <span className="text-xs text-zinc-400">Business Account</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default sidebar