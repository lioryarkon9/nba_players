import { connect } from "react-redux";
import React from "react";

import { IState, TFavoritePlayersBackgroundColor } from "../types";
import {
  playersSelector,
  favoritePlayersBackgroundColorSelector,
} from "../state";

import { UiPlayers } from "./UiPlayers";

interface IProps {
  players: IState["players"];
  backgroundColor: TFavoritePlayersBackgroundColor;
}

const FavoritePlayersContainer: React.FC<IProps> = ({
  players,
  backgroundColor,
}) => {
  const favoritePlayers = React.useMemo(
    () => players?.filter((player) => player.isFavorite) ?? null,
    [players]
  );

  return (
    <>
      <UiPlayers players={favoritePlayers} backgroundColor={backgroundColor} />
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  players: playersSelector(state),
  backgroundColor: favoritePlayersBackgroundColorSelector(state),
});

export const FavoritePlayers = connect(mapStateToProps)(
  FavoritePlayersContainer
);
