import { connect } from "react-redux";
import React from "react";

import { IState } from "../types";
import { playersSelector } from "../state";

import { UiPlayers } from "./UiPlayers";

interface IProps {
  players: IState["players"];
}

const AllPlayersContainer: React.FC<IProps> = ({ players }) => {
  return (
    <>
      <UiPlayers players={players} />
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  players: playersSelector(state),
});

export const AllPlayers = connect(mapStateToProps)(AllPlayersContainer);
