import Image from "next/image";
import { useRecoilValue } from "recoil";
import { ChampionProps, PickChampion } from "../../../core/config/pickChampion";
import { PickCnt } from "../../../core/config/PickCnt";
import Cross from "../../../public/cross.png";
import { Box, CircularProgress } from "@mui/material";

interface Props {
  pick: ChampionProps[];
  cnt: number;
  PickNum: number;
}

const PickBox = ({ pick, PickNum, cnt }: Props) => {
  const { name } = useRecoilValue(PickChampion);
  const PickCount = useRecoilValue(PickCnt);
  return (
    <div className="h-[232px] w-32 items-center justify-center rounded-md ">
      {pick[PickNum]?.name === undefined ? (
        <>
          {cnt !== PickNum ? (
            <Image
              alt=""
              src={Cross}
              width={128}
              height={232}
              layout="fixed"
              loading="eager"
            />
          ) : PickCount === 0 ? (
            <Box
              sx={{
                display: "flex",
                width: "128px",
                height: "232px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Image
              alt=""
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`}
              width={128}
              height={232}
              layout="fixed"
              priority
        
            />
          )}
        </>
      ) : (
        <Image
          alt=""
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${pick[PickNum]?.name}_0.jpg`}
          width={128}
          height={232}
          layout="fixed"
          priority
       
        />
      )}
    </div>
  );
};

export default PickBox;
