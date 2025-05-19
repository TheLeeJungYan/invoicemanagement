import React from "react";
import { DashboardCardProps } from "@/types/Dashboard";
const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
  className,
  iconClassName,
  titleClassName,
  valueClassName,
}) => {
  return (
    <div
      className={`flex-1 py-3 px-6 border rounded-xl flex flex-col relative ${className}`}
    >
      <div
        className={`flex items-center w-8 h-8 justify-center rounded-lg ${iconClassName}`}
      >
        {icon}
      </div>
      <div className={`font-poppins text-xs mt-3 ${titleClassName}`}>
        {title}
      </div>
      <span className={`font-bold font-inter text-2xl ${valueClassName}`}>
        {value}
      </span>
    </div>
  );
};

export default DashboardCard;
