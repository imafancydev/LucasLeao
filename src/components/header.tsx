import { TMyPersonalGitHubData } from "@/types/GitHubData";

import { ModeToggle } from "./mode-toggle";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import TypedName from "./typed-name";
import Link from "next/link";

interface IGitHubInfoProps {
  gitHubData: TMyPersonalGitHubData;
}

const Header = ({ gitHubData }: IGitHubInfoProps) => {
  return (
    <header className="flex flex-col items-center justify-between sm:flex-row">
      <div className="my-5 flex items-center gap-4">
        <Link href={gitHubData.html_url} target="_blank">
          <Avatar>
            <AvatarImage src={gitHubData.avatar_url} alt={gitHubData.name} />
            <AvatarFallback />
          </Avatar>
        </Link>
      </div>

      <div className="mt-1 flex flex-row items-center text-lg">
        <span>Hi, I m</span>
        <div className="ml-2 inline-block text-nowrap px-2">
          <TypedName
            className="lucasleao text-lg font-bold"
            name="Lucas Leão"
          />
        </div>
      </div>

      <nav>
        <ul className="flex flex-row items-center gap-4 sm:text-base">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href="/books">Livros</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projetos</Link>
          </li>
          <li>
            <Link href={"/"}>Posts</Link>
          </li>
          <li>
            <ModeToggle></ModeToggle>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
