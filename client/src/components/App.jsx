import React from 'react';
import GameBoard from './GameBoard.jsx';
import GameLogic from './GameLogic.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRedsMove: true,
      columns: {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: []
      },
      isDraw: false,
      winner: '',
      isGameOver: false
    }

    this.updateColumn = this.updateColumn.bind(this);
  }

  convertColumnStateToArray(cols) {
    let arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push(cols[i]);
    }
    return arr;
  }

  updateColumn(column, square) {
    this.setState(state => {
      let list = state.columns[column];
      let value = state.isRedsMove ? 1 : 0;
      list.push(value);
      let columns = this.convertColumnStateToArray(state.columns);
      let gameTest = new GameLogic(columns);
      let winner;
      if (gameTest.isHorizontalWin() || gameTest.isVerticalWin() || gameTest.isDiagonalWin()) {
        winner = state.isRedsMove ? 'Red' : 'Blue';
        gameTest.isHorizontalWin() ? console.log('HORIZONTAL') : undefined;
        gameTest.isVerticalWin() ? console.log('Vertical') : undefined;
        gameTest.isDiagonalWin() ? console.log('Diagonal') : undefined;
        return {
          isRedsMove: !state.isRedsMove,
          [column]: list,
          winner: winner,
          isGameOver: true
        };
      } else if (gameTest.isDraw()) {
        return {
          isRedsMove: !state.isRedsMove,
          [column]: list,
          isDraw: true,
          isGameOver: true
        };
      } else {
        return {
          isRedsMove: !state.isRedsMove,
          [column]: list
        };
      }
    });

  }

  render() {
    return (
      <div>
        <header className="jumbotron">
          <h1 className="display-3">Connect 4</h1>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-8 m-auto">
              <GameBoard columns={this.state.columns} gameOver={this.state.isGameOver} updateColumn={this.updateColumn} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;