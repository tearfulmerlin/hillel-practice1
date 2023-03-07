/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */

function shuffle(arr) {
  for (let currentIndex = arr.length; currentIndex > 0;) {
    const randomIndex = Math.floor(Math.random() * currentIndex--);
    [
      arr[randomIndex].value,
      arr[currentIndex].value,
    ] = [arr[currentIndex].value, arr[randomIndex].value];
  }

  return arr;
}

class Puzzle {
  _data = [];
  _successResult = '12345678 ';

  constructor() {
    let initialValue = 1;
    const data = [];

    for (let i = 1; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
        data.push({ i, j, value: `${initialValue++}` });
      }
    }

    this._data = shuffle(data);
    this._emptySquare = this._data.find((item) => item.value === '9');
    this._emptySquare.value = ' ';
  }

  printHtml() {
    const body = document.body;
    const divSection = document.createElement('div');
    divSection.classList.add('field');
    body.innerHTML = '';
    body.append(divSection);

    for (let i = 0; i < this._data.length; i++) {
      const value = this._data[i].value;

      const square = document.createElement('div');
      divSection.append(square);

      square.textContent = value;

      if (value === ' ') {
        this._emptyDiv = square;
        square.classList.add(...['square', 'empty']);
      } else {
        square.classList.add('square');
        square.onclick = (e) => {
          this.move(e.target.textContent);
          this.printHtml();
          this.isWin();
        };
      }
    }
  }

  isWin() {
    const result = this._data.map(({ value }) => value).join('');

    if (this._successResult === result) {
      const h1 = document.createElement('h1');
      h1.textContent = 'Congratulations, you won!!!';
      h1.style.color = 'red';
      document.body.prepend(h1);

      const squares = document.querySelectorAll('.square');

      for (const child of squares) {
        child.className = 'square win';
        child.onclick = null;
      }
    }
  }

  move(targetValue) {
    const curSquare = this._data.find((data) => data.value === targetValue);

    if ((curSquare.i === this._emptySquare.i
      && (curSquare.j - this._emptySquare.j === 1 || this._emptySquare.j - curSquare.j === 1))
      || (curSquare.j === this._emptySquare.j
        && (curSquare.i - this._emptySquare.i === 1 || this._emptySquare.i - curSquare.i === 1))
    ) {
      [curSquare.value, this._emptySquare.value] = [this._emptySquare.value, curSquare.value];
      this._emptySquare = curSquare;
    }
  }
}

const puzzle = new Puzzle();
puzzle.printHtml();
