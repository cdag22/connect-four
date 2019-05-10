import React from 'react';
import _ from 'underscore';
import Column from './Column.jsx';

const GameBoard = ({ updateColumn, columns, gameOver }) => {

  return (
    <div className="board row">
      {_.map(_.range(7), n => (
        <Column key={n} x={n} colName={n} column={columns[n]} updateColumn={updateColumn} gameOver={gameOver} className="col-1" />
      ))}
    </div>
  );
}

export default GameBoard;