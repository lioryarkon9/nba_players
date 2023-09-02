import { connect } from "react-redux";
import React from "react";

import { changeFavoritePlayersBackgroundColor } from "../state";
import { styled } from "../styles.config";
import { TChangeFavoritePlayersBacgkroundColor } from "../types";

interface IProps {
  changeColor: TChangeFavoritePlayersBacgkroundColor;
}

const Container: React.FC<IProps> = ({ changeColor }) => {
  return <Button onClick={changeColor}>&#10000;</Button>;
};

const Button = styled("button", {
  padding: "3px",
  "@desktop": {
    "&::after": {
      content: " Change Favorites Background Color",
    },
  },
  "@mobile": {
    minWidth: "30px"
  },
});

export const ChangeFavoritesBackgroundColor = connect(null, {
  changeColor: changeFavoritePlayersBackgroundColor,
})(Container);
