import React from "react";

import { IState } from "../types";
import { styled } from "../styles.config";

import { Player } from "./Player";

interface IProps {
  players: IState["players"];
}

export const UiPlayers: React.FC<IProps> = ({ players }) => {
  return (
    <>
      {players?.map((player) => (
        <PlayerContainer key={player.id}>
          <Player player={player} />
        </PlayerContainer>
      ))}
    </>
  );
};

const PlayerContainer = styled("div", {
  borderBottom: "1px solid",
  padding: "5px",
});
