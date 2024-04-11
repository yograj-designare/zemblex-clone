"use client";

import { FC } from "react";
import { Icons } from "../Icons/Icons";
import Link from "next/link";

export const SocialLinks: FC = () => (
  <div className="py-2 px-4">
    <div className="border rounded-[10px] py-2">
      <div className="flex items-center justify-center gap-[6px] h-[34px]">
        <Link target="_blank" href="https://www.instagram.com" passHref>
          <Icons.Instagram
            size={16}
            className="w-[36px] opacity-50 hover:opacity-100 cursor-pointer"
          />
        </Link>
        <Link target="_blank" href="https://www.twitter.com" passHref>
          <Icons.Twitter
            size={16}
            className="w-[36px] opacity-50 hover:opacity-100 cursor-pointer"
          />
        </Link>
        <Link target="_blank" href="https://www.tiktok.com" passHref>
          <Icons.Instagram
            size={16}
            className="w-[36px] opacity-50 hover:opacity-100 cursor-pointer"
          />
        </Link>
        <Link target="_blank" href="https://www.behance.com" passHref>
          <Icons.Instagram
            size={16}
            className="w-[36px] opacity-50 hover:opacity-100 cursor-pointer"
          />
        </Link>
        <Link target="_blank" href="https://www.dribble.com" passHref>
          <Icons.Dribbble
            size={16}
            className="w-[36px] opacity-50 hover:opacity-100 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  </div>
);
