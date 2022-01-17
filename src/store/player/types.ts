import { ThunkAction } from 'redux-thunk';

import { TMatchStats } from 'src/services';

import { RootState } from '../rootReducer';

export type TInitialState = {
  playerInfo: TPlayerInfo | null;
  lifetime: TLifetime | null;
  isFetching: boolean;
  maps: TMap[] | null;
  error: string | null;
  matches: TMatchStats[];
  minElo: number | null;
  maxElo: number | null;
  nicknames: string[] | null;
  isGlobalFetching: boolean;
};

export type TLifetime = {
  'K/D Ratio': string;
  'Win Rate %': string;
  Wins: string;
  'Longest Win Streak': string;
  'Total Headshots %': string;
  'Recent Results': string[];
  Matches: string;
  'Average Headshots %': string;
  'Current Win Streak': string;
  'Average K/D Ratio': string;
};

export type TPlayerInfo = {
  nickname: string | null;
  player_id: string | null;
  avatar: string;
  country: string;
  cover_featured_image?: string;
  cover_image: string;
  game_player_id?: string;
  skill_level: number | null;
  faceit_elo: number | null;
  game_player_name: string;
  friends_ids: string[] | null;
  steam_nickname: string;
  memberships: string[] | null;
  faceit_url: string;
};

export type TMapStats = {
  'Average K/D Ratio': string;
  'Average Penta Kills':string;
  Matches: string;
  'Average K/R Ratio': string;
  'Average Triple Kills': string;
  Deaths: string;
  'Win Rate %': string;
  'K/D Ratio': string;
  Assists: string;
  Headshots: string;
  'Triple Kills': string;
  'Average Deaths': string;
  'Average Headshots %': string;
  'Penta Kills':string;
  'Average Quadro Kills': string;
  'K/R Ratio': string;
  MVPs: string;
  'Total Headshots %': string;
  'Average MVPs': string;
  'Average Kills': string;
  'Average Assists': string;
  'Quadro Kills': string;
  Wins: string;
  'Headshots per Match': string;
  Kills: string;
  Rounds: string;
}

export type TMap = {
  stats: TMapStats;
  img_regular: string;
  img_small: string;
  type: string;
  mode: string;
  label: string;
};

export type TClearPlayerAction = {
  type: 'CLEAR_PLAYER';
};

export type TGetPlayerRequestAction = {
  type: 'GET_PLAYER_REQUEST';
};

export type TGetPlayerSuccessAction = {
  type: 'GET_PLAYER_SUCCESS';
  player: TPlayerInfo;
  lifetime: TLifetime;
  maps: TMap[];
};

export type TGetPlayerFailureAction = {
  type: 'GET_PLAYER_FAILURE';
};

export type TGetMatchesRequestAction = { type: 'GET_MATCHES_LIST_REQUEST' };
export type TGetMatchesSuccessAction = {
  type: 'GET_MATCHES_LIST_SUCCESS';
  matches: TMatchStats[];
};
export type TGetMatchesFailureAction = {
  type: 'GET_MATCHES_LIST_FAILURE';
  error: string;
};

export type TGetGlobalStatsRequestAction = { type: 'GET_GLOBAL_STATS_REQUEST' };
export type TGetGlobalStatsSuccessAction = {
  type: 'GET_GLOBAL_STATS_SUCCESS';
  minElo: number;
  maxElo: number;
  nicknames: string[];
};
export type TGetGlobalStatsFailureAction = {
  type: 'GET_GLOBAL_STATS_FAILURE';
};

export type TPlayerActions =
  | TClearPlayerAction
  | TGetPlayerRequestAction
  | TGetPlayerSuccessAction
  | TGetPlayerFailureAction
  | TGetMatchesRequestAction
  | TGetMatchesSuccessAction
  | TGetMatchesFailureAction
  | TGetGlobalStatsRequestAction
  | TGetGlobalStatsSuccessAction
  | TGetGlobalStatsFailureAction;

export type ThunkResult<R = Promise<void>> = ThunkAction<R, RootState, unknown, TPlayerActions>;
