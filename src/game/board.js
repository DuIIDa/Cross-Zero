import React from 'react';
import Square from './square'


class Board extends React.Component {
    renderSquare(i, colm, row) {
      return <Square value={this.props.squares[i]} onClick={()=>this.props.onClick(i, colm, row)} />;
    }
  
    render() {  
      return (
        <div>
          {
            this.props.squares.map((item,i) => {
              if(i===0 || i===3 || i===6) {
                let row = 0;
                let colm = 1;
                if(i<3){
                  row = 1;
                }else if(i>2 && i<5){
                  row = 2;
                }else if(i>5){
                  row = 3;
                }
                return <div className="board-row">
                  {this.renderSquare(i, colm, row)}
                  {this.renderSquare(i+1, colm+1, row)}
                  {this.renderSquare(i+2, colm+2, row)}
                </div>
              }  
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