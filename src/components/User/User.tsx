"use client";

import { FC } from "react";
import { Icons } from "../Icons/Icons";

export const User: FC = () => (
  <div className="border-t px-[20px] py-[10px]">
    <div className="flex items-center justify-start gap-[14px] h-[43px]">
      <div>
        <img
          src="https://framerusercontent.com/images/TCzd0ccYoWzp53eRFoPWeHXr8.jpg?scale-down-to=1024"
          alt="user_profile"
          className="size-10 rounded-[10px] object-cover"
        />
      </div>
      <div className="flex gap-[14px]">
        <div>
          <p style={{ fontFamily: "PT Sans" }}>Caleb Martinez</p>
          <p style={{ fontFamily: "PT Sans" }} className="text-sm opacity-50">
            Available
          </p>
        </div>
        <div className="">
          <Icons.Battery className="opacity-50" />
        </div>
      </div>
    </div>
  </div>
);
