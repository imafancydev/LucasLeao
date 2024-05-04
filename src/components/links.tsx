type LinkProps = {
  children: React.ReactNode;
  olink?: string;
};

const Links = ({ children, olink }: LinkProps) => {
  return (
    <a
      href={olink}
      className="border-b text-gray-500 transition-all duration-500 hover:border-gray-500"
      target="_blank"
    >
      <span className="p-1">{children}</span>
    </a>
  );
};

export default Links;
