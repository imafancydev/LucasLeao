import Container from "@/components/Container";
import Header from "@/components/Header";
import { fetchGitHubData } from "@/utils/fetchGitHubData";
import MainSection from "./_components/MainSection";

const getGitHubInfoData = async () => {
  return fetchGitHubData();
};

export default async function Home() {
  const myPersonalGitHubData = await getGitHubInfoData();

  return (
    <Container>
      <Header gitHubData={myPersonalGitHubData} />
      <MainSection />
    </Container>
  );
}
