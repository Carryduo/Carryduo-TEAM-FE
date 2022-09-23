export const useTier = (tier: number) => {
  if(tier === 0) return "NoRank"
  if(tier === 1) return "Bronze"
  if(tier === 2) return "Silver"
  if(tier === 3) return "Gold"
  if(tier === 4) return "Platinum"
  if(tier === 5) return "Diamond"
  if(tier === 6) return "Master"
  if(tier === 7) return "Challenger"
}