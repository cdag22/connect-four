import React from 'react';
import _ from 'underscore';
import Column from './Column.jsx';

const GameBoard = ({ updateColumn }) => {

  return (
    <div className="board row">
      {_.map(_.range(7), n => (
        <Column key={n} x={n} colName={`col${n + 1}`} updateColumn={updateColumn} className="col-1" />
      ))}
    </div>
  );
}

export default GameBoard;