// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AppResponse } from "@/models/api/AppResponse";
import { GetDailyWordsResponse } from "@/models/api/GetDailyWordsResponse";
import type { NextApiRequest, NextApiResponse } from "next";
import { Constants as K } from "@/constants/Constants";

const CLIENT_URL = K.url.clientApi;
const SERVER_URL = K.url.serverApi;

export function getDailyWords(): Promise<AppResponse<GetDailyWordsResponse>> {
  return fetch(CLIENT_URL, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.error(error);
      return { error };
    });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetDailyWordsResponse>
) {
  const path = "/api/dailyWords.json";

  const response = await fetch(path, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
  .then((res) => {
    return res.json();
  })
  .catch((error) => {
    console.error(error);
    return { error };
  });

  const data: GetDailyWordsResponse = await response.json();

  return res.status(200).json(data);
}
