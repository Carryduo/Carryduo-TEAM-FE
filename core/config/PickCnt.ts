import { atom } from "recoil";

export const PickCnt = atom<number>({
  key: "num",
  default: 0,
});
