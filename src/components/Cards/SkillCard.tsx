import { FC } from "react";

interface SkillCardProps {
  icon: string | any;
  title: string;
  subTitle: string;
  img: string;
  bottomTextLeft: string;
  bottomTextRight: string;
}

export const SkillCard: FC<SkillCardProps> = ({
  icon,
  title,
  subTitle,
  img,
  bottomTextLeft,
  bottomTextRight,
}) => {
  return (
    <>
      <div className="py-2 px-1 flex gap-[10px] h-auto relative justify-center  flex-col bg-[#ffffff08] rounded-[25px] ">
        <div className=" flex gap-[10px]">
          <div className="flex flex-col gap-[6px] h-auto flex-1 pt-4 pl-4 flex-nowrap">
            <div className="size-[64px] border border-[#ffffff29] flex items-center justify-center gap-[10px] rounded-[15px]">
              <div className="w-[32px] h-[35px] flex-none">{icon}</div>
            </div>
            <p className="pt-sans text-2xl whitespace-pre-wrap">{title}</p>
            <p className="sub-heading">{subTitle}</p>
          </div>
          <div
            className="items-center flex flex-nowrap gap-[10px] h-min overflow-visible relative p-4"
            style={{
              flex: "2 0 0px",
            }}
          >
            <div
              className="flex-1 flex items-center flex-nowrap gap-[10px] h-[314px] relative p-0"
              style={{ aspectRatio: "2.0766666666666667 / 1" }}
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
                className="flex-1 bg-red-300 overflow-visible relative opacity-100 w-full h-full"
              ></div>
            </div>
          </div>
        </div>
        <div className="p-4 w-full flex flex-nowrap gap-1 justify-center">
          <p className="sub-heading flex-1 !opacity-100">{bottomTextLeft}</p>
          <p className="sub-heading flex-1">{bottomTextRight}</p>
        </div>
      </div>
    </>
  );
};
