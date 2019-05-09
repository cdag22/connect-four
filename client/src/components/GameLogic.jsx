class GameLogic {
  constructor(columns) {
    this.rows = this.convertColumnsToRows(columns);
    this.columns = columns;
    this.dimension = 4;
  }

  convertColumnsToRows(columns) {
    let rows = [];
    for (let i = 0; i < columns.length; i++) {
      let row = [];
      let col = columns[i]
      for (let k = 0; k < col.length; k++) {
        row.push(column[k][i]);
      }
      rows.push(row);
    }
    return rows;
  }

  isVerticalOrHorizontalWin(arr) {
    let array = arr
    for (let i = 0; i < array.length; i++) {
      let subArray = array[i];
      let current = subArray[0];
      let sameInARow = 1;
      for (let k = 1; k < subArray.length; k++) {
        if (current === subArray[k]) {
          sameInARow++;
        } else {
          current = subArray[k];
          sameInARow = 1;
        }
        if (sameInARow === 4) {
          return current;
        }
      }
    }
    return null;
  }

  isDiagonalWin() {
    // let columns = this.columns;
    // dimension = 4;
    // for (let i = 0; i < columns.length - dimension; i++) {
    //   for (let k = 0; k < columns.length - dimension; k++) {
    //     let leftDiagonal = [];
    //     for (let m = dimension - 1; m > -1; m--) {

    //     }
    //   }
    // }
  }


  render() {
    return (
      <div className="game-result">
      </div>
    )
  }
}

export default GameLogic;