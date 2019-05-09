import React from 'react';
import _ from 'underscore';
import Square from './Square.jsx';

const Column = ({ x, colName, updateColumn }) => {
  return (
    <div className="column">
      {_.map(_.range(6), n => <Square key={n} x={x} y={n} colName={colName} updateColumn={updateColumn} />)}
    </div>
  );
}

export default Column;