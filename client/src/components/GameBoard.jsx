import React from 'react';
import _ from 'underscore';
import Column from './Column.jsx';

const GameBoard = (props) => {

  return (
    <div className="board row">
      {_.map(_.range(1, 8), (n, i) => (
        <Column key={i} x={n} className="col-1" />
      ))}
    </div>
  );
}

export default GameBoard;