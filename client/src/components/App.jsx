import React from 'react';
import GameBoard from './GameBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
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
              <GameBoard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;