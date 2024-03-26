type LinkProps = {
  children: React.ReactNode;
  olink?: string;
};

const Links = ({ children, olink }: LinkProps) => {
  return (
    <a
      href={olink}
      className="border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
      target="_blank"
      data-cursor="block"
      data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 1s;border-radius: 6px"
    >
      <span className="p-1">{children}</span>
    </a>
  );
};

export default Links;
