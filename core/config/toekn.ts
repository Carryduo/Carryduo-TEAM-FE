import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface ProfileProps {
  bio: string;
  enableChat: boolean;
  nickname: string;
  preferPosition: string[];
  profileImg: string;
  tier: string;
  userId: string;
}

export const getMyProfile = atom<ProfileProps>({
  key: "token",
  default: {
    bio: "",
    enableChat: true,
    nickname: "",
    preferPosition: [],
    profileImg: "",
    tier: "",
    userId: "",
  },
  effects_UNSTABLE: [persistAtom],
});
