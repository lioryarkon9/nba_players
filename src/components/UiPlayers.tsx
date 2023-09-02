import React from "react";

import { IState, TFavoritePlayersBackgroundColor } from "../types";
import { styled } from "../styles.config";

import { Player } from "./Player";

interface IProps {
  players: IState["players"];
  backgroundColor?: TFavoritePlayersBackgroundColor;
}

export const UiPlayers: React.FC<IProps> = ({
  players,
  backgroundColor = "inherit",
}) => {
  return (
    <MainContainer style={{ backgroundColor }}>
      {players?.map((player) => (
        <PlayerContainer key={player.id}>
          <Player player={player} />
        </PlayerContainer>
      ))}
    </MainContainer>
  );
};

const MainContainer = styled("div", {
  height: "100%",
  overflowY: "auto",
});

const PlayerContainer = styled("div", {
  borderBottom: "1px solid",
  padding: "5px",
});
