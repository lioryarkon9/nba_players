import { legacy_createStore as createStore } from "redux";

import { IState, TAction, IPlayer } from "./types";

const INITIAL_STATE: IState = {
  players: null,
  filterText: "",
  ui: {
    favoritePlayersBackgroundColor: "inherit",
  },
};

function reducer(state: IState = INITIAL_STATE, action: TAction): IState {
  switch (action.type) {
    case "SET_PLAYERS":
      return {
        ...state,
        players: action.payload.players,
      };
    case "ON_CHANGE_FILTER_TEXT":
      return {
        ...state,
        filterText: action.payload.value,
      };
    case "CHANGE_FAVORITE_PLAYERS_BACKGROUND_COLOR":
      const currentColor = state.ui.favoritePlayersBackgroundColor;
      const nextColor = (() => {
        if (currentColor === "inherit") {
          return "blue";
        }

        if (currentColor === "blue") {
          return "red";
        }

        return "inherit";
      })();

      return {
        ...state,
        ui: {
          ...state.ui,
          favoritePlayersBackgroundColor: nextColor,
        },
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

export const changeFavoritePlayersBackgroundColor = () => ({
  type: "CHANGE_FAVORITE_PLAYERS_BACKGROUND_COLOR",
});

export const onChangeFilterText = (value: string) => ({
  type: "ON_CHANGE_FILTER_TEXT",
  payload: { value },
});


export const playersSelector = ({ players }: IState) => players;
export const favoritePlayersBackgroundColorSelector = ({ ui }: IState) =>
  ui.favoritePlayersBackgroundColor;
export const filterTextSelector = ({ filterText }: IState) => filterText;


export const store = createStore(reducer);
