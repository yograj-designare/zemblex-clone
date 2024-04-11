import { Button } from "@/components/Button/Button";
import { Icons } from "@/components/Icons/Icons";
import { FC } from "react";

export const LastestProjects: FC = () => (
  <div className="py-[68px] px-4 flex flex-col gap-1">
    <div>
      <p className="text-[32px]">Recent Projects</p>
    </div>
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((each: any) => (
        <div className="p-4 flex flex-col gap-1 items-start cursor-pointer relative" key={each}>
          <div className="h-[408px] w-full" style={{ aspectRatio: "0.75 / 1" }}>
            <img
              src="https://framerusercontent.com/images/P7Vu21FNcnOWHhVUwjpH9n0ujQc.jpg?scale-down-to=1024"
              alt="project_1"
              className="object-cover object-center size-full rounded-[20px]"
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-xs nunito-sans opacity-50">Element</p>
            <p className="text-xs inter opacity-50">1/1/70</p>
          </div>
          <div className="absolute right-[42px] top-9">
            <Icons.VerticalArrow className="select-none size-6 inline-block fill-[rgba(255,255,255)]"/>
          </div>
        </div>
      ))}
    </div>
    <div className="pt-4 px-2">
        <Button className="w-full" variant={'default'}>View all projects</Button>
    </div>
  </div>
);


