import React from "react";
import Icon from "./icon";
const Logo = () => {
  return (
    <div className="flex gap-3 items-center">
      <Icon />
      <span className="font-inter font-[600] text-2xl relative top-[2px] text-emerald-950">
        <span className="text-secondary">Invo</span>izo
      </span>
    </div>
  );
};

export default Logo;