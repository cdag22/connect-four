import React from 'react';

const Square = ({ x, y, colName, updateColumn, color }) => {
  return (
    <div className="square" style={{ background: color ? color : '' }} x={x} y={y} onClick={(e) => updateColumn(colName, e.target)}>
    </div >
  );
}



export default Square;