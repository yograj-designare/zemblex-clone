import { FC } from "react";

export const BlogCard:FC = () => (
    <a href="/#" className="group">
    <div className="w-full h-[300px] relative">
      <div className="border border-[#ffffff1a] rounded-[20px] bg-[#ffffff08] flex gap-0 flex-nowrap overflow-hidden relative cursor-pointer h-full">
        <div className="rounded-[20px] flex-1 overflow-hidden relative">
          <div className="absolute z-10 flex-none size-full">
            <div className="absolute inset-0">
              <img
                src="https://framerusercontent.com/images/MJLSv2CnokhbWieQSZx2CiaA2I.jpg"
                alt="blog_thumbnail"
                className="size-full object-cover object-center overflow-clip group-hover:scale-[1.02] transition-all ease-in-out  duration-200"
              />
            </div>
          </div>
        </div>
        <div className="p-4 flex-1">
          <div className="flex flex-col justify-between h-full flex-1 w-full relative">
            <div className="flex flex-col gap-[10px] flex-nowrap">
              <div className="flex gap-[10px] items-center w-full">
                <div>
                  <p className="uppercase opacity-60 text-xs pt-sans leading-[1.2em]">
                    design
                  </p>
                </div>
                <div className="size-1 aspect-square rounded-full bg-white relative"></div>
                <div>
                  <p className="text-sm pt-sans opacity-60 leading-[1.2em]">
                    Mar 19, 2024
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="w-full">
                  <h4 className="pt-sans text-2xl leading-[1.2em]">
                    Building Your Personal Brand as a Freelancer
                  </h4>
                </div>
                <div>
                  <p className="nunito-sans text-lg opacity-60 leading-[1.4rem] ">
                    Craft a compelling personal brand to attract
                    freelance clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full justify-between flex-nowrap">
              <div>
                <h6 className="pt-sans leading-[1.2em]">Read More</h6>
              </div>
              <div className="h-[50px] transition-all duration-200 ease-in-out group-hover:bg-white rounded-[12px] flex items-center justify-center overflow-hidden px-6 w-auto relative cursor-pointer">
                <div className="w-[16px] h-[19px] flex-none aspect-square relative">
                  <div className="size-[16px] flex items-center justify-center h-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      focusable="false"
                      className=" select-none size-full shrink-0	 inline-block fill-[rgba(255, 255, 255, 0.7)] group-hover:fill-[rgba(0,0,0,0.7)]"
                    >
                      <g className="fill-[#ffffffb3] group-hover:fill-[#000000b3] ">
                        <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
)