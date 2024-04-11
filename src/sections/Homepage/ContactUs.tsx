import { FC } from "react";

export const ContactUs: FC = () => (
  <div className="px-4 flex flex-col gap-[10px]">
    <div className="">
      <h2 className="text-[32px] leading-[1.2em]">Let's Connect</h2>
    </div>
    <div className="w-full h-auto flex flex-col gap-2">
      <a
        href="/"
        className="flex flex-col items-center justify-center flex-nowrap gap-[10px] h-[541px] "
      >
        <div className="flex-1 max-h-[600px] flex flex-col gap-4 overflow-hidden items-center justify-center w-full border border-[#ffffff33] rounded-[25px] p-4">
          <div>
            <p className="whitespace-pre-wrap inter text-xl leading-[1.2em] work-sans">
              Have a Project In Mind
            </p>
          </div>
          <div>
            <p className="text-[64px] leading-[1.2em]">Contact Now</p>
          </div>
        </div>
      </a>
    </div>
  </div>
);
