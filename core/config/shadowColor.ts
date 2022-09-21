import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { v1 } from "uuid";

const { persistAtom } = recoilPersist();

export const getShadowColor = atom<number>({
  key: `shadowColor/${v1()}`,
  default: 1,
  effects_UNSTABLE: [persistAtom],
});
