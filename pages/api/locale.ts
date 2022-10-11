import { NextApiRequest, NextApiResponse } from "next";
import { instance } from "../../core/api/axios";
import { Champions } from "../../core/api/champions/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query);
  try {
    const { data } = await instance.get("/champ");
    if (req.query.locale == "en") {
      data.filter((val: Champions) => (val.champ = val.champNameEn));
    } else {
      data.filter((val: Champions) => (val.champ = val.champNameKo));
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "failed" });
  }
}
