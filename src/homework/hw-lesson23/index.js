/* eslint-disable no-plusplus */

// Define the game class
class FifteenPuzzle {
  constructor(size) {
    this.size = size;
    this.board = [];
    this.emptyRow = null;
    this.emptyCol = null;
    this.isWon = false;
  }

  // Initialize the board with random numbers
  initBoard() {
    const numbers = Array.from({ length: this.size * this.size - 1 }, (_, i) => i + 1);
    numbers.push(null); // add the empty cell
    for (let i = 0; i < this.size; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.size; j++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const number = numbers.splice(randomIndex, 1)[0];
        this.board[i][j] = number;
        if (number === null) {
          this.emptyRow = i;
          this.emptyCol = j;
        }
      }
    }
  }

  // Render the board on the screen
  render() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        const number = this.board[i][j];
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        if (number === null) {
          cellElement.classList.add('empty');
        } else {
          cellElement.textContent = number;
        }
        cellElement.addEventListener('click', () => this.handleClick(i, j));
        boardElement.appendChild(cellElement);
      }
    }
  }

  // Handle click event on a cell
  handleClick(row, col) {
    if (this.isWon) {
      return;
    }
    if (this.isValidMove(row, col)) {
      this.move(row, col);
      this.render();
      if (this.checkWin()) {
        this.isWon = true;
        document.getElementById('board').classList.add('win');
        alert('Congratulations, you won!');
      }
    }
  }

  // Check if the move is valid
  isValidMove(row, col) {
    const rowDiff = Math.abs(row - this.emptyRow);
    const colDiff = Math.abs(col - this.emptyCol);

    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
  }

  // Move the number to the empty cell
  move(row, col) {
    const number = this.board[row][col];
    this.board[row][col] = null;
    this.board[this.emptyRow][this.emptyCol] = number;
    this.emptyRow = row;
    this.emptyCol = col;
  }

  // Check if the game is won
  checkWin() {
    let currentNumber = 1;
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (i === this.size - 1 && j === this.size - 1) {
          return true;
        }
        if (this.board[i][j] !== currentNumber) {
          return false;
        }
        currentNumber++;
      }
    }

    return true;
  }

  // Restart the game
  restart() {
    this.initBoard();
    this.render();
    this.isWon = false;
    document.getElementById('board').classList.remove('win');
  }
}

// Create a new game instance with size 4
const game = new FifteenPuzzle(4);

// Initialize the board and render it
game.initBoard();
game.render();

// Handle restart button click event
const restartButton = document.getElementById('restart');
restartButton.addEventListener('click', () => game.restart());
