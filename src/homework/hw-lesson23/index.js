/* eslint-disable no-restricted-syntax */
const button = document.getElementById('generate');
const size = document.getElementsByName('size');
const stuff = document.getElementsByName('stuff');
const supp = document.getElementsByName('supp');

class Hamburger {
  #size;

  #stuff;

  #supp;

  static small = {
    name: 'small', price: 50, calories: 20, type: 'size',
  };

  static big = {
    name: 'big', price: 100, calories: 40, type: 'size',
  };

  static cheeze = {
    name: 'cheeze', price: 10, calories: 20, type: 'stuff',
  };

  static salad = {
    name: 'salad', price: 20, calories: 5, type: 'stuff',
  };

  static potato = {
    name: 'potato', price: 15, calories: 10, type: 'stuff',
  };

  static dressing = {
    name: 'dressing', price: 15, calories: 0, type: 'supp',
  };

  static mayo = {
    name: 'mayo', price: 20, calories: 5, type: 'supp',
  };

  constructor(sizes, stuffs, supps) {
    this.#size = sizes;
    this.#stuff = stuffs;
    this.#supp = supps;
  }

  get calories() {
    return this.#size.calories + this.#stuff.calories + this.#supp.calories;
  }

  get price() {
    return this.#size.price + this.#stuff.price + this.#supp.price;
  }


  bill() {
    console.log(`${this.#size.name} hamburger with ${this.#stuff.name} toping and with ${this.#supp.name}, it is.`);
    console.log(`it will cost you ${this.price} tögrögs. AND it will be ${this.calories} calories!`);
  }
}

// const ham = new Hamburger(Hamburger.big, Hamburger.salad);
// ham.bill();
// ham.change_additivie = Hamburger.mayo;
// ham.bill();

let ham = new Hamburger();

function chooseSize(whatStuff, whatSupp) {
  for (const i of size) {
    if (i.checked) {
      switch (i.value) {
        case ('big'):
          ham = new Hamburger(Hamburger.big, whatStuff, whatSupp);
          ham.bill();
          break;
        case ('small'):
          ham = new Hamburger(Hamburger.small, whatStuff, whatSupp);
          ham.bill();
          break;
        default:
          console.log('oh no! something`s wrong!');
      }
    }
  }
}

function chooseStuff(whatSupp) {
  for (const j of stuff) {
    if (j.checked) {
      switch (j.value) {
        case ('cheeze'):
          chooseSize(Hamburger.cheeze, whatSupp);
          break;
        case ('salad'):
          chooseSize(Hamburger.salad, whatSupp);
          break;
        case ('potato'):
          chooseSize(Hamburger.potato, whatSupp);
          break;
        default:
          console.log('oh no! something`s wrong!');
      }
    }
  }
}

function chooseSupp() {
  for (const u of supp) {
    if (u.checked) {
      switch (u.value) {
        case ('dressing'):
          chooseStuff(Hamburger.dressing);
          break;
        case ('mayo'):
          chooseStuff(Hamburger.mayo);
          break;
        default:
          console.log('oh no! something`s wrong!');
      }
    }
  }
}

button.addEventListener('click', chooseSupp);
