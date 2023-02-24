'use strict';

const tiles = document.querySelectorAll('.tile');

function getEmptyTileIndex() {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains('empty')) {
      return i;
    }
  }
}

function checkWin() {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].innerHTML != i + 1) {
      return false;
    }
  }
  return true;
}

function moveTile(index) {
  const emptyIndex = getEmptyTileIndex();
  if (
    (index === emptyIndex - 1 && index % 3 !== 2) ||
    (index === emptyIndex + 1 && index % 3 !== 0) ||
    index === emptyIndex - 3 ||
    index === emptyIndex + 3
  ) {
    tiles[emptyIndex].innerHTML = tiles[index].innerHTML;
    tiles[emptyIndex].classList.remove('empty');
    tiles[index].innerHTML = '';
    tiles[index].classList.add('empty');

    let isSorted = true;
    for (let i = 0; i < tiles.length - 1; i++) {
      if (tiles[i].innerHTML !== `${i + 1}`) {
        isSorted = false;
        break;
      }
    }

    if (isSorted) {
      tiles.forEach((tile) => {
        tile.style.backgroundColor = 'green';
      });
    }
    if (checkWin()) {
      alert("Вітаємо, ви перемогли!");
    }
  }
}

function shuffleTiles() {
  const arr = Array.from({length: tiles.length}, (_, i) => i);
  arr.splice(getEmptyTileIndex(), 1);
  for (let i = 0; i < tiles.length - 1; i++) {
    const j = Math.floor(Math.random() * (tiles.length - i - 1));
    const temp = arr[j];
    arr[j] = arr[tiles.length - i - 2];
    arr[tiles.length - i - 2] = temp;
  }
  arr.splice(Math.floor(Math.random() * arr.length), 0, tiles.length - 1);

  function isSolvable(arr) {
    let inversions = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j] && arr[j] !== tiles.length - 1) {
          inversions++;
        }
      }
    }
    return inversions % 2 === 0;
  }

  function getEmptyTileIndex() {
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].classList.contains('empty')) {
        return i;
      }
    }
    console.error('No empty tile found.');
  }

  if (isSolvable(arr)) {
    for (let i = 0; i < tiles.length; i++) {
      if (arr[i] === tiles.length - 1) {
        tiles[i].classList.add('empty');
      } else {
        tiles[i].classList.remove('empty');
      }
      tiles[i].innerHTML = arr[i] + 1;
    }
  } else {
    shuffleTiles();
  }
}

shuffleTiles();

for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener('click', function () {
    moveTile(i);
  });
}
