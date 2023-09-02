import { connect } from "react-redux";
import React from "react";

import { IPlayer, TAction } from "../types";
import { setPlayers } from "../state";

interface IProps {
  setPlayers: (players: IPlayer[]) => TAction;
}

const PlayersContainer: React.FC<IProps> = ({ setPlayers }) => {
  React.useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/players")
      .then((httpResult) => httpResult.json())
      .then((jsonResult) => {
        setPlayers(jsonResult.data);
      });
  }, []);

  return null;
};

export const InitPlayers = connect(null, { setPlayers })(PlayersContainer);
