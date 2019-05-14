import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import PlayerContainer from "./containers/playerContainer/playerContainer";;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <PlayerContainer />
      </header>
    </div>
  );
}

export default App;
