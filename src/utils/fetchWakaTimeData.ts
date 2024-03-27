import { TWakaTimeData } from "@/types/WakaTimeData";
import { env } from "process";
export const fetchWakaTimeData = async (): Promise<TWakaTimeData> => {
  // Encoding the API key in base64
  const base64EncodedKey = Buffer.from(env.WAKATIME_API_SECRET_KEY).toString(
    "base64",
  );

  try {
    const response = await fetch(
      "https://wakatime.com/api/v1/users/current/all_time_since_today",
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${base64EncodedKey}`,
        },
        next: {
          revalidate: 151200,
        },
      },
    );

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
