import { atom } from "recoil";
import { Champions } from "../api/champions/types";

export const PickChampArray = atom<Champions[]>({
  key: "PickChampArray",
  default: [],
});
