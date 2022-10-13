import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const getLocale = atom({
  key: "locale",
  default: "ko",
  effects_UNSTABLE: [persistAtom],
});
