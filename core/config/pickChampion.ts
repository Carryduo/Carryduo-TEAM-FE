import { atom } from "recoil";
import { v1 } from "uuid";

export interface ChampionProps {
  id: number;
  name: string;
}

export const PickChampion = atom<ChampionProps>({
  key: `pickChampion/${v1()}`,
  default: {
    id: 0,
    name: "",
  },
});
