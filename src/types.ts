interface ITeam {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface IPlayer {
  id: number;
  first_name: string;
  height_feet: null | number;
  height_inches: null | number;
  last_name: string;
  position: string;
  weight_pounds: null | number;
  team: ITeam;
  isFavorite?: boolean;
}

export type TUIMode = "MOBILE" | "DESKTOP";

export interface IState {
  players: IPlayer[] | null;
  ui: {
    mode: TUIMode;
  };
}

export type TAction = {
  type: string;
  payload: any;
};

export type TPlayerAction = (playerId: IPlayer["id"]) => TAction;
