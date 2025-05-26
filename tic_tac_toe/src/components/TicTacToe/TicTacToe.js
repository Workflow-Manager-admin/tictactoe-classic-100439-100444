import React, { useState, useEffect } from 'react';
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
  const [modalActive, setModalActive] = useState(false);
  
  // Effect to show modal when game ends
  useEffect(() => {
    if (gameStatus === 'winner' || gameStatus === 'draw') {
      const timer = setTimeout(() => {
        setModalActive(true);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [gameStatus]);

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
   * Handle a cell click to make a move
   * 
   * @param {number} index - The index of the clicked cell
   */
  const handleClick = (index) => {
    // Return if the game is over or the cell is already filled
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
      // If all cells are filled and no winner, it's a draw
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
    setModalActive(false);
  };

  /**
   * Render an X symbol using SVG
   * 
   * @returns {JSX.Element} - The rendered X symbol
   */
  const renderXSymbol = () => {
    return (
      <div className="x-symbol">
        <svg viewBox="0 0 100 100">
          <line x1="20" y1="20" x2="80" y2="80" />
          <line x1="80" y1="20" x2="20" y2="80" />
        </svg>
      </div>
    );
  };

  /**
   * Render an O symbol using SVG
   * 
   * @returns {JSX.Element} - The rendered O symbol
   */
  const renderOSymbol = () => {
    return (
      <div className="o-symbol">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" />
        </svg>
      </div>
    );
  };

  /**
   * Render a cell on the game board
   * 
   * @param {number} index - The index of the cell
   * @returns {JSX.Element} - The rendered cell
   */
  const renderCell = (index) => {
    const value = board[index];
    let cellContent = null;
    let cellClass = "cell";
    
    if (value === 'X') {
      cellContent = renderXSymbol();
      cellClass += " x";
    } else if (value === 'O') {
      cellContent = renderOSymbol();
      cellClass += " o";
    }
    
    return (
      <div 
        key={index}
        className={cellClass}
        onClick={() => handleClick(index)}
        tabIndex="0"
        aria-label={`Cell ${Math.floor(index / 3) + 1}-${index % 3 + 1}, ${value ? `marked with ${value}` : 'empty'}`}
        role="button"
        onKeyDown={(e) => e.key === 'Enter' && handleClick(index)}
      >
        {cellContent}
      </div>
    );
  };

  /**
   * Generate status text based on the current game state
   * 
   * @returns {JSX.Element} - The current game status element
   */
  const renderStatus = () => {
    let statusText;
    let statusClass = "status";
    
    if (gameStatus === 'winner') {
      const winner = isXNext ? 'O' : 'X';
      statusText = `Player ${winner} wins!`;
      statusClass += winner === 'X' ? " x-turn" : " o-turn";
    } else if (gameStatus === 'draw') {
      statusText = "Game ended in a draw!";
    } else {
      statusText = `Player ${isXNext ? 'X' : 'O'}'s turn`;
      statusClass += isXNext ? " x-turn" : " o-turn";
    }
    
    return (
      <div className={statusClass} aria-live="polite">
        {statusText}
      </div>
    );
  };
  
  /**
   * Render the game over modal
   * 
   * @returns {JSX.Element} - The game over modal
   */
  const renderGameOverModal = () => {
    let resultMessage;
    let resultClass = "result-message";
    
    if (gameStatus === 'winner') {
      const winner = isXNext ? 'O' : 'X';
      resultMessage = `Player ${winner} wins!`;
      resultClass += winner === 'X' ? " result-x" : " result-o";
    } else {
      resultMessage = "Game ended in a draw!";
      resultClass += " result-draw";
    }
    
    return (
      <div className={`game-over-modal ${modalActive ? 'active' : ''}`}>
        <div className="modal-content">
          <div className={resultClass}>{resultMessage}</div>
          <button className="button" onClick={resetGame}>Play Again</button>
        </div>
      </div>
    );
  };

  return (
    <div className="game-container">
      <h2 className="game-title">TicTacToe Classic</h2>
      
      {renderStatus()}
      
      <div className="game-board">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => renderCell(index))}
      </div>
      
      <div className="controls">
        <button className="button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      
      {renderGameOverModal()}
    </div>
  );
};

export default TicTacToe;
