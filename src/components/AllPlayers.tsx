import { connect } from "react-redux";
import React from "react";

import { IState } from "../types";
import { playersSelector, filterTextSelector } from "../state";

import { UiPlayers } from "./UiPlayers";

interface IProps {
  players: IState["players"];
  filterText: IState["filterText"];
}

const AllPlayersContainer: React.FC<IProps> = ({ players, filterText }) => {
  const allPlayers = React.useMemo(
    () =>
      players?.filter((player) => {
        if (!filterText) {
          return true;
        }

        const fullName =
          `${player.first_name} ${player.last_name}`.toLowerCase();

        return fullName.includes(filterText.toLowerCase());
      }) ?? null,
    [players, filterText]
  );

  return (
    <>
      <UiPlayers players={allPlayers} />
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  players: playersSelector(state),
  filterText: filterTextSelector(state),
});

export const AllPlayers = connect(mapStateToProps)(AllPlayersContainer);
