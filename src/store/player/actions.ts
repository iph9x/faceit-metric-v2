import { TMatchStats } from 'src/services';

import {
  CLEAR_PLAYER,
  GET_PLAYER_REQUEST,
  GET_PLAYER_SUCCESS,
  GET_PLAYER_FAILURE,
  GET_MATCHES_LIST_SUCCESS,
  GET_MATCHES_LIST_REQUEST,
  GET_MATCHES_LIST_FAILURE,
  GET_GLOBAL_STATS_REQUEST,
  GET_GLOBAL_STATS_SUCCESS,
  GET_GLOBAL_STATS_FAILURE,
} from './consts';
import {
  TClearPlayerAction,
  TGetPlayerRequestAction,
  TGetPlayerSuccessAction,
  TGetPlayerFailureAction,
  ThunkResult,
  TPlayerInfo,
  TLifetime,
  TMap,
  TGetMatchesRequestAction,
  TGetMatchesSuccessAction,
  TGetMatchesFailureAction,
  TGetGlobalStatsRequestAction,
  TGetGlobalStatsSuccessAction,
  TGetGlobalStatsFailureAction,
} from './types';

export const userClearAction = (): TClearPlayerAction => ({ type: CLEAR_PLAYER });

export const getPlayerRequestAction = (): TGetPlayerRequestAction => ({ type: GET_PLAYER_REQUEST });
export const getPlayerSuccessAction = (
  player: TPlayerInfo,
  lifetime: TLifetime,
  maps: TMap[],
): TGetPlayerSuccessAction => ({
  type: GET_PLAYER_SUCCESS,
  player,
  lifetime,
  maps,
});
export const getPlayerFailureAction = (): TGetPlayerFailureAction => ({
  type: GET_PLAYER_FAILURE,
});

/** GET MATCHES LIST */
export const getMatchesRequestAction = (): TGetMatchesRequestAction => ({ type: GET_MATCHES_LIST_REQUEST });
export const getMatchesSuccessAction = (matches: TMatchStats[]): TGetMatchesSuccessAction => ({
  type: GET_MATCHES_LIST_SUCCESS,
  matches,
});
export const getMatchesFailureAction = (error: string): TGetMatchesFailureAction => ({
  type: GET_MATCHES_LIST_FAILURE,
  error,
});

/** GET GLOBAL STATS */
export const getGlobalStatsRequestAction = (): TGetGlobalStatsRequestAction => ({ type: GET_GLOBAL_STATS_REQUEST });
export const getGlobalStatsSuccessAction = (
  minElo: number,
  maxElo: number,
  nicknames: string[],
): TGetGlobalStatsSuccessAction => ({
  type: GET_GLOBAL_STATS_SUCCESS,
  minElo,
  maxElo,
  nicknames,
});
export const getGlobalStatsFailureAction = (): TGetGlobalStatsFailureAction => ({
  type: GET_GLOBAL_STATS_FAILURE,
});

export const setPlayerThunk = (
  matches: TMatchStats[],
  newData: TPlayerInfo,
  lifetime: TLifetime,
  segments: TMap[],
  nicknames: string[],
  minElo: number,
  maxElo: number,
): ThunkResult => async (dispatch) => {
  dispatch(getMatchesSuccessAction(matches));
  dispatch(getPlayerSuccessAction(newData, lifetime, segments));

  if (nicknames) {
    dispatch(getGlobalStatsSuccessAction(
      minElo,
      maxElo,
      nicknames,
    ));
  }
};
