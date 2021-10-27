import './App.css';
import React from 'react';
import { Score } from './features/score/Score.js';
import { Board } from './features/board/Board.js';
// Add import statements
import { useDispatch } from 'react-redux';
import { setBoard, resetCards } from './features/board/boardSlice';



const App = () => {
  // Add dispatch variable
  const dispatch = useDispatch();

  const startGameHandler = () => {
    // Add action dispatch
    dispatch(setBoard());
  };

  const tryAgainHandler = () => {
    // Add action dispatch
    dispatch(resetCards());
    
  };

  return (
    <div className="App">
      <Score />
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler} className="start-button">
          Start Game
        </button>
        <button onClick={tryAgainHandler} className="try-new-pair-button">
          Try New Pair
        </button>
      </footer>
    </div>
  );
};

export default App;
