import { FC } from "react";
import { Icons } from "../Icons/Icons";
import { NavbarLinks } from "./NavbarLinks";

const links = [
  {
    id: 1,
    link: "",
    icon: <Icons.ShoppingBag className="size-5" />,
    displayName: "Shop",
  },
  {
    id: 2,
    link: "",
    icon: <Icons.Mail className="size-5" />,
    displayName: "Newsletter",
  },
  {
    id: 3,
    link: "",
    icon: <Icons.Send className="size-5" />,
    displayName: "contact",
  },
  {
    id: 4,
    link: "",
    icon: <Icons.SquareUserRound className="size-5" />,
    displayName: "About",
  },
];

export const Navbar: FC = () => {
  return (
    <div className="py-2 mx-auto w-full">
      <div className="h-[48px] flex items-center justify-between">
        <div className="flex items-center gap-[10px] cursor-pointer opacity-50 hover:opacity-100 px-2 rounded-lg bg-[#ffffff08]  p-[15px]">
          <Icons.Search className="w-[20px] h-[22px]" />
          <p className="text-xs nunito-sans leading-[1.4em]">Search here...</p>
          {/* <input
            type="text"
            placeholder="search here"
            className="appearance-none w-full h-auto p-[15px] leading-[1.2em] nunito-sans rounded-lg bg-[#ffffff08] text-white outline-none placeholder:text-[#ffffff59]"
          /> */}
        </div>
        <div className="flex items-center gap-[16px]">
          {links.map((each: any) => (
            <NavbarLinks icon={each.icon} displayName={each.displayName} key={each.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};
