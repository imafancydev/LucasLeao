import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Header = () => {
  return (
    <header>
      <div>
        <Avatar>
          <AvatarImage />
          <AvatarFallback />
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
