import { connect } from "react-redux";
import React from "react";

import { IPlayer, TPlayerAction } from "../types";
import { styled } from "../styles.config";
import { toggleFavorite } from "../state";

interface IProps {
  player: IPlayer;
  toggleFavorite: TPlayerAction;
}

const PlayerContainer: React.FC<IProps> = ({ player, toggleFavorite }) => {
  const { isFavorite, first_name, last_name, id } = player;
  const label = isFavorite ? "Remove from Favorites" : "Add to Favorites";

  return (
    <Container>
      <div>
        {first_name} {last_name}
      </div>
      <div>
        <button onClick={() => toggleFavorite(id)}>{label}</button>
      </div>
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

export const Player = connect(null, { toggleFavorite })(PlayerContainer);
