const AVERAGE_KPR = 0.679;
const AVERAGE_SPR = 0.317;
const AVERAGE_RMK = 1.277;

export const calcHLTV = ({
  kills, rounds, deaths, triple, quadro, penta,
}: { [key: string]: number }) => {
  const killRating = kills / rounds / AVERAGE_KPR;
  const survivalRating = (rounds - deaths) / rounds / AVERAGE_SPR;
  const rounds1k = kills - (triple * 3) - (quadro * 4) - (penta * 5);
  const roundsWithMultipleKillsRating = (1.5 * rounds1k + 9 * triple + 16 * quadro + 25 * penta) / rounds / AVERAGE_RMK;

  return ((killRating + 0.7 * survivalRating + roundsWithMultipleKillsRating) / 2.7).toFixed(2);
};
