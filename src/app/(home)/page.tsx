import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <MainSection className="text-lg">
      <div className="italic flex flex-col items-center sm:flex-row font-bold">
        <code
          className="ml-1 px-1"
          data-cursor="block"
          inline-block
          leading-none
          data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.7s;border-radius: 6px"
        >
          &#60;coding&nbsp;/&#62;
        </code>
        <p>for fun in free hours</p>
      </div>
    </MainSection>
  );
}
