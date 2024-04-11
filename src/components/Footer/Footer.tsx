import { FC } from "react";

export const Footer: FC = () => (
  <div className="pt-1">
    <footer className="h-[64px] w-full relative flex-none px-4">
      <div className="py-[5px] px-[10px] flex items-center justify-between flex-nowrap overflow-hidden size-full">
        <div className="flex-1">
          <div>
            <p className="opacity-50 nunito-sans text-lg leading-[1.4em]">
              Back To Top
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div>
            <p className="opacity-50 nunito-sans text-lg leading-[1.4em]">
              Copyright@Aszemble.com
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div>
            <p className="opacity-50 nunito-sans text-lg leading-[1.4em]">
              By nirodhanushka
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
