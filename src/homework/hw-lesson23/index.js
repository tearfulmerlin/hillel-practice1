class Hamburger {
  static SIZE = {
    small: { price: 50, callories: 20 },
    big: { price: 100, callories: 40 },
  };

  static STUFFING = {
    cheese: { price: 10, callories: 20 },
    salad: { price: 20, callories: 5 },
    fryes: { price: 15, callories: 10 },
  };

  static TOPPING = {
    mayo: { price: 20, callories: 5 },
    seasoning: { price: 15, callories: 0 },
  };

  constructor(SIZE, STUFFING) {
    this.SIZE = SIZE;
    this.STUFFING = STUFFING;
    this.TOPPING = [];
  }

  addTopping(topping) {
    this.TOPPING.push(topping);
  }

  calculate() {
    let sum = 0;
    sum = this.SIZE.callories + this.STUFFING.callories;
    const top = this.TOPPING.reduce((acc, val) => acc + val.callories, 0);

    return sum + top;
  }

  calculatePrice() {
    let sum = 0;
    sum = this.SIZE.price + this.STUFFING.price;
    const top = this.TOPPING.reduce((acc, val) => acc + val.price, 0);

    return sum + top;
  }
}

const hamburger = new Hamburger(Hamburger.SIZE.small, Hamburger.STUFFING.cheese);
console.log(hamburger);
hamburger.addTopping(Hamburger.TOPPING.mayo);
console.log(`Callories: ${hamburger.calculate()}`);
console.log(`Price: ${hamburger.calculatePrice()}`);
hamburger.addTopping(Hamburger.TOPPING.seasoning);
console.log(`Price with seasoning: ${hamburger.calculatePrice()}`);

