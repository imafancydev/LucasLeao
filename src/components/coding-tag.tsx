import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CodeTagProps extends ComponentProps<"code"> {}

export const CodingTag = (props: CodeTagProps) => {
  return (
    <code
      {...props}
      className={twMerge("inline-block px-1 leading-relaxed", props.className)}
    />
  );
};
