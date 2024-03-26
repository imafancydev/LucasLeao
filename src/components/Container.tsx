import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { fetchGitHubData } from "@/utils/fetchGitHubData";

type ContainerProps = {
  children: React.ReactNode;
};

const getGitHubInfoData = async () => {
  return fetchGitHubData();
};

const Container = async ({ children }: ContainerProps) => {
  const myPersonalGitHubData = await getGitHubInfoData();
  return (
    <main className="container mt-12 px-5 md:px-20 lg:px-56 xl:px-80 flex flex-col gap-3">
      <Header gitHubData={myPersonalGitHubData} />
      {children}
      <Footer />
    </main>
  );
};

export default Container;
