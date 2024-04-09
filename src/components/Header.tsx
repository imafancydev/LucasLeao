"use client";
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";

import { TMyPersonalGitHubData } from "@/types/GitHubData";

import { ModeToggle } from "./mode-toggle";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import TypedName from "./typed-name";
import Link from "next/link";

import type { IpadCursorConfig } from "ipad-cursor";
interface IGitHubInfoProps {
  gitHubData: TMyPersonalGitHubData;
}

const Header = ({ gitHubData }: IGitHubInfoProps) => {
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
      <header className="flex flex-col items-center justify-between sm:flex-row">
        <div className="my-5 flex items-center gap-4">
          <Link href={gitHubData.html_url} target="_blank">
            <Avatar
              data-cursor="block"
              data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 1.4s;border-radius: 50%"
            >
              <AvatarImage src={gitHubData.avatar_url} alt={gitHubData.name} />
              <AvatarFallback />
            </Avatar>
          </Link>
        </div>

        <div className="mt-1 flex flex-row items-center text-lg">
          <span data-curso="text">Hi, I&lsquom</span>
          <div
            data-cursor="block"
            data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.7s;border-radius: 6px"
            className="ml-2 inline-block text-nowrap px-2"
          >
            <TypedName
              className="lucasleao text-lg font-bold"
              name="Lucas Leão"
            />
          </div>
        </div>

        <nav>
          <ul className="flex flex-row items-center gap-4 sm:text-base">
            <li
              data-cursor="block"
              data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.5s;border-radius: 6px"
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              data-cursor="block"
              data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.5s;border-radius: 6px"
            >
              <Link href="/books">Livros</Link>
            </li>
            <li
              data-cursor="block"
              data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.5s;border-radius: 6px"
            >
              <Link href={"/projects"}>Projetos</Link>
            </li>
            <li
              data-cursor="block"
              data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.5s;border-radius: 6px"
            >
              <Link href={"/"}>Posts</Link>
            </li>
            <li
              data-cursor="block"
              data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.5s;border-radius: 6px"
            >
              <ModeToggle></ModeToggle>
            </li>
          </ul>
        </nav>
      </header>
    </IPadCursorProvider>
  );
};

export default Header;
