import { FC } from "react";

export const TestimonialCard: FC = () => (
  <li>
    <div className="w-[500px] h-[300px] relative">
      <div className="border size-full bg-[#ffffff08] border-[#ffffff0d] rounded-[21px] flex flex-col gap-4 flex-nowrap justify-start items-start overflow-hidden pt-[48px] pb-[32px] px-0 relative">
        <div className="flex flex-none gap-4 items-start w-full px-4 justify-start relative">
          <div className="rounded-[150px] aspect-square flex-none h-[40px] relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://framerusercontent.com/images/vUOoDhltpVMJhUDGlWK2K5fLA.jpg"
                alt="user_image"
                className="block size-full object-cover object-center overflow-clip"
                style={{ borderRadius: "inherit" }}
              />
            </div>
          </div>
          <div className="flex flex-1 items-center flex-nowrap flex-col gap-0 overflow-visible p-0 relative">
            <div className="flex flex-col justify-start w-full h-auto relative">
              <h5 className="nunito-sans text-lg">David Park</h5>
            </div>
            <div className="flex flex-col justify-start items-start text-[#0099ff0] w-full">
              <p className="text-[#ffe3e399] nunito-sans text-sm">NexusInc</p>
            </div>
          </div>
        </div>
        <div className="flex flex-none items-center justify-start px-4 gap-0 h-auto overflow-visible w-full flex-col relative">
          <div className="flex flex-col justify-start">
            <p className="nunito-sans opacity-60 text-lg">
              Recommend Your Company highly enough! From start to finish, their
              professionalism and expertise were evident. Our project was
              completed ahead of schedule and exceeded all expectations
            </p>
          </div>
        </div>
      </div>
    </div>
  </li>
);
