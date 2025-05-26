import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe/TicTacToe';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <div className="subtitle">Classic Game</div>
            
            <h1 className="title">Tic Tac Toe</h1>
            
            <div className="description">
              A simple interactive game where two players take turns marking spaces in a 3×3 grid.
              The player who succeeds in placing three of their marks in a horizontal, vertical, or 
              diagonal row is the winner.
            </div>
          </div>
          
          <TicTacToe />
        </div>
      </main>
    </div>
  );
}

export default App;