import { SkillCard } from "@/components/Cards/SkillCard";
import { SkillCardTwo } from "@/components/Cards/SkillCardTwo";
import { FC } from "react";

export const OurSkills: FC = () => (
  <div className="py-2 px-4 flex flex-col gap-[10px]">
    <SkillCard
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
          color="rgba(255, 255, 255, 0.52)"
          className="select-none size-[32px] fill-[#ffffff85] color-[#ffffff85]"
        >
          <g color="rgba(255, 255, 255, 0.52)" fontWeight="fill">
            <path d="M208,144a15.78,15.78,0,0,1-10.42,14.94l-51.65,19-19,51.61a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88l51.65-19,19-51.61a15.92,15.92,0,0,1,29.88,0l19,51.65,51.61,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"></path>
          </g>
        </svg>
      }
      title={"Latest  Designs"}
      subTitle={"Cutting edge Design Solutions"}
      img={
        "https://framerusercontent.com/images/ZlsvHVoe4Ij6ixuqwwajQzhtMc.jpg"
      }
      bottomTextLeft={
        "Unleash Your Potential And Explore Diffrent Oppertunities"
      }
      bottomTextRight={
        "our solutions are crafted to empower growth and foster success. Discover the possibilities with us."
      }
    />
    <SkillCard
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
          color="rgba(255, 255, 255, 0.52)"
          className="select-none size-[32px] fill-[#ffffff85] color-[#ffffff85]"
        >
          <g color="rgba(255, 255, 255, 0.52)" fontWeight="fill">
            <path d="M220,169.09l-92,53.65L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,169.09Z"></path>
            <path d="M220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09Z"></path>
            <path d="M28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82Z"></path>
          </g>
        </svg>
      }
      title={"Crazy Achivemets"}
      subTitle={"Award Class Showcase"}
      img={
        "https://framerusercontent.com/images/mMLA6wSV0rRcm92esyvsPw6ugxM.jpg"
      }
      bottomTextLeft={"Where Excellence Gets Noticed"}
      bottomTextRight={
        "Featuring 30+ prestigious accolades, symbolizing our dedication to excellence"
      }
    />
    <SkillCardTwo
      title={"Bring your imaginations to  Life"}
      subTitle={"Among the brands I've used, there's a spectrum of quality and reliability. Some brands stand out for their innovative designs"}
      img={
        "https://framerusercontent.com/images/mMLA6wSV0rRcm92esyvsPw6ugxM.jpg"
      }
      // bottomTextLeft={"Where Excellence Gets Noticed"}
      // bottomTextRight={
      //   "Featuring 30+ prestigious accolades, symbolizing our dedication to excellence"
      // }
    />
  </div>
);
