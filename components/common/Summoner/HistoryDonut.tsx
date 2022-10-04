import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Summoner } from "../../../core/api/summoner/types";

interface Props {
  Summoner: Summoner;
}

ChartJS.register(ArcElement);

const HistoryDonut = ({ Summoner }: Props) => {
  const winRateData = (win: number, lose: number) => {
    const data = {
      labels: ["승리", "패배"],
      datasets: [
        {
          data: [win, lose],
          backgroundColor: ["#5383E8", "#E84057"],
          radius: 64,
          borderWidth: 0,
        },
      ],
    };
    return data;
  };
  return (
    <div className="flex flex-col items-center">
      <span className="text-gray-400">
        {`${Summoner.history.total}전 ${Summoner.history.win}승 ${Summoner.history.lose}패`}
      </span>
      <div>
        <div className=" flex h-48 w-48 items-center justify-center">
          <Doughnut
            data={winRateData(Summoner.history.win, Summoner.history.lose)}
            className="h-48 w-48"
            options={{ cutout: 70 }}
          ></Doughnut>
          <span className="absolute z-[1000]">{`${Summoner.history.winRate}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryDonut;
