import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface ProfileProps {
  id: string;
  nickName: string;
  image: string;
  mostPick: string[];
}

export const MyProfile = atom<ProfileProps>({
  key: "myProfile",
  default: {
    id: "abcdefg",
    nickName: "우당탕탕 우영우",
    image: "https://avatars.githubusercontent.com/u/79081800?v=4",
    mostPick: [
      "https://opgg-static.akamaized.net/images/lol/champion/Lulu.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1661751970709",
      "https://opgg-static.akamaized.net/images/lol/champion/Nautilus.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1661751970709",
      "https://opgg-static.akamaized.net/images/lol/champion/Morgana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_92&v=1661751970709",
    ],
  },
  effects_UNSTABLE: [persistAtom],
});
