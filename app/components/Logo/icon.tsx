import React from "react";

const LogoIcon = ({ additionalClass }: { additionalClass?: string }) => {
  return (
    <div
      className={`z-[20] text-white flex items-center justify-center w-9 h-9 bg-linear-to-br  from-secondary/20 to-secondary to-50% rounded-xl ${additionalClass}`}
    >
      <div className="flex flex-col gap-[2px]">
        <div className="h-[2px] bg-zinc-100 w-4 rounded-full shadow-xl"></div>
        <div className="h-[2px] bg-zinc-50 w-3 rounded-full"></div>
        <div className="h-[2px] bg-white w-1.5 rounded-xl"></div>
      </div>
    </div>
  );
};

export default LogoIcon;
