import * as React from "react";
import styles from "./player.module.scss";
import { IPlayer } from "../../containers/playerContainer/playerContainer";

export interface IProps {
  player: IPlayer;
}

export interface IState {}

class Player extends React.Component<IProps, IState> {
  render() {
    return (
      <section>
        <article className={styles.player}>
          <p>{this.props.player.name}</p>
          <p>{this.props.player.position}</p>
        </article>
      </section>
    );
  }
}

export default Player;
