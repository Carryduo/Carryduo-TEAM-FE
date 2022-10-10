import { atom } from "recoil";

export const ChampionSearch = atom<string>({
  key: "SearchValue",
  default: "",
});
