import { Button } from "@/components/Button/Button";
import { FC } from "react";

export const NewsLetter: FC = () => (
  <div className="py-[80px] px-4 h-min">
    <div className="py-[60px] flex overflow-hidden gap-[6px] relative rounded-[20px] border border-[#ffffff0d]">
      <div className="flex-1 rounded-[10px] self-stretch h-auto flex items-center">
        <div className="flex-1 flex p-4 relative h-full">
          <div className="absolute inset-0">
            <img
              src="https://framerusercontent.com/images/cvUTo5ugUjyX2DAVhlVyMWNpzxY.jpg"
              alt="newsletter_image"
              className="size-full object-cover object-center overflow-clip"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 gap-6 flex-col overflow-hidden h-min px-4">
        <div>
          <h2 className="text-[32px] leading-[1.2em] whitespace-pre-wrap">
            Never Miss a Moment  Subscribe to Our Newsletter
          </h2>
        </div>
        <div>
          <p className="nunito-sans text-lg leading-[1.4em] opacity-60">
            Don't miss out on anything Subscribe to our newsletter to stay
            informed about our latest projects, collaborations, and helpful
            resources. join over 100.000+ Readers Worldwide…
          </p>
        </div>
        <div className="h-auto relative flex-none">
          <div className="size-full relative">
            <form className="size-full flex flex-col gap-[10px] relative">
              <input
                type="text"
                placeholder="name@email.com"
                className="appearance-none w-full h-auto p-[15px] leading-[1.2em] nunito-sans rounded-lg bg-[#ffffff08] text-white outline-none placeholder:text-[#ffffff59]"
              />
              <div className="relative">
                <Button className="!text-base !h-[46px]" variant={"filled"}>
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
