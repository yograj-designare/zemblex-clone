import { FC } from "react";

export const ProductCard:FC = () =>(
    <div className="flex items-center justify-center flex-wrap flex-1 gap-10 h-auto relative p-0">
    <div className="flex-none w-full h-auto relative">
      <div className="border-1 !border-[#ffffff0d] bg-black border-solid rounded-[25px] flex items-center flex-col overflow-hidden relative h-[400px] gap-0 flex-nowrap">
        <div className="flex flex-col flex-none flex-nowrap gap-0 h-[280px] py-[10px] relative w-full">
          <div className="absolute inset-0">
            <img
              src="https://framerusercontent.com/images/KI3tsmpdXQ80VFLL1Lfqblo6ndk.jpg"
              alt="product_image"
              className="block size-full object-cover object-center"
            />
          </div>
          <div className="px-5 overflow-visible h-auto flex flex-none items-center justify-between w-full z-10">
            <div className="flex-1 flex gap-[10px] h-[30px] flex-wrap items-center justify-start">
              <div className="border border-[#fffafa80] rounded-[20px] py-1 px-[6px]">
                <div>
                  <p className="text-[10px] text-[#ffffff80] inter leading-[1.2em]">
                    New
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-0 flex flex-col items-start gap-2 h-[120px] bg-[#ffffff08] w-full relative pt-4 pl-5">
          <div>
            <div className="w-auto whitespace-pre">
              <h6 className="inter leading-[1.2em] text-xs text-[#ffffffbf]">
                TEMLATES
              </h6>
            </div>
          </div>
          <div className="flex gap-[2px] p-0  justify-center flex-col">
            <div className="">
              <h6 className="nunito-sans leading-[1.2em]">
                Matte black
              </h6>
            </div>
    
            <div>
              <h6 className="nunito-sans text-sm text-[#ffffff80] leading-[1.2em]">
                Matte black Wallpapers
              </h6>
            </div>
          </div>
          <div className="flex items-center flex-none gap-[2px] w-[280px] relative flex-nowrap overflow-visible">
            <div>
              <p className="nunito-sans leading-[1.2em]">$</p>
            </div>
            <div>
              <p className="nunito-sans leading-[1.2em]">179.00</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
)