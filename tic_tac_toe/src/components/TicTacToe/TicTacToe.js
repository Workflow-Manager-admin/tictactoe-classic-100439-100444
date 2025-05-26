import React, { useState } from 'react';
import './TicTacToe.css';

/**
 * TicTacToe component - Implements a classic Tic Tac Toe game
 * 
 * @returns {JSX.Element} The TicTacToe game component
 */
// PUBLIC_INTERFACE
const TicTacToe = () => {
  // Game state
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameStatus, setGameStatus] = useState(''); // '', 'winner', or 'draw'

  /**
   * Calculate the winner by checking all possible winning combinations
   * 
   * @param {Array} squares - The current state of the game board
   * @returns {string|null} - The winner ('X' or 'O') or null if no winner
   */
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal top-left to bottom-right
      [2, 4, 6], // diagonal top-right to bottom-left
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  /**
   * Handle a square click to make a move
   * 
   * @param {number} index - The index of the clicked square
   */
  const handleClick = (index) => {
    // Return if the game is over or the square is already filled
    if (gameStatus || board[index]) {
      return;
    }

    // Create a new board with the move applied
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    
    // Update the board state
    setBoard(newBoard);
    
    // Check for a winner
    const winner = calculateWinner(newBoard);
    if (winner) {
      setGameStatus('winner');
    } else if (!newBoard.includes(null)) {
      // If all squares are filled and no winner, it's a draw
      setGameStatus('draw');
    } else {
      // Switch turns
      setIsXNext(!isXNext);
    }
  };

  /**
   * Reset the game to its initial state
   */
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameStatus('');
  };

  /**
   * Render a square button on the game board
   * 
   * @param {number} index - The index of the square
   * @returns {JSX.Element} - The rendered square
   */
  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  /**
   * Generate status text based on the current game state
   * 
   * @returns {string} - The current game status text
   */
  const getStatusText = () => {
    if (gameStatus === 'winner') {
      return `Winner: ${isXNext ? 'O' : 'X'}`;
    } else if (gameStatus === 'draw') {
      return 'Game ended in a draw!';
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div className="tictactoe-container">
      <h2 className="tictactoe-title">Tic Tac Toe</h2>
      
      <div className="game-status">
        {getStatusText()}
      </div>
      
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      
      <button className="reset-button btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
