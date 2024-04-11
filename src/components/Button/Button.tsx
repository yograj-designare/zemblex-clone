"use client";
import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, FC } from "react";
import { Icons } from "../Icons/Icons";

const ButtonVariants = cva(
  "capitalize p-[22px] flex items-center rounded-xl border-[#ffffff4d] font-bold text-lg",
  {
    variants: {
      variant: {
        default:
          "hover:bg-white hover:text-black border leading-[1.2em] justify-between",
        secondary: "border-none hover:opacity-100 gap-1 font-normal text-lg !p-[24px]",
        filled:
          "size-full outline-none border-none p-[15px] rounded-lg nunito-sans !justify-center leading-[1em] bg-[#ffffffe6] text-black shadow-none",
      },
      size: {
        default: "h-[50px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  isLoading?: boolean;
  prefixIcon?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  size,
  isLoading,
  prefixIcon,
  ...props
}) => {
  return (
    <button
      className={cn(ButtonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {/* Can be used if loading state needed */}
      {/* {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin " /> : null} */}
      {prefixIcon}
      {children}
      {variant === "default" && (
        <Icons.ArrowRight className="h-[20px] w-[14px]" />
      )}
    </button>
  );
};
