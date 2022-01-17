import { TLifetime, TMap } from 'src/store/player/types';
import { TMatchStats } from 'src/services';
import { TMapNames, TResults } from 'src/types';
import { TStats } from './Overview.utils';

export type TFilteredMatches = (TMatchStats & { eloDiff: number })[];

export type OverviewProps = {
  nickname: string;
  isFetching: boolean;
  lifetime: TLifetime | null;
  maps: TMap[] | null;
  matches: TFilteredMatches;
  error: string | null;
  minElo: number | null;
  maxElo: number | null;
  matchesCount: number;
  isGeneralStats: boolean;
  mapFilter: TMapNames;
  resultFilter: TResults;
  calcedStats: TStats;
};
