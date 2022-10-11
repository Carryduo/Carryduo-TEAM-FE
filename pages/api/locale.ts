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
      const Data = data.map((val: Champions) => {
        return val.champNameEn;
      });
      res.status(200).json(Data);
    } else {
      const Data = data.map((val: Champions) => {
        return val.champNameKo;
      });
      res.status(200).json(Data);
    }
  } catch (error) {
    res.status(500).json({ error: "failed" });
  }
}
