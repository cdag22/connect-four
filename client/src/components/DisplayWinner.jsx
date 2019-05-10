import React from 'react';

const DisplayWinner = ({ winner, draw, gameOver }) => {

  return (
    <div>
      {
        gameOver ?
          <div className="win-banner">
            <h1 className="display-4 text-center">{draw ? 'Its a draw!' : { winner } + 'Won!'}</h1>
          </div>
          : undefined
      }
    </div>
  )
}

export default DisplayWinner;