const plateColor = '#444444';
const plateWinColor = 'green';

class Game {
  // gamesize - amnt is length of one side of square
  // gamefield - selector of element where game should be
  constructor(gameSize, gameField, plateSize = 50) {
    this.gameSize = gameSize;
    this.gameField = gameField;
    this.plateSize = plateSize;
    this.arrayField = [];
    this.emptyPosI = 0;
    this.emptyPosJ = 0;
    this.inititalizeArrayField();
    this.renderComponents();
  }

  inititalizeArrayField() {
    const tempArray = [];
    const maxNum = this.gameSize * this.gameSize;

    // fill tempArray with all possible values
    for (let i = 1; i <= this.gameSize * this.gameSize; i++) tempArray.push(i);

    // randomly generate two-dimension array
    for (let i = 0; i < this.gameSize; i++) {
      const temp = [];
      for (let j = 0; j < this.gameSize; j++) {
        const randIndex = Math.floor(Math.random() * (tempArray.length - 0)) + 0;
        const element = tempArray.at(randIndex);
        tempArray.splice(randIndex, 1);
        temp.push(element === maxNum ? 0 : element);
      }
      this.arrayField.push(temp);
    }
  }

  renderComponents() {
    const field = document.querySelector(`.${this.gameField}`);
    field.innerHTML = '';
    field.style.width = field.style.height = `${this.plateSize * this.gameSize + this.gameSize - 1}px`;
    // creating elements
    let top = 0;
    for (let i = 0; i < this.gameSize; i++) {
      let left = 0;
      for (let j = 0; j < this.gameSize; j++) {
        if (this.arrayField[i][j] !== 0) {
          const element = document.createElement('div');
          element.style.width = element.style.height = `${this.plateSize}px`;
          element.style.left = `${left}px`;
          element.style.top = `${top}px`;
          element.innerText = this.arrayField[i][j];
          element.setAttribute('data-i', i);
          element.setAttribute('data-j', j);
          field.insertAdjacentElement('beforeend', element);
        } else {
          this.emptyPosJ = j;
          this.emptyPosI = i;
        }
        left += this.plateSize;
      }
      top += this.plateSize;
    }
  }

  get getEmptyPos() {
    return {
      i: this.emptyPosI,
      j: this.emptyPosJ,
    };
  }

  checkArray() {
    const temp = [];
    for (let i = 0; i < this.gameSize; i++) {
      for (let j = 0; j < this.gameSize; j++) {
        temp.push(this.arrayField[i][j]);
      }
    }


    let isWin = true;
    for (let i = 0; i < temp.length - 2; i++) {
      if (temp[i + 1] - temp[i] !== 1 || temp.at(-1) !== 0) {
        isWin = false;
      }
    }

    setTimeout(() => {
      document.querySelectorAll(`.${this.gameField} *`).forEach((el) => {
        document.documentElement.style.setProperty('--plate-color', `${isWin ? plateWinColor : plateColor}`);
      });
    }, 300);
  }

  set changePositionInArray({
    i,
    j,
  }) {
    const empty = this.getEmptyPos;
    this.arrayField[empty.i][empty.j] = this.arrayField[i][j];
    this.arrayField[i][j] = 0;
    this.emptyPosI = i;
    this.emptyPosJ = j;
  }

  moveX(i, j, direction) { // direction - if 1, move right, else move left
    const el = document.querySelector(`[data-i="${i}"][data-j="${j}"]`);
    const currLeft = el.style.left.replace(/[^\d]/g, '');
    const position = +(direction * this.plateSize) + +currLeft;
    const emptyJ = game.getEmptyPos.j;
    el.setAttribute('data-j', emptyJ);
    el.style.left = `${position}px`;

    this.changePositionInArray = {
      i,
      j,
    };
    this.checkArray();
  }

  moveY(i, j, direction) { // direction - if 1, move down, else move up
    const el = document.querySelector(`[data-i="${i}"][data-j="${j}"]`);
    const currTop = el.style.top.replace(/[^\d]/g, '');
    const position = +currTop + +(-1 * direction * this.plateSize);
    const emptyI = game.getEmptyPos.i;
    el.setAttribute('data-i', emptyI);
    el.style.top = `${position}px`;

    this.changePositionInArray = {
      i,
      j,
    };
    this.checkArray();
  }
}

const gameFieldName = 'game-field';
const gameSize = 3;
const plateSize = 100;
const game = new Game(gameSize, gameFieldName, plateSize);
document.querySelectorAll(`.${gameFieldName} *`).forEach((el) => {
  el.addEventListener('click', click);
});

function click() {
  const plate = {
    i: +this.getAttribute('data-i'),
    j: +this.getAttribute('data-j'),
  };
  const empty = game.getEmptyPos;

  const dI = plate.i - empty.i;
  const dJ = empty.j - plate.j;
  if (dI <= 1 && dI >= -1 && dJ === 0) {
    game.moveY(plate.i, plate.j, dI);
  }

  if (dJ <= 1 && dJ >= -1 && dI === 0) {
    game.moveX(plate.i, plate.j, dJ);
  }
}
