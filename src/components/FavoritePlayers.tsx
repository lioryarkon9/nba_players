import { connect } from "react-redux";
import React from "react";

import { IState } from "../types";
import { playersSelector } from "../state";

import { UiPlayers } from "./UiPlayers";

interface IProps {
  players: IState["players"];
}

const FavoritePlayersContainer: React.FC<IProps> = ({ players }) => {
  const favoritePlayers = React.useMemo(
    () => players?.filter((player) => player.isFavorite) ?? null,
    [players]
  );

  return (
    <>
      <UiPlayers players={favoritePlayers} />
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  players: playersSelector(state),
});

export const FavoritePlayers = connect(mapStateToProps)(
  FavoritePlayersContainer
);
