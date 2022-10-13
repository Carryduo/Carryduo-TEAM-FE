import { useRouter } from "next/router";
import { instance } from "../../core/api/axios";
import { Summoner } from "../../core/api/summoner/types";
import Grid from "../common/Grid";
import SummonerData from "../layouts/Summoner/SummonerData";
import SummonerHistory from "../layouts/Summoner/SummonerHistory";
import SummonerMostChamps from "../layouts/Summoner/SummonerMostChamps.";

interface Props {
  summonerName: string;
  Summoner: Summoner;
}

const SummonerDetailContainer = ({ Summoner, summonerName }: Props) => {
  const { reload } = useRouter();
  const RefreshData = () => {
    instance.get(`/summoner/refresh/${String(summonerName)}`);
    reload();
  };
  return (
    <div className="h-full w-full space-y-4">
      <Grid width="w-[900px]" height="h-1/2">
        <div className="w-full text-end mt-1">
          <span
            className="cursor-pointer rounded-md bg-slate-500 px-2 py-1 text-center hover:bg-slate-700 "
            onClick={RefreshData}
          >
            전적 갱신
          </span>
        </div>
        <div className="flex h-full w-full items-center justify-around -mt-4">
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
