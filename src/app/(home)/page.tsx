import MainSection from "@/components/MainSection";
import { fetchWakaTimeData } from "@/utils/fetchWakaTimeData";

const getWakaTimeInfoData = async () => {
  return fetchWakaTimeData();
};

const Home = async () => {
  const userWakaTimeData = await getWakaTimeInfoData();
  return (
    <MainSection className="text-lg">
      <div className="flex flex-col items-center font-bold italic sm:flex-row">
        <code
          className="ml-1 inline-block px-1 leading-none"
          data-cursor="block"
          data-cursor-style="--cursor-radius: 50%;--cursor-scale: 1.1;--cursor-blur-duration: 0.7s;border-radius: 6px"
        >
          &#60;coding&nbsp;/&#62;
        </code>
        <p>for fun in free hours {userWakaTimeData.data.text} </p>
      </div>
    </MainSection>
  );
};

export default Home;
