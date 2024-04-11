import { TestimonialGrid } from "@/components/Cards/TestimonialGrid";
import { FC } from "react";

export const Testimonials: FC = () => (
  <div className="px-4">
    <div className="flex flex-col gap-2">
      <div>
        <p className="text-[32px] leading-[1.2em]">Testomonials</p>
      </div>
      <TestimonialGrid />
      <TestimonialGrid />
    </div>
  </div>
);
