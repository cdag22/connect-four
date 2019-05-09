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
      }
    }

    this.updateColumn = this.updateColumn.bind(this);
  }

  updateColumn(column, square) {
    this.setState(state => {
      let list = state.columns[column];
      let value = state.isRedsMove ? 'linear-gradient(135deg, #fa749f, #fc5255)' : 'linear-gradient(135deg, #11c9e9, #0675d7)';
      list.push(value);
      return {
        isRedsMove: !state.isRedsMove,
        [column]: list,
      };
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
              <GameBoard columns={this.state.columns} updateColumn={this.updateColumn} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;