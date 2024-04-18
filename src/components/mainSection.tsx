"use client";

import { twMerge } from "tailwind-merge";

interface MainSectionProps {
  className: string;
  children: React.ReactNode;
}

const MainSection = ({ className, children }: MainSectionProps) => {
  return <main className={twMerge("my-8", className)}>{children}</main>;
};

export default MainSection;
