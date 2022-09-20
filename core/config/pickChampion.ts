import { atom } from "recoil";

interface ChampionProps {
  id: number;
  name: string;
}

export const PickChampion = atom<ChampionProps>({
  key: "pickChampion",
  default: {
    id: 0,
    name: "",
  },
});
