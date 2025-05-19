"use client";
import React from "react";
import { useEffect, useState } from "react";

import Image from "next/image";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpDoubleIcon,
  UserGroupIcon,
  SaveMoneyDollarIcon,
  MoneyRemove02Icon,
} from "@hugeicons/core-free-icons";

import { formatDate } from "@/libs/time";
import DashboardCard from "@/components/Card/DashboardCard/index";

export default function Page() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col px-8 py-6 font-inter">
      <div className="flex gap-2">
        <div className="flex rounded-full border border-gray-300 px-1 py-1 items-center max-w-[110px] text">
          <Image
            src="/avatar.png"
            alt="avatar"
            width={20}
            height={20}
            className="object-cover rounded-full size-5 shrink-0"
          ></Image>
          <span className="font-semibold text-zinc-700 text-xs px-2 truncate">
            Liew xing yu
          </span>
        </div>
        <div className="flex rounded-full border border-gray-300 px-1 py-1 items-center max-w-[110px] text">
          <Image
            src="/avatar2.jpg"
            alt="avatar"
            width={20}
            height={20}
            className="object-cover rounded-full size-5 shrink-0"
          ></Image>
          <span className="font-semibold text-zinc-700 text-xs px-2 truncate">
            Tiang Yeu Feng
          </span>
        </div>
        <div className="px-1 py-1 border border-gray-300 rounded-full">
          <div className="size-5 rounded-full bg-linear-to-r  from-zinc-600 font-semibold to-zinc-900 text-white text-[10px] flex items-center justify-center">
            FH
          </div>
        </div>
      </div>
      <span className="text-3xl font-bold font-montserrat text-zinc-700 mt-4">
        Overview
      </span>
      <span className="text-zinc-300 text-sm  mt-2" suppressHydrationWarning>
        {formatDate(time)}
      </span>
      <div className="mt-6 flex gap-2">
        <div className="flex-1 flex flex-col">
          <label className="font-semibold text-zinc-600">Revenue</label>
          <div className="mt-2 flex gap-4 items-center">
            <p className="text-4xl font-bold font-inter text-zinc-700">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-950 to-secondary">
                RM 25913132
              </span>
              <span
                className="text-zinc-50"
                style={{ WebkitTextStroke: "1px black" }}
              >
                .28
              </span>
            </p>
            <div className="flex gap-2">
              <div className="rounded-full  bg-green-100/70 border border-green-600/10 text-green-600 px-[5px] py-[3px] flex items-center text-xs gap-[3px]">
                <HugeiconsIcon
                  icon={ArrowUpDoubleIcon}
                  size={14}
                  color="currentColor"
                  strokeWidth={2}
                />
                <span>7.9%</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-emerald-950/50 ">
            vs prev. RM 2302312.52&ensp;&nbsp;Apr 1 - Apr 30 2025
          </p>
        </div>
        <div className="flex-2 flex gap-2">
          <DashboardCard
            title="New Customer"
            value={20}
            icon={
              <HugeiconsIcon
                icon={UserGroupIcon}
                size={18}
                color="currentColor"
                strokeWidth={2}
              />
            }
            className="bg-linear-to-r from-zinc-600 to-zinc-900 border-zinc-300"
            iconClassName="bg-white/40 text-white ring-2 ring-white/20"
            titleClassName="text-zinc-400"
            valueClassName="text-white"
          />
          <DashboardCard
            title="Average Invoice Value"
            value={"RM 134.25"}
            icon={
              <HugeiconsIcon
                icon={SaveMoneyDollarIcon}
                size={18}
                color="currentColor"
                strokeWidth={2}
              />
            }
            className="border-zinc-200"
            iconClassName="border bg-emerald-50 text-emerald-600 border-emerald-900/10"
            titleClassName="text-zinc-400"
            valueClassName="text-emerald-950"
          />
          <DashboardCard
            title="Unpaid Invoice Value"
            value={"RM 20.52"}
            icon={
              <HugeiconsIcon
                icon={MoneyRemove02Icon}
                size={16}
                color="currentColor"
                strokeWidth={1.5}
              />
            }
            className="border-zinc-200"
          />
        </div>
      </div>
    </div>
  );
}
