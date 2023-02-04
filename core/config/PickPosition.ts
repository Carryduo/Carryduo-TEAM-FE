import { atom } from "recoil";

export const PickPosition = atom<string>({
  key: "position",
  default: "",
});
