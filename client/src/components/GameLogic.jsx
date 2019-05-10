import _ from 'underscore';

class GameLogic {
  constructor(columns) {
    this.columns = columns;
  }

  isVerticalWin() {
    let array = this.columns;
    for (let i = 0; i < array.length; i++) {
      let subArray = array[i];
      let current = subArray[0];
      let sameInACol = 1;
      for (let k = 1; k < subArray.length; k++) {
        if (current === subArray[k]) {
          sameInACol++;
        } else {
          current = subArray[k];
          sameInACol = 1;
        }
        if (sameInACol === 4) {
          return true;
        }
      }
    }
    return false;
  }

  isHorizontalWin() {
    let cols = this.columns;
    for (let i = 0; i < cols[0].length; i++) {
      let current = cols[0][i];
      let sameInARow = 1;
      for (let k = 1; k < cols.length; k++) {
        if (cols[k][i] !== undefined) {
          if (current === cols[k][i]) {
            sameInARow++;
          } else {
            current = cols[k][i];
            sameInARow = 1;
          }
          if (sameInARow === 4) {
            return true;
          }
        }
      }
    }
    return false;
  }


  isDiagonalWin() {
    let columns = this.columns;
    let dimension = 4;
    for (let r = 0; r < columns.length - dimension; r++) {
      for (let c = 0; c < columns.length - dimension; c++) {
        let left = _.filter(_.map(_.range(dimension - 1, -1, -1), k => columns[r + k][c + dimension - k]), x => x === 'Red' || x === 'Blue');
        let right = _.filter(_.map(_.range(dimension), k => columns[r + k][c + k]), x => x === 'Red' || x === 'Blue');
        if (left.length !== 0) {
          if (left.length === 4 && _.uniq(left).length === 1) {
            return true;
          }
        }
        if (right.length !== 0) {
          if (right.length === 4 && _.uniq(right).length === 1) {
            return true;
          }
        }
      }
    }
    return false;
  }

  isDraw() {
    return this.columns.every(col => col.every(value => !value));
  }
}

export default GameLogic;