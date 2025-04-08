import React from 'react'

 const logo = () => {
  return (
    <div className="flex gap-3 items-center">
      {/* <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="w-4 h-1.5 bg-secondary rounded-sm"></div>
          <div className="w-3 h-1.5 bg-secondary rounded-md"></div>
        </div>
        <div className="w-6 h-1.5 bg-secondary rounded-sm"></div>
        <div className="w-8 h-1.5 bg-secondary rounded-sm"></div>
      </div> */}
        <div className="ml-3 text-white flex items-center justify-center w-9 h-9 bg-linear-to-br  from-secondary/20 to-secondary to-50% rounded-xl ">
            
            <div className="flex flex-col gap-[2px]">
                <div className="h-[2px] bg-zinc-100 w-4 rounded-full shadow-xl"></div>
                <div className="h-[2px] bg-zinc-50 w-3 rounded-full"></div>
                <div className="h-[2px] bg-white w-1.5 rounded-xl"></div>
            </div>
           
        </div>
        <span className="font-inter font-[600] text-2xl relative top-[2px] text-gray-800"><span className="text-secondary">Invoi</span>zo</span>
    </div>
  )
}

export default logo;