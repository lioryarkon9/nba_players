import { legacy_createStore as createStore } from "redux";

import { IState, TAction, IPlayer } from "./types";

const INITIAL_STATE: IState = {
  players: null,
  ui: {
    mode: "DESKTOP",
  },
};

function reducer(state: IState = INITIAL_STATE, action: TAction): IState {
  switch (action.type) {
    case "SET_PLAYERS":
      return {
        ...state,
        players: action.payload.players,
      };
    case "TOGGLE_FAVORITE":
      if (!state.players) {
        return state;
      }

      const updatedPlayers = state.players.map((player) => {
        if (player.id === action.payload.playerId) {
          return { ...player, isFavorite: !player.isFavorite };
        }

        return player;
      });

      return {
        ...state,
        players: updatedPlayers,
      };
    default:
      return state;
  }
}

export const setPlayers = (players: IPlayer[]) => ({
  type: "SET_PLAYERS",
  payload: { players },
});

export const toggleFavorite = (playerId: IPlayer["id"]) => ({
  type: "TOGGLE_FAVORITE",
  payload: { playerId },
});

export const playersSelector = ({ players }: IState) => players;

export const store = createStore(reducer);
