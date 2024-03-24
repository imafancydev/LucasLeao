"use client";

import React from "react";
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import type { IpadCursorConfig } from "ipad-cursor";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
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
    <main className="container mt-12 px-5 md:px-20 lg:px-56 xl:px-80 flex flex-col gap-3">
      <IPadCursorProvider config={config}>{children}</IPadCursorProvider>
    </main>
  );
};

export default Container;
