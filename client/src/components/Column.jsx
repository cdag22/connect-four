import React from 'react';
import _ from 'underscore';
import Square from './Square.jsx';

const Column = ({ x, colName, updateColumn, column, gameOver }) => {
  return (
    <div className="column">
      {_.map(_.range(7), n => <Square key={n} x={x} y={n} color={column[n]} colName={colName} updateColumn={updateColumn} gameOver={gameOver} />)}
    </div>
  );
}

export default Column;