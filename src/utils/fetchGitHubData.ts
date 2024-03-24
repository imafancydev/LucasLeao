import { TGitHubData } from "@/types/GitHubData";

export const fetchGitHubData = async (): Promise<TGitHubData> => {
  try {
    const res = await fetch(`https://api.github.com/users/imafancydev`, {
      method: "GET",
      next: {
        revalidate: 60 * 60 * 24,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
