import React from 'react';

const Square = ({ x, y, colName, updateColumn }) => {

  return (
    <div className="square" x={x} y={y} onClick={() => updateColumn(colName)}>
    </div>
  );
}

export default Square;