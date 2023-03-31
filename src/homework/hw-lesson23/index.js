class GameFifteenPazzle {
  fieldClass;

  counterClass;

  buttonClass;

  gameField;

  buttonField;

  fieldSize = {
    size: [3, 4],
  };

  counterField;

  counterShow;

  gameBigFieldStyle = `
    width: 400px;
    height: 400px;
    border: 3px solid grey;
    background: grey;
    position: relative;
  `;

  gameSmallFieldStyle = `
    width: 300px;
    height: 300px;
    border: 3px solid grey;
    background: grey;
    position: relative;
`;

  elementSize = 100;

  elementStyles = `
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border: 1.5px solid grey;    
    background: yellow;
    position: absolute;
    transition: all 0.4s;
  `;

  victoryStyle = `
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border: 1.5px solid grey;
    position: absolute;
    background: green;
  `;

  emptyElement = {};

  allElements = [];

  counterElement = {};

  randomNumbers;

  movesCounter = 0;

  constructor(rootElementSelector, rootCounterElSelector, rootbuttonSelector) {
    this.fieldClass = rootElementSelector;
    this.counterClass = rootCounterElSelector;
    this.buttonClass = rootbuttonSelector;
  }

  createRandomeNumList(num) {
    this.randomNumbers = [...Array(num).keys()]
      .map((value) => value + 1)
      .sort(() => Math.random() - 0.5);

    return this.randomNumbers;
  }

  startGame() {
    const button3 = document.createElement('button');
    button3.innerText = '3 x 3';
    const button4 = document.createElement('button');
    button4.innerText = '4 x 4';
    this.buttonField = document.querySelector(this.buttonClass);
    this.buttonField.appendChild(button3);
    this.buttonField.appendChild(button4);
    const smallField = (this.fieldSize.size[0] * this.fieldSize.size[0] - 1);
    const devideSmall = this.fieldSize.size[0];
    const bigField = (this.fieldSize.size[1] * this.fieldSize.size[1] - 1);
    const devideBig = this.fieldSize.size[1];
    button3.addEventListener('click', () => {
      this.emptyElement.left = devideSmall - 1;
      this.emptyElement.top = devideSmall - 1;
      this.emptyElement.num = devideSmall * devideSmall;
      this.gameBild(devideSmall, this.gameSmallFieldStyle, smallField);
    });
    button4.addEventListener('click', () => {
      this.a = false;
      this.emptyElement.left = devideBig - 1;
      this.emptyElement.top = devideBig - 1;
      this.emptyElement.num = devideBig * devideBig;
      this.gameBild(devideBig, this.gameBigFieldStyle, bigField);
    });
  }

  gameBild(devidePos, fieldStyleChois, num) {
    this.gameField = document.querySelector(this.fieldClass);
    this.gameField.style = fieldStyleChois;
    this.counterField = document.querySelector(this.counterClass);
    this.counterShow = document.createElement('div');
    this.counterField.appendChild(this.counterShow);
    this.randomNumbers = this.createRandomeNumList(num);
    for (let i = 0; i < num; i += 1) {
      this.counterElement = document.createElement('div');
      this.counterElement.innerText = this.randomNumbers[i];
      this.counterElement.style = this.elementStyles;

      const leftPos = i % devidePos;
      const topPos = (i - leftPos) / devidePos;

      this.allElements.push({
        left: leftPos,
        top: topPos,
        num: this.randomNumbers[i],
        isElement: this.counterElement,
      });

      this.counterElement.style.left = `${leftPos * this.elementSize}px`;
      this.counterElement.style.top = `${topPos * this.elementSize}px`;

      this.gameField.appendChild(this.counterElement);

      this.counterElement.addEventListener('click', () => {
        this.moveElement(i, devidePos);
      });
    }
    this.allElements.push(this.emptyElement);
  }

  moveElement(index, bigOrSmallField) {
    const element = this.allElements[index];
    const posLeft = Math.abs(this.emptyElement.left - element.left);
    const posTop = Math.abs(this.emptyElement.top - element.top);
    if (posLeft + posTop > 1) {
      return null;
    }
    element.isElement.style.left = `${this.emptyElement.left * this.elementSize}px`;
    element.isElement.style.top = `${this.emptyElement.top * this.elementSize}px`;
    const newPosEmptyLeft = element.left;
    const newPosEmptyTop = element.top;
    element.left = this.emptyElement.left;
    element.top = this.emptyElement.top;
    this.emptyElement.left = newPosEmptyLeft;
    this.emptyElement.top = newPosEmptyTop;

    this.movesCounter += 1;
    this.counterShow.innerText = `${this.movesCounter} clicks total`;

    if (this.checkingVictory(bigOrSmallField)) {
      for (let i = 0; i < this.allElements.length - 1; i += 1) {
        this.allElements[i].isElement.style.background = 'green';
      }

      return alert(`You win in ${this.movesCounter} clicks total`);
    }

    return (this.movesCounter);
  }

  checkingVictory(bigOrSmallField) {
    return this.allElements.every((e) => e.num === e.top * bigOrSmallField + e.left + 1);
  }
}

const game = new GameFifteenPazzle('.field', '.counter-field', '.buttonPlace');
game.startGame();
