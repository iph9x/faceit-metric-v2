import { TPlayerInfo } from 'src/store/player/types';
import { TCurrentPage, TMapNames, TResults } from 'src/types';

export type PlayerProps = {
  nickname: string;
  playerInfo: TPlayerInfo | null;
  setMatchesCount: (count: number) => void;
  matchesCount: number;
  isGeneralStats: boolean;
  setIsGeneralStats: (b: boolean) => void;
  mapFilter: TMapNames;
  setMapFilter: (m: TMapNames) => void;
  resultFilter: TResults;
  setResultFilter: (r: TResults) => void;
  nicknames: string[];
  currentPage: TCurrentPage;
  setCurrentPage: (page: TCurrentPage) => void;
};
