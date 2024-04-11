"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { FC } from "react";
import { Icons } from "../Icons/Icons";
import { usePathname } from "next/navigation";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { User } from "../User/User";

export const Sidebar: FC = () => {
  const pathname = usePathname();
  const sidebarItems = [
    {
      id: 1,
      title: "Home",
      icon: <Icons.Home className="w-[17px] h-[17px]" />,
      link: "/",
    },
    {
      id: 2,
      title: "About",
      icon: <Icons.UserRound className="w-[17px] h-[17px]" />,
      link: "/about",
    },
    {
      id: 3,
      title: "Portfolio",
      icon: <Icons.LayoutGrid className="w-[17px] h-[17px]" />,
      link: "/portfolio",
    },
    {
      id: 4,
      title: "Services",
      icon: <Icons.Sparkle className="w-[17px] h-[17px]" />,
      link: "/services",
    },
    {
      id: 5,
      title: "Shop",
      icon: <Icons.ShoppingBag className="w-[17px] h-[17px]" />,
      link: "/shop",
    },
    {
      id: 6,
      title: "Blog",
      icon: <Icons.Layers className="w-[17px] h-[17px]" />,
      link: "/blog",
    },
    {
      id: 7,
      title: "Contact",
      icon: <Icons.Send className="w-[17px] h-[17px]" />,
      link: "/contact",
    },
  ];
  return (
    <aside
      className="h-screen left-0 max-w-[240px] top-0 sticky w-[1px] z-10 flex-1 border-r bg-[#ffffff08]"
      tabIndex={0}
      style={{ flex: "1 0 0px" }}
    >
      <div className="size-full max-w-full flex flex-col flex-nowrap justify-between overflow-visible relative p-0">
        <header className="border-b-[1px] opacity-80 border-opacity-[0.12] w-full pl-[14px]">
          <Link href={"/"}>
            <div className="h-16 flex gap-[14px] items-center justify-start w-full cursor-pointer">
              <img
                src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2032%2037%22%3E%3Cg%20id%3D%22ss1446482139_1%22%3E%3Cpath%20d%3D%22M%200%200%20L%2031.67%200%20L%2031.67%2037%20L%200%2037%20Z%22%20fill%3D%22transparent%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2022.616%2014.61%20L%2031.61%209.357%20L%2031.61%2016.634%20L%2022.616%2016.634%20Z%22%20fill%3D%22rgb(255%2C255%2C255)%22%20stroke-width%3D%220.12%22%20stroke%3D%22rgb(255%2C255%2C255)%22%20stroke-miterlimit%3D%220.8%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2031.671%209.25%20L%2022.555%2014.575%20L%2015.834%2010.65%20L%2015.834%200%20Z%22%20fill%3D%22rgb(246%2C246%2C246)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2015.834%200%20L%2015.834%2010.65%20L%209.115%2014.575%20L%200%209.25%20Z%22%20fill%3D%22rgb(238%2C238%2C238)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%209.115%2014.575%20L%209.115%2022.425%20L%200%2027.749%20L%200%209.25%20Z%22%20fill%3D%22rgb(226%2C226%2C226)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2015.834%2026.351%20L%2015.834%2037%20L%200%2027.749%20L%209.115%2022.425%20Z%22%20fill%3D%22rgb(203%2C203%2C203)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2031.671%2027.749%20L%2015.834%2037%20L%2015.834%2026.351%20L%2022.555%2022.425%20Z%22%20fill%3D%22rgb(175%2C175%2C175)%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2031.67%2020.304%20L%2031.67%2027.75%20L%2022.555%2022.425%20L%2022.555%2020.304%20Z%22%20fill%3D%22rgb(117%2C117%2C117)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="logo"
                className="w-9 h-[37px]"
              />
              <p className="text-[28px] font-bold opacity-80">ZembleX</p>
            </div>
          </Link>
        </header>

        <div className="pt-[30px] px-4" style={{ flex: "1 0 0px" }}>
          <div className=" flex flex-col gap-1">
            <p className="text-xs">Menu</p>
            {sidebarItems.map((items: any) => (
              <Link href={items.link} key={items.id}>
                <div
                  className={cn(
                    "flex items-center gap-[10px] cursor-pointer py-[5px] px-1 rounded-[10px] opacity-80 border border-transparent",
                    {
                      "bg-[#ffffff0d] border !border-[#ffffff1a] !opacity-100":
                        items.link === pathname,
                    }
                  )}
                >
                  {items.icon}
                  <p style={{ fontFamily: "PT Sans" }} className="">
                    {items.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <SocialLinks />
        <User/>
      </div>
    </aside>
  );
};
