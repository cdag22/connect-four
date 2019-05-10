class GameLogic {
  constructor(columns) {
    this.rows = convertColumnsToRows(columns)
    this.columns = columns;
  }

  convertColumnsToRows(columns) {
    let rows = [];
    for (let i = 0; i < columns.length; i++) {
      let row = [];
      for (let k = 0; k < columns[i].length; k++) {
        row.push(columns[k][i]);
      }
      rows.push(row);
    }
    return rows;
  }

  isVerticalOrHorizontalWin(arr) {
    let array = arr;
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
          return true;
        }
      }
    }
    return false;
  }

  isHorizontalWin() {
    console.log('rows', this.rows);
    return this.isVerticalOrHorizontalWin(this.rows);
  }

  isVerticalWin() {
    console.log('cols', this.columns);
    return this.isVerticalOrHorizontalWin(this.columns);
  }

  isDiagonalWin() {
    let columns = this.columns;
    let dimension = 4;
    let isDiagonalWin;
    let current;
    for (let r = 0; r < columns.length - dimension; r++) {
      for (let c = 0; c < columns.length - dimension; c++) {
        // isDiagonalWin = true;
        // current = columns[r + c][r - 1]
        // for (let k = dimension - 2; k > -1; k--) {
        //   if (current !== columns[r + c][r - dimension + k]) {
        //     isDiagonalWin = false;
        //     break;
        //   }
        // }
        // if (isDiagonalWin) {
        //   return true;
        // }
        // isDiagonalWin = true;
        // current = columns[r][c];
        // for (let k = 1; k < dimension; k++) {
        //   if (current !== columns[r + k][c + k]) {
        //     isDiagonalWin = false;
        //     break;
        //   }
        // }
        // if (isDiagonalWin) {
        //   return true;
        // }
      }
    }
    return false;
  }

  isDraw() {
    return this.columns.every(col => col.every(value => !!value));
  }
}

export default GameLogic;