import { atom } from "recoil";

export const PickChampion = atom<string>({
  key: "pickChampion",
  default: "",
});
