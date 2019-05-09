import React from 'react';
import GameBoard from './GameBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRedsMove: true,
      col1: [],
      col2: [],
      col3: [],
      col4: [],
      col5: [],
      col6: [],
      col7: []
    }

    this.updateColumn = this.updateColumn.bind(this);
  }

  updateColumn(column) {
    this.setState(state => {
      let list = state[column];
      let value = state.isRedsMove ? 'red' : 'blue';
      list.push(value);
      console.log('list', list);
      return {
        isRedsMove: !state.isRedsMove,
        [column]: list
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
              <GameBoard updateColumn={this.updateColumn} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;