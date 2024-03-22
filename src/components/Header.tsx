import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between sm:flex-row">
      <div className="flex gap-2 items-center my-5">
        <Avatar>
          <AvatarImage />
          <AvatarFallback />
        </Avatar>
      </div>

      <nav>
        <ul className="flex flex-row items-center gap-4 text-sm sm:text-xs">
          <li data-cursor="block" data-cursor-style="border-radius: 6px">
            <Link href={"/"}>Home</Link>
          </li>
          <li data-cursor="block" data-cursor-style="border-radius: 6px">
            <Link href={"/"}>Livros</Link>
          </li>
          <li data-cursor="block" data-cursor-style="border-radius: 6px">
            <Link href={"/"}>Projetos</Link>
          </li>
          <li data-cursor="block" data-cursor-style="border-radius: 6px">
            <Link href={"/"}>Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
