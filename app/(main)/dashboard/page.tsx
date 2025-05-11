'use client' 
import React from 'react'
import { useEffect, useState } from 'react';
export default function Page() {
  const [time, setTime] = useState(new Date());
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    return `${day} ${month} ${year}, ${hours}:${minutes}:${seconds} ${ampm} `;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col px-8 py-6 font-inter">
      <span className="text-3xl font-bold font-sans text-zinc-700">☀️ Welcome, Liew Xing Yu</span>
      <span className="text-zinc-400 text-sm ml-2 mt-2">{formatDate(time)}</span>
    </div>
  )
}
