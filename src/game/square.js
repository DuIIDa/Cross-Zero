import React from 'react';

function Square(props){
    return (
        <button data-id={props.id} data-row={props.row} data-colum={props.colum} onClick={props.onClick}>
          {props.value}
        </button>
    );
} 

export default Square