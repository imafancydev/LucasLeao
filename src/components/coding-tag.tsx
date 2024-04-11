import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CodeTagProps extends ComponentProps<"code"> {}

export const CodingTag = (props: CodeTagProps) => {
  return (
    <code
      {...props}
      className={twMerge("inline-block px-1 leading-relaxed", props.className)}
      data-cursor="block"
      data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.7s;border-radius: 6px"
    />
  );
};
