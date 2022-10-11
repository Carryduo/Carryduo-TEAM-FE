import { NextApiRequest, NextApiResponse } from "next";
import { instance } from "../../core/api/axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query);
  try {
    const result = await instance.get("/champ");
    res.status(200).send(result.data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "failed" });
  }
}
