import { FC } from "react";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialGrid:FC = () => (
    <div className="px-4">
    <div className="flex flex-col gap-4 overflow-hidden flex-nowrap items-start justify-start">
      <div className="h-[308px] w-[1000px] relative flex-none">
        <section
          className="size-full flex m-0 place-items-center overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0.4) 100%)",
          }}
        >
          <ul className="flex size-full place-items-center m-0 p-0 list-none gap-[24px] relative">
          <TestimonialCard />
          <TestimonialCard />
          </ul>
        </section>
      </div>
    </div>
  </div>
)