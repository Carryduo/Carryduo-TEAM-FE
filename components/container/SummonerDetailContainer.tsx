import { instance } from "../../core/api/axios";
import { Summoner } from "../../core/api/summoner/types";
import { useSweet } from "../../util/hooks/useSweet";
import Grid from "../common/Grid";
import SummonerData from "../layouts/Summoner/SummonerData";
import SummonerHistory from "../layouts/Summoner/SummonerHistory";
import SummonerMostChamps from "../layouts/Summoner/SummonerMostChamps.";

interface Props {
  summonerName: string;
  Summoner: Summoner;
}

const SummonerDetailContainer = ({ Summoner, summonerName }: Props) => {
  const RefreshData = () => {
    useSweet(1000, "success", "전적 갱신");
    instance.get(`/summoner/refresh/${String(summonerName)}`);
  };
  return (
    <div className="h-full w-full space-y-4">
      <Grid width="w-[900px]" height="h-1/2">
        <div className="mt-1 w-full text-end">
          <span
            className="cursor-pointer rounded-md bg-slate-500 px-2 py-1 text-center hover:bg-slate-700 "
            onClick={RefreshData}
          >
            전적 갱신
          </span>
        </div>
        <div className="-mt-4 flex h-full w-full items-center justify-around">
          <SummonerData Summoner={Summoner} summonerName={summonerName} />
          <SummonerMostChamps Summoner={Summoner} />
        </div>
      </Grid>
      <Grid width="w-[900px]" height="h-1/2">
        <SummonerHistory Summoner={Summoner} />
      </Grid>
    </div>
  );
};

export default SummonerDetailContainer;
