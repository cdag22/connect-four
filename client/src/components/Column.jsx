import React from 'react';
import _ from 'underscore';
import Square from './Square.jsx';

const Column = ({ x }) => {

  return (
    <div className="column">
      {_.map(_.range(1, 7), (n, i) => <Square key={i} x={x} y={n} />)}
    </div>
  );
}

export default Column;