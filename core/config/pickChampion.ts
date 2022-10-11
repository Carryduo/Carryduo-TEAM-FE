import { atom } from "recoil";
import { v1 } from "uuid";
import { Champions } from "../api/champions/types";

export interface ChampionProps {
  id: number;
  name: string;
}

export const PickChampion = atom<Champions>({
  key: `pickChampion/${v1()}`,
  default: {
    id: 0,
    champNameKo: "",
    champNameEn: "",
    champImg: "",
  },
});
