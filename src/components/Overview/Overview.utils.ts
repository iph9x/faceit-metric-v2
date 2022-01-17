import { TMatchStats } from 'src/services';
import { calcHLTV } from 'src/utils/stats';

export type TStats = { [key: string]: number };

const roundToTwoDecimal = (num: number, count: number) => Math.trunc((num / count) * 100) / 100;

export const calcStat = (matches: TMatchStats[], count: number): TStats => {
  const stats: TStats = {
    mvp: 0,
    quad: 0,
    kills: 0,
    triple: 0,
    assists: 0,
    penta: 0,
    deaths: 0,
    kd: 0,
    hsPercent: 0,
    kr: 0,
    wins: 0,
    avgHLTV: 0,
    winRate: 0,
    avgKills: 0,
    avgDeaths: 0,
    avgAssists: 0,
    minElo: 0,
    maxElo: 0,
  };

  if (matches.length === 0) {
    return stats;
  }

  const eloList = matches.map((match) => Number(match.elo)).filter((elo) => !Number.isNaN(elo));

  matches.slice(0, count).forEach((match: TMatchStats) => {
    stats.mvp += Number(match.i9);
    stats.triple += Number(match.i14);
    stats.quad += Number(match.i15);
    stats.penta += Number(match.i16);
    stats.kills += Number(match.i6);
    stats.assists += Number(match.i7);
    stats.deaths += Number(match.i8);
    stats.wins += Number(match.i10);
    stats.hsPercent += Number(match.c4);
    stats.kd += Number(match.c2);
    stats.kr += Number(match.c3);
    stats.avgHLTV += Number(calcHLTV({
      kills: Number(match.i6),
      rounds: Number(match.i12),
      deaths: Number(match.i8),
      triple: Number(match.i14),
      quadro: Number(match.i15),
      penta: Number(match.i16),
    }));
  }, stats);

  return ({
    mvp: stats.mvp,
    triple: stats.triple,
    quad: stats.quad,
    penta: stats.penta,
    kills: stats.kills,
    assists: stats.assists,
    deaths: stats.deaths,
    winRate: Math.trunc((stats.wins / count) * 100),
    avgKills: Math.round(stats.kills / count),
    avgDeaths: Math.round(stats.deaths / count),
    avgAssists: Math.round(stats.assists / count),
    hsPercent: Math.round(stats.hsPercent / count),
    kd: roundToTwoDecimal(stats.kd, count),
    kr: roundToTwoDecimal(stats.kr, count),
    minElo: Number.isFinite(Math.min.apply(null, eloList)) ? Math.min.apply(null, eloList) : 0,
    maxElo: Number.isFinite(Math.max.apply(null, eloList)) ? Math.max.apply(null, eloList) : 0,
    avgHLTV: roundToTwoDecimal(stats.avgHLTV, count),
  });
};
