import { Button } from "@/components/Button/Button";
import { Icons } from "@/components/Icons/Icons";
import { FC } from "react";

const stats = [
  {
    id: 1,
    numbers: "320+",
    title: "Happy customers",
  },
  {
    id: 2,
    numbers: "100K+",
    title: "Instagram followers",
  },
  {
    id: 3,
    numbers: "1.5M",
    title: "Behance views",
  },
];
//   return (
//     <div className="p-4 pt-[30px]">
//       <div className="flex h-[550px]">
//         <div className="flex flex-col gap-6 flex-1 p-2 pt-[18px]">
//           <h1 className="text-5xl leading-[1.2em] whitespace-pre-wrap">
//             Make your Website Standout Using Futuristic  Templates
//           </h1>
//           <p
//             className="text-lg opacity-60"
//             style={{ fontFamily: "Nunito Sans", lineHeight: "1.4em" }}
//           >
//             Step into a world of cutting edge design and limitless
//             possibilities. Elevate your experience with our futuristic
//             templates, crafting a tomorrow that starts now.
//           </p>
//           <div className="flex gap-[2px] pt-[2px]">
//             <Button className="w-[200px] !h-[48px]" variant={'default'}>
//               Buy now
//             </Button>
//             <Button variant={"secondary"} className="pl-[32px] gap-1">
//               <div className="w-[24px] h-[27px]">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 256 256"
//                   focusable="false"
//                   color="rgba(255, 255, 255, 0.85)"
//                   className="w-[24px] h-[24px]"
//                 >
//                   <g
//                     color="rgba(255, 255, 255, 0.85)"
//                     fontWeight="regular"
//                     className="select-none size-full inline-block fill-[#ffffffd9] text-[#ffffffd9] "
//                   >
//                     <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm36.44-94.66-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17Z"></path>
//                   </g>
//                 </svg>
//               </div>
//               <h5 style={{ fontFamily: "Nunito Sans" }}>Explore more</h5>
//             </Button>
//           </div>
//           <div className="flex gap-5 items-center text-center h-[74px]">
//             {stats.map((each: any) => (
//               <div key={each.id}>
//                 <p className="text-2xl pt-sans leading-[1.2em]">
//                   {each.numbers}
//                 </p>
//                 <p className="capitalize text-sm opacity-60 nunito-sans font-normal leading-[2em]">
//                   {each.title}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="size-full flex-1 h-[450px] overflow-hidden w-full">
//           <video
//             className="size-full object-cover"
//             src="https://framerusercontent.com/assets/InV1Z72FFcxtqts0HNLqdGAZg.mp4"
//             loop
//             playsInline
//             muted
//             autoPlay
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export const Header: FC = () => (
  <div
    className="flex items-start justify-start flex-nowrap gap-0 h-[594px] overflow-hidden p-4 pt-8 relative"
    style={{ aspectRatio: " 1.8181818181818181 / 1" }}
  >
    <div className="flex flex-col gap-6 flex-1 pt-4 p-2">
      <div className="">
        <h1 className="heading whitespace-pre-wrap">
          Make your Website Standout Using Futuristic  Templates
        </h1>
      </div>
      <div>
        <div>
          <p className="sub-heading">
            Step into a world of cutting edge design and limitless
            possibilities. Elevate your experience with our futuristic
            templates, crafting a tomorrow that starts now.
          </p>
        </div>
      </div>
      <div className="flex gap-[10px] overflow-hidden relative w-full justify-center  pt-[2px]">
        <div className="w-[200px]">
          <Button className="w-full !h-[48px]" variant={"default"}>
            Buy now
          </Button>
        </div>

        <div className="flex-1">
          <Button
            prefixIcon={
              <div className="h-[27px] w-[24px]">
                <Icons.ExploreIcon />
              </div>
            }
            className="w-full nunito-sans !leading-[1.4em] !opacity-85 !h-[48px] !font-bold"
            variant={"secondary"}
          >
            Explore More
          </Button>
        </div>
      </div>
      <div className="h-[77px] flex-none flex items-center justify-start gap-5 overflow-hidden flex-nowrap pt-[4px]">
        {[
          stats.map((each) => (
            <div className="size-auto" key={each.id}>
              <div className="flex flex-col items-center justify-center gap-0 p-0 relative">
                <div>
                  <h4 className="whitespace-pre-wrap capitalize pt-sans text-2xl leading-[1.2em] text-center">
                    {each.numbers}
                  </h4>
                </div>
                <div>
                  <p className="whitespace-pre-wrap font-light capitalize nunito-sans text-sm leading-[2em] opacity-90">
                    {each.title}
                  </p>
                </div>
              </div>
            </div>
          )),
        ]}
      </div>
    </div>
    <div className="size-full flex-1 h-[450px] overflow-hidden w-full">
      <video
        className="size-full object-cover"
        src="https://framerusercontent.com/assets/InV1Z72FFcxtqts0HNLqdGAZg.mp4"
        loop
        playsInline
        muted
        autoPlay
      />
    </div>
  </div>
);
