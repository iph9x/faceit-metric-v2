import { TLifetime, TMap } from 'src/store/player/types';

export type TPlayersSearchResponse = {
  items: TPlayersListItem[];
  start: number;
  end: number;
};

export type TPlayersListItem = {
  player_id: string;
  nickname: string;
  status: string;
  games: [
    {
      name: string;
      skill_level: string;
    },
  ];
  country: string;
  verified: boolean;
  avatar: string;
};

export type TPlayerResponse = {
  player_id: string;
  nickname: string;
  avatar: string;
  country: string;
  cover_image: string;
  games: {
    csgo: {
      region: string;
      game_player_id: string;
      skill_level: number;
      faceit_elo: number;
      game_player_name: string;
      skill_level_label: string;
      game_profile_id: string;
    }
  };
  friends_ids: string[];
  steam_nickname: string;
  memberships: string[];
  faceit_url: string;
};

export type TPlayerStatsResponse = {
  lifetime: TLifetime;
  segments: TMap[]
};

export type TMatchesStatsResponse = TMatchStats[];

export type TMatchStats = {
  _id: {
    matchId: string;
    playerId: string;
  },
  created_at: number,
  updated_at: number,
  i9: string; // mvp
  nickname: string;
  i10: string; // win/lose
  i13: string; // HS count
  i15: string; // 4K
  i6: string; // kills
  i14: string; // 3K
  i7: string; // assists
  i16: string; // 5K
  i8: string; // deaths
  playerId: string;
  c2: string; // KD
  c4: string; // HS %
  c3: string; // KR
  c1: string;
  i19: string;
  teamId: string;
  i3: string; // ctWin
  i4: string; // tWin
  i5: string; // team name
  premade: boolean,
  c5: string;
  bestOf: string;
  competitionId: string;
  date: number,
  game: string;
  gameMode: string;
  i0: string;
  i1: string; // map
  i12: string; // rounds
  i18: string; // score
  i2: string;
  matchId: string;
  matchRound: string;
  played: string;
  status: string;
  elo?: string;
};
