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
            <img
              alt=""
              src="../../../public/cross.png"
              width={128}
              height={232}
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
            <img
              alt=""
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`}
              width={128}
              height={232}
            />
          )}
        </>
      ) : (
        <img
          alt=""
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${pick[PickNum]?.name}_0.jpg`}
          width={128}
          height={232}
        />
      )}
    </div>
  );
};

export default PickBox;
