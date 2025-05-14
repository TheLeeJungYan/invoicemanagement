import React from "react";
import { DashboardCardProps } from "@/types/Dashboard";
import { HugeiconsIcon } from '@hugeicons/react';
import { TradeUpIcon,UserGroupIcon } from '@hugeicons/core-free-icons';
const DashboardCard:React.FC<DashboardCardProps> = ({title,value})=>{
    return (
        <div className="flex-1 py-4 px-6 border rounded-xl border-zinc-200 shadow-xs flex flex-col relative justify-center bg-linear-to-br from-zinc-900 to-zinc-700">
             { title!=null && <div className="absolute size-9  bg-white/20  shadow-sm  text-white rounded-lg top-3 right-3 bg-linear-to-r flex items-center justify-center">
 <HugeiconsIcon
                            icon={UserGroupIcon}
                            size={22}
                            color="currentColor"
                            strokeWidth={1}
                            />
            </div>}
            <div className="text-zinc-500 font-poppins text-xs">{title}</div>
            <span className="font-bold font-inter text-2xl mt-2.5 text-white">{value}</span>
            { title!=null && 
                <span className="text-xs font-inter text-zinc-400 inline-flex items-center">
                    <span className="text-emerald-500 flex items-center">
                        <HugeiconsIcon
                            icon={TradeUpIcon}
                            size={14}
                            color="currentColor"
                            strokeWidth={2}
                            />&nbsp;25%</span> 
                    &nbsp;vs last month
                </span>}
        </div>
    );
}

export default DashboardCard;