import { FC } from "react";
import { Button } from "../Button/Button";

interface SkillCardTwoProps {
  icon?: string | any;
  title: string;
  subTitle: string;
  img: string;
  bottomTextLeft?: string;
  bottomTextRight?: string;
}

export const SkillCardTwo: FC<SkillCardTwoProps> = ({
  icon,
  title,
  subTitle,
  img,
  bottomTextLeft,
  bottomTextRight,
}) => {
  return (
    <>
      <div className=" flex gap-[10px] h-auto relative justify-center  flex-col bg-[#ffffff08] rounded-[25px] ">
        <div className=" flex gap-[8px]">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-[10px] h-auto flex-1 p-6 flex-nowrap">
              <p className="pt-sans text-2xl whitespace-pre-wrap leading-[1.2em]">{title}</p>
              <p className="sub-heading">{subTitle}</p>
            </div>
            <Button className="w-full" variant={'default'}>Buy now</Button>
          </div>

          <div
            className="items-center flex flex-nowrap gap-[10px] h-min overflow-visible relative"
            style={{
              flex: "2 0 0px",
            }}
          >
            <div
              className="flex-1 flex items-center flex-nowrap gap-[10px] h-[330px] relative p-0"
              style={{ aspectRatio: "2.12 / 1" }}
            >
              <div className="absolute inset-0">
                <img
                  src={img}
                  alt="image"
                  className="block size-full object-cover object-center overflow-clip"
                />
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(217, 217, 217, 0) 50.4594%, rgb(0, 0, 0) 100%)",
                }}
                className="flex-1 overflow-visible relative opacity-100 w-full h-full"
              ></div>
            </div>
          </div>
        </div>
  
      </div>
    </>
  );
};
