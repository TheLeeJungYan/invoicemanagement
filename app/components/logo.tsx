import React from "react";
import LogoIcon from "./logoIcon";
const logo = () => {
  return (
    <div className="flex gap-3 items-center">
      <LogoIcon />
      <span className="font-inter font-[600] text-2xl relative top-[2px] text-gray-800">
        <span className="text-secondary">Invo</span>izo
      </span>
    </div>
  );
};

export default logo;
