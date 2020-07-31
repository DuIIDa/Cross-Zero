import React from 'react';
import Board from './board'

class Game extends React.Component {
    constructor(props) {
      super(props);
      this.calculateWinner = this.calculateWinner.bind(this);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
          lastClick: {
            colum: null,
            row: null
          }
        }],
        stepNumber: 0,
        xIsNext: true,
      }
    };

    handleClick(i, colm, row) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = [...current.squares];
      if (this.calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([
          {
            squares: squares,
            lastClick: {
              colum: colm,
              row: row
            }
          }]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length,
      });
    };

    jumpTo(step) { 
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    };

    calculateWinner(squares) {
      const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ];

      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
    };

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = this.calculateWinner(current.squares);
      let status;

      const moves = history.map((item, i) => {
        const move = i ? `Go to # ${i} ( ${item.lastClick.colum}/${item.lastClick.row} )` : `Go to Start Game`;
        return (
          <li key={i}>
            <button className={i===this.state.stepNumber?'current':null} 
            onClick={(event)=>{this.jumpTo(i, event.target)}}>{move}</button>
          </li>
        )
      });

      if(winner) {
        status = `Win:  ${winner}`;
      }else {
        status = `Next player:  ${this.state.xIsNext ? 'X' : '0'}`;
      } 

      return (
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={(i, colm, row) => this.handleClick(i, colm, row)}/>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }


export default Game;