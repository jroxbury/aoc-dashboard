export interface Vm extends AocResponse {
  starList: string[];
}
export interface AocResponse {
  owner_id: string;
  members: { [key: string]: Member };
  event: string;
}

interface Member {
  local_score: number;
  completion_day_level: CompletionDay;
  last_star_ts: number;
  id: string;
  stars: number;
  global_score: number;
  name: string;
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
