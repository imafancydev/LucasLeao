import TypedName from "./Typed-name";

const MainSection = () => {
  return (
    <main className="my-8">
      <div>
        <span data-curso="text">Hi, I'm</span>
        <div data-cursor="block" className="ml-2 px-2 text-nowrap inline-block">
          <TypedName />
        </div>
      </div>
    </main>
  );
};

export default MainSection;
