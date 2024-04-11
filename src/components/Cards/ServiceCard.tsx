import React, { FC } from "react";

interface ServiceCardProps {
  title: string;
  icon: string | React.ReactNode;
}

export const ServiceCard: FC<ServiceCardProps> = ({ title, icon }) => {
  return (
    <div className="h-[333px] aspect-square flex-1">
      <div className="rounded-[30px] p-5 h-full border border-[#ffffff38] flex flex-col items-center justify-center overflow-hidden hover:bg-white cursor-pointer group">
        <div className="w-full flex items-center justify-center p-0">
          <div className="p-2">
            <div className="w-9 h-[39px]">
              <div className="size-[36px]">
                {icon}
              </div>
            </div>
          </div>
        </div>
        <p className="sub-heading group-hover:text-black !opacity-100">{title}</p>
      </div>
    </div>
  );
};
