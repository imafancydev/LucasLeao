import Links from "@/components/Links";
import MainSection from "@/components/MainSection";
import { fetchWakaTimeData } from "@/utils/fetchWakaTimeData";
import Link from "next/link";
import { BiLogoGithub, BiLogoDiscord } from "react-icons/bi";

const getWakaTimeInfoData = async () => {
  return fetchWakaTimeData();
};

const Home = async () => {
  const userWakaTimeData = await getWakaTimeInfoData();
  return (
    <MainSection className="text-2xl">
      <div className="flex flex-col items-center justify-center font-bold italic sm:flex-row">
        <code
          className="ml-1 inline-block px-1 leading-relaxed"
          data-cursor="block"
          data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.7s;border-radius: 6px"
        >
          &#60;coding&nbsp;/&#62;
        </code>
        <p>for fun in free hours</p>
      </div>
      <div className="flex flex-col items-center justify-center font-bold italic sm:flex-row">
        <span data-cursor="text" className="mr-1">
          {userWakaTimeData.data.text} of
        </span>
        <code
          className="coding ml-1 leading-relaxed"
          data-cursor="block"
          data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.7s;border-radius: 6px"
        >
          &#60;coding&nbsp;/&#62;
        </code>
      </div>
      <div className="flex flex-col items-center justify-center font-bold italic sm:flex-row">
        <span data-cursor>front-end</span>
        <h3
          className="ml-1 px-1 leading-none"
          data-cursor="block"
          data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.7s;border-radius: 6px"
        >
          &#60;developer&nbsp;/&#62;
        </h3>
      </div>
      <div className="my-4 flex flex-col text-lg font-semibold italic sm:flex-row">
        <p>
          <Links olink="https://www.typescriptlang.org/">TypeScript</Links>,
          <Links olink="https://go.dev/">Go</Links> e
          <Links olink="https://nextjs.org/">Next.js</Links> sinta-se à vontade
          para me convidar para um projeto no qual elas são utilizadas. Será um
          prazer cooperar.
        </p>
      </div>
      <div className="my-4 flex flex-col text-lg font-semibold italic sm:flex-row">
        <p>
          Fique à vontade para entrar em contato comigo. Vamos fazer um projeto
          juntos, explorando novas tecnologias e ideias inovadoras. Estou sempre
          aberto a novas sugestões e ideias!
        </p>
      </div>

      <div className="my-2 flex flex-row gap-3 text-xs font-bold italic md:flex-row">
        <div data-cursor="block">
          <Link
            href="https://github.com/imafancydev"
            className="flex items-center gap-1 border-b px-[5px] py-[2px] text-gray-500 transition-all duration-500 hover:border-gray-500"
            target="_blank"
          >
            <BiLogoGithub size="20" />
            <span className="ml-1">github</span>
          </Link>
        </div>

        <div data-cursor="block">
          <p className="flex items-center gap-1 border-b px-[5px] py-[2px] text-gray-500 transition-all duration-500 hover:border-gray-500">
            <BiLogoDiscord size="20" />
            <span className="ml-1">lucasleao0000</span>
          </p>
        </div>
      </div>
    </MainSection>
  );
};

export default Home;
