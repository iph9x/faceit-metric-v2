import { TInitialState } from './types';

const initialState: TInitialState = {
  playerInfo: {
    nickname: null,
    player_id: null,
    avatar: '',
    country: '',
    cover_featured_image: '',
    cover_image: '',
    faceit_url: '',
    game_player_id: '',
    skill_level: null,
    faceit_elo: null,
    game_player_name: '',
    friends_ids: null,
    steam_nickname: '',
    memberships: null,
  },
  lifetime: null,
  isFetching: true,
  maps: null,
  error: null,
  matches: [],
  minElo: null,
  maxElo: null,
  nicknames: null,
  isGlobalFetching: true,
};

export default initialState;
