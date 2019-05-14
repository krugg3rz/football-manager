import * as React from "react";
import Player from "../../components/player/player";
import { players } from "../../football-team";
import styles from "./playerContainer.module.scss";

export interface IOwnProps {}

export interface IStateProps {}

export interface IState {}

export interface IPlayer {
  id: number;
  name: string;
  position: string | null;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  role: string;
}

class PlayerContainer extends React.Component<IOwnProps & IStateProps, IState> {
  render() {
    return (
      <div className={styles.playerContainer}>
        {players.map((player, index) => (
          <Player player={player} key={index} />
        ))}
      </div>
    );
  }
}

export default PlayerContainer;
