import React from 'react';
import Game from './components/Game';
import './App.css';

function App() {
  return(
    <div className="game">
      <div className="game-board">
        <Game />
      </div>
    </div>
  );
}

export default App;
