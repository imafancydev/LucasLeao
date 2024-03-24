import Container from "@/components/Container";
import Header from "@/components/Header";
import { fetchGitHubData } from "@/utils/fetchGitHubData";

const getGitHubInfoData = async () => {
  return fetchGitHubData();
};

export default async function Home() {
  const myPersonalGitHubData = await getGitHubInfoData();
  return (
    <Container>
      <Header gitHubData={myPersonalGitHubData}></Header>
      <main className="my-8">
        <h1>
          hi, i'm <span>Lucas Leão</span>
        </h1>
      </main>
    </Container>
  );
}
