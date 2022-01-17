import { AxiosResponse } from 'axios';

import { agent } from 'src/agent';

import {
  TPlayersSearchResponse, TPlayerResponse, TPlayerStatsResponse, TMatchesStatsResponse,
} from './player.types';

export const fetchPlayersList = (nickname: string): Promise<AxiosResponse<TPlayersSearchResponse>> => agent.get('/search/players', { params: { nickname, game: 'csgo', limit: 5 } });

export const fetchPlayer = (nickname: string): Promise<AxiosResponse<TPlayerResponse>> => agent.get('/players', { params: { nickname, game: 'csgo' } });

export const fetchPlayerStats = (player_id: string): Promise<AxiosResponse<TPlayerStatsResponse>> => agent.get(`/players/${player_id}/stats/csgo`);

export const fetchPlayerMatches = (player_id: string, matchesCount: number, page?: number): Promise<AxiosResponse<TMatchesStatsResponse>> => agent.get(`/stats/api/v1/stats/time/users/${player_id}/games/csgo?size=${matchesCount}${page ? `&page=${page}` : ''}`, {
  baseURL: 'https://api.faceit.com',
  headers: {
    Authorization: '',
  },
});

// export const fetchPlayer = (nickname: string, matchesCount: number): Promise<AxiosResponse<TMatchesStatsResponse>> => {
//   return agent.get(`/users/v1/nicknames/${nickname}`, {
//     baseURL: 'https://api.faceit.com',
//     headers: {
//       Authorization: '',
//     },
//   });
// };

// https://api.faceit.com/users/v1/nicknames/kita
// https://api.faceit.com/ranking/v1/globalranking/csgo/${region}/ac71ba3c-d3d4-45e7-8be2-26aa3986867d
// https://api.faceit.com/ranking/v1/globalranking/csgo/EU/ac71ba3c-d3d4-45e7-8be2-26aa3986867d?country=${country}
// https://api.faceit.com/stats/v1/stats/time/users/ac71ba3c-d3d4-45e7-8be2-26aa3986867d/games/csgo?page=0&size=30
// https://api.faceit.com/search/v1/videos?owner=s1mple&limit=6&sort=-created&player=ac71ba3c-d3d4-45e7-8be2-26aa3986867d
// https://api.faceit.com/search/v1/videos?player=ac71ba3c-d3d4-45e7-8be2-26aa3986867d&offset=0&limit=12
