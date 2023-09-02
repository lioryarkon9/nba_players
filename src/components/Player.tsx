import React from "react";

import { IPlayer } from "../types";
import { styled } from "../styles.config";

interface IProps {
  player: IPlayer;
}

export const Player: React.FC<IProps> = ({ player }) => {
  const { isFavorite, first_name, last_name } = player;
  const buttonLabel = isFavorite ? "unfavorite" : "make favorite";

  return (
    <Container>
      <div>
        {first_name} {last_name}
      </div>
      <div>
        <button>{buttonLabel}</button>
      </div>
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});
