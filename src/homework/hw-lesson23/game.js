// Попробовал )
const size = 4;
let values;
let emptyX, emptyY;
const left = {dx: -1, dy: 0};
const right = {dx: 1, dy: 0};
const up = {dx: 0, dy: -1};
const down = {dx: 0, dy: 1};
const fieldCells = createField();

function createField() {
  const cells = [];
  const table = document.getElementById('field');
  for (let y = 0; y < size; y++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    const rowCells = [];
    cells.push(rowCells);
    for (let x = 0; x < size; x++) {
      const td = document.createElement('td');
      td.setAttribute('class', 'cell');
      tr.appendChild(td);
      rowCells.push(td);
    }
  }
  return cells;
}

function createInitialValues() {
  emptyX = emptyY = size - 1;
  const v = [];
  let i = 1;
  for (let y = 0; y < size; y++) {
    const rowValues = [];
    v.push(rowValues);
    for (let x = 0; x < size; x++) {
      rowValues.push(i);
      i++
    }
  }
  v[emptyY][emptyX] = 0;
  return v;
}

function draw() {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const v = values[y][x];
      const td = fieldCells[y][x];
      td.innerHTML = v == 0 ? '': String(v);
    }
  }
}

function makeMove(move) {
  const newX = emptyX + move.dx, newY = emptyY + move.dy;
  if ((newX >= size) || (newX < 0) ||
    (newY >= size) || (newY < 0)
  ) {
    return false;
  }
  const c = values[newY][newX];
  values[newY][newX] = 0;
  values[emptyY][emptyX] = c;
  emptyX = newX;
  emptyY = newY;
  return true;
}

function shuffle() {
  const options = [left, right, up, down];
  const iterations = 5;
  for (let i = 0; i < iterations; i++) {
    const move = options[Math.floor(Math.random() * options.length)];
    makeMove(move);
  }
}

function gameOver() {
  let expectedValue = 1;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (values[y][x] == expectedValue) {
        expectedValue++;
      } else {
        if (x == size - 1 && y == size - 1 && values[y][x] == 0) {
          return true;
        }
        return false;
      }
    }
  }
  return true;
}

document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
    case 38: makeMove(up); break;
    case 40: makeMove(down); break;
    case 37: makeMove(left); break;
    case 39: makeMove(right); break;
  }
  draw();
  if (gameOver()) {
    setTimeout(function() {
      alert('Game over, you won!');
      init();
    }, 1000);
  }
});

function init() {
  values = createInitialValues();
  shuffle();
  draw();
}

init();
