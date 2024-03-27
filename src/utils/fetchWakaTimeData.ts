import { TWakaTimeData } from "@/types/WakaTimeData";

export const fetchWakaTimeData = async (): Promise<TWakaTimeData> => {
  const API_KEY = "waka_bc5b8d3c-466c-46ac-b6ec-18cec61c1709";

  // Encoding the API key in base64
  const base64EncodedKey = Buffer.from(API_KEY).toString("base64");

  try {
    const response = await fetch(
      "https://wakatime.com/api/v1/users/current/all_time_since_today",
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${base64EncodedKey}`,
        },
      },
    );

    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
