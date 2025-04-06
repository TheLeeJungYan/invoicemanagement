import React from 'react'

 const logo = () => {
  return (
    <div className="flex gap-3">
        <div className="ml-3 text-white flex items-center justify-center w-9 h-9 bg-radial-[at_20%_20%] shadow-lg shadow-[#008f81]/40 from-white to-[#008f81] to-75% rounded-xl ">
            
            <div className="flex flex-col gap-[2px]">
                <div className="h-[2px] bg-zinc-100 w-3.5 rounded-full shadow-xl"></div>
                <div className="h-[2px] bg-zinc-50 w-2.5 rounded-full"></div>
                <div className="h-[2px] bg-white w-1.5 rounded-xl"></div>
            </div>
           
        </div>
        <span className="font-inter font-[600] text-2xl text-[#008f81] relative top-[2px]">Invoizo</span>
    </div>
  )
}

export default logo;