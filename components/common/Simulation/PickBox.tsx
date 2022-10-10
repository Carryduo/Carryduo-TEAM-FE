import { useRecoilValue } from "recoil";
import { PickChampion } from "../../../core/config/pickChampion";
import { PickCnt } from "../../../core/config/PickCnt";
import { Box, CircularProgress } from "@mui/material";
import { Champions } from "../../../core/api/champions/types";

interface Props {
  pick: Champions[];
  cnt: number;
  PickNum: number;
}

const PickBox = ({ pick, PickNum, cnt }: Props) => {
  const { champNameEn } = useRecoilValue(PickChampion);
  const PickCount = useRecoilValue(PickCnt);
  return (
    <div className="h-[232px] w-32 items-center justify-center rounded-md ">
      {pick[PickNum]?.champNameEn === undefined ? (
        <>
          {cnt !== PickNum ? (
            <img alt="" src={`/cross.png`} width={128} height={232} />
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
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champNameEn}_0.jpg`}
              width={128}
              height={232}
            />
          )}
        </>
      ) : (
        <img
          alt=""
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${pick[PickNum]?.champNameEn}_0.jpg`}
          width={128}
          height={232}
        />
      )}
    </div>
  );
};

export default PickBox;
