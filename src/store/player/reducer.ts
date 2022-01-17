import {
  CLEAR_PLAYER,
  GET_PLAYER_REQUEST,
  GET_PLAYER_SUCCESS,
  GET_PLAYER_FAILURE,
  GET_MATCHES_LIST_SUCCESS,
  GET_GLOBAL_STATS_REQUEST,
  GET_GLOBAL_STATS_SUCCESS,
  GET_GLOBAL_STATS_FAILURE,
} from './consts';
import initialState from './state';
import { TPlayerActions, TInitialState } from './types';

const playerReducer = (state: TInitialState = initialState, action: TPlayerActions): TInitialState => {
  switch (action.type) {
    case CLEAR_PLAYER:
      return initialState;
    case GET_PLAYER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case GET_PLAYER_SUCCESS:
      return {
        ...state,
        playerInfo: action.player,
        lifetime: action.lifetime,
        maps: action.maps,
        isFetching: false,
      };
    case GET_PLAYER_SUCCESS:
      return {
        ...state,
        playerInfo: action.player,
        lifetime: action.lifetime,
        maps: action.maps,
        isFetching: false,
      };
    case GET_MATCHES_LIST_SUCCESS:
      return {
        ...state,
        matches: action.matches,
      };
    case GET_GLOBAL_STATS_REQUEST:
      return {
        ...state,
        isGlobalFetching: true,
      };
    case GET_GLOBAL_STATS_SUCCESS:
      return {
        ...state,
        minElo: action.minElo,
        maxElo: action.maxElo,
        nicknames: action.nicknames,
        isGlobalFetching: false,
      };
    case GET_GLOBAL_STATS_FAILURE:
      return {
        ...state,
        isGlobalFetching: false,
      };
    case GET_PLAYER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: 'Player not found',
      };
    default:
      return state;
  }
};

export default playerReducer;
