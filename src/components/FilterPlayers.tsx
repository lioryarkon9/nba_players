import { connect } from "react-redux";
import React from "react";

import { IState, TAction } from "../types";
import { filterTextSelector, onChangeFilterText } from "../state";

interface IProps {
  filterText: IState["filterText"];
  onChange: (value: string) => TAction;
}

const Container: React.FC<IProps> = ({ onChange, filterText }) => {
  return (
    <input
      value={filterText}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Filter Players..."
    />
  );
};

const mapStateToProps = (state: IState) => ({
  filterText: filterTextSelector(state),
});

export const FilterPlayers = connect(mapStateToProps, {
  onChange: onChangeFilterText,
})(Container);
