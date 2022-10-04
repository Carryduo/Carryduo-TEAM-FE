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
  return (
    <div className="h-full w-full space-y-4">
      <Grid width="w-[900px]" height="h-1/2">
        <div className="flex h-full w-full items-center justify-around">
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
