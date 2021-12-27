export interface AocResponse {
  owner_id: string;
  members: { [key: string]: Member };
  event: string;
}

export interface Member {
  local_score: number;
  completion_day_level: CompletionDay;
  last_star_ts: number;
  id: string;
  stars: number;
  global_score: number;
  name: string;
  starList: number[];
}

interface CompletionDay {
  [key: string]: Day;
}

interface Day {
  [key: string]: StarStamp;
}

interface StarStamp {
  get_star_ts: number;
}

export interface EnvConfig {
  COOKIE: string;
}
