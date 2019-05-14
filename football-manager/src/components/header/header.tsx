import * as React from "react";

export interface IProps {}

export interface IState {}

class Header extends React.Component<IProps, IState> {
  render() {
    return (
      <section>
        <h1>Football Team Manager&trade;</h1>
      </section>
    );
  }
}

export default Header;
