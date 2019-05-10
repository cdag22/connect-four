import React from 'react';

const Square = ({ x, y, colName, updateColumn, color, gameOver }) => {
  return (
    <div
      className="square"
      style={{ background: !color ? '' : (color === 'Red' ? 'linear-gradient(135deg, #fa749f, #fc5255)' : 'linear-gradient(135deg, #11c9e9, #0675d7)') }}
      x={x}
      y={y}
      onClick={(e) => gameOver ? undefined : updateColumn(colName, e.target)}
    >
    </div >
  );
}



export default Square;