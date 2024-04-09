import React from "react";

import { fetchGitHubData } from "@/utils/fetchGitHubData";

import Footer from "./footer";
import Header from "./header";

type ContainerProps = {
  children: React.ReactNode;
};

const getGitHubInfoData = async () => {
  return fetchGitHubData();
};

const Container = async ({ children }: ContainerProps) => {
  const myPersonalGitHubData = await getGitHubInfoData();
  return (
    <main className="container mt-12 flex flex-col gap-3 px-5 md:px-20 lg:px-56 xl:px-80">
      <Header gitHubData={myPersonalGitHubData} />
      {children}
      <Footer />
    </main>
  );
};

export default Container;
