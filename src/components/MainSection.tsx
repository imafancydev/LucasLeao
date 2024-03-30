"use client";

import { twMerge } from "tailwind-merge";
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import type { IpadCursorConfig } from "ipad-cursor";

interface MainSectionProps {
  className: string;
  children: React.ReactNode;
}

const MainSection = ({ className, children }: MainSectionProps) => {
  const config: IpadCursorConfig = {
    normalStyle: {
      backdropBlur: "20px",
    },
    blockStyle: {
      backdropBlur: "0px",
      durationBackdropFilter: "0.5s",
    },
    enableAutoTextCursor: true,
  };

  useIPadCursor();
  return (
    <IPadCursorProvider config={config}>
      <main className={twMerge("my-8", className)}>{children}</main>
    </IPadCursorProvider>
  );
};

export default MainSection;
