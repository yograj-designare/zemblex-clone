import { FC } from "react";
import { Icon } from "../Icons/Icons";

export interface NavbarLinks {
  icon: Icon;
  displayName: string
}

export const NavbarLinks: FC<NavbarLinks> = ({ icon, displayName }) => {
  return (
    <div className="relative group">
      <div className="aspect-square size-12 flex items-center justify-center bg-[#ffffff0f] rounded-[10px] cursor-pointer relative">
        {icon}
      </div>
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 hidden group-hover:block">
        <p className=" text-xs bg-[#ffffff0f] w-full  py-1 px-[18px] rounded-full">
          {displayName}
        </p>
      </div>
    </div>
  );
};
