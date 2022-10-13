import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const getShadowColor = atom<number>({
  key: `shadowColor`,
  default: 1,
  effects_UNSTABLE: [persistAtom],
});
