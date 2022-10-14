export const useResult = (winrate: number) => {
  if (winrate === 0) return "블루 팀 승리";
  if (winrate === 1) return "무승부";
  if (winrate === 2) return "레드 팀 승리";
};
