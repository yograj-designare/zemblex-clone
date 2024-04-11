import { Button } from "@/components/Button/Button";
import { BlogCard } from "@/components/Cards/BlogCard";
import { FC } from "react";

export const LatestBlogs: FC = () => (
  <div className="px-4">
    <div className="p-2">
      <div className="flex flex-col items-start w-full relative flex-nowrap gap-4 overflow-hidden pt-[4px]">
        <div>
          <h2 className="capitalize text-[32px] leading-[1.2em]">
            Explore our latest blog posts
          </h2>
        </div>
        <div className="flex flex-col gap-4 pb-4 w-full flex-nowrap">
         <BlogCard />
         <BlogCard />
        </div>
        <div className="w-full py-4">
          <Button className="w-full" variant={'default'}>visit the blog</Button>
        </div>
      </div>
    </div>
  </div>
);
