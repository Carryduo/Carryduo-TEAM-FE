import { Champions } from "../champions/types";

export interface SimulationResult {
  category: number;
  cham1Id: Champions;
  cham2Id: Champions;
  cham3Id: Champions;
  cham4Id: Champions;
  winrate: number;
}

export interface ISimulation {
  data: SimulationResult;
}
