import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

/* 전체 차트 그래프 정보 저장 */
export const getShadowColor = atom<number>({
  key: "shadowColor",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});
