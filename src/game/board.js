import React from 'react';
import Square from './square'


class Board extends React.Component {
  
    render() {  
      return (
        <div className='game-box'>
          {
            this.props.squares.map((square, i) => {
              let row = 1;
              let colum = 1;
              if(i===1 || i===4 || i===7){
                colum = 2;
              }else if(i===2 || i===5 || i===8) {
                colum = 3;
              }
              if(i>2 && i<6){
                row = 2;
              }else if(i>5){
                row = 3;
              }
              return (<Square key={i} id={i} row={row} colum={colum} value={square} onClick={this.props.onClick}></Square>)
            })
          }
          {/*<div className="board-row">
            {this.renderSquare(0, 1, 1)}
            {this.renderSquare(1, 2, 1)}
            {this.renderSquare(2, 3, 1)}
          </div>
          <div className="board-row">
            {this.renderSquare(3, 1, 2)}
            {this.renderSquare(4, 2, 2)}
            {this.renderSquare(5, 3, 2)}
          </div>
          <div className="board-row">
            {this.renderSquare(6, 1, 3)}
            {this.renderSquare(7, 2, 3)}
            {this.renderSquare(8, 3, 3)}
        </div>*/}
        </div>
      );
    }
}

export default Board