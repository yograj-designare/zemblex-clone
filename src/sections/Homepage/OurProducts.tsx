import { Button } from "@/components/Button/Button";
import { ProductCard } from "@/components/Cards/ProductCard";
import { FC } from "react";

export const OurProducts: FC = () => (
  <div className="px-4">
    <div className="p-2 flex items-cente flex-col gap-2 relative w-full flex-nowrap">
      <div className="flex-none">
        <h2 className="text-[32px] leading-[1.2em]">Shop Our Products</h2>
      </div>
      <div className="flex items-start gap-4 flex-col px-2 pt-4 pb-8 overflow-hidden flex-nowrap">
        <div className="flex flex-row gap-6 items-start flex-none flex-nowrap w-full relative p-0">
          <ProductCard />
          <ProductCard />
        </div>
        <div className="py-4 w-full">
            <Button className="w-full" variant={'default'}>
                Visit the shop
            </Button>
        </div>
      </div>
    </div>
  </div>
);
