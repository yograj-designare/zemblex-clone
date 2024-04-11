import { Button } from "@/components/Button/Button";
import { ServiceCard } from "@/components/Cards/ServiceCard";
import { Icons } from "@/components/Icons/Icons";
import { FC } from "react";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Design",
    icon: (
      <Icons.WebDesignIcon className="select-none size-full inline-block group-hover:fill-[rgba(0,0,0,0.9)] fill-[rgba(255,255,255,0.9)] " />
    ),
  },
  {
    id: 2,
    title: "Web Design",
    icon: (
      <Icons.UIIcon className="select-none size-full inline-block group-hover:fill-[rgba(0,0,0,0.9)] fill-[rgba(255,255,255,0.9)] " />
    ),
  },
  {
    id: 3,
    title: "Web Design",
    icon: (
      <Icons.GrapicDesignIcon className="select-none size-full inline-block group-hover:fill-[rgba(0,0,0,0.9)] fill-[rgba(255,255,255,0.9)] " />
    ),
  },
];

export const OurServices: FC = () => (
  <div className="px-4 pt-[108px] pb-12 flex flex-col gap-[10px] items-start">
    <div className="flex flex-col gap-[10px] ">
      <p className="text-[32px] leading-[1.2em]">
        Explore Our Range of Services
      </p>
      <p className="sub-heading">
        Step into a world of cutting-edge design and limitless possibilities.
        Elevate your experience with our futuristic templates, crafting a
        tomorrow that starts now.
      </p>
    </div>
    <div className="py-5 flex gap-6 items-center justify-center w-full">
      {SERVICES_DATA.map((each: any) => (
        <ServiceCard key={each.id} title={each.title} icon={each.icon} />
      ))}
    </div>
    <div className="w-full px-1">
      <Button variant={"default"} className="w-full">
        view all services
      </Button>
    </div>
  </div>
);
