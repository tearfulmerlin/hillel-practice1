class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];
  }

  addTopping(obj) {
    this.topping.push(obj);
  }

  calculate(val = 'calories') {
    let sum = this.size[val] + this.stuffing[val];
    sum += this.topping.reduce((acc, el) => acc + el[val], 0);

    return sum;
  }

  calculatePrice() {
    return this.calculate('price');
  }

  static SIZE_SMALL = {
    price: 50,
    calories: 20,
  };

  static SIZE_LARGE = {
    price: 100,
    calories: 40,
  };

  static STUFFING_CHEESE = {
    price: 10,
    calories: 20,
  };

  static STUFFING_SALAT = {
    price: 20,
    calories: 5,
  };

  static STUFFING_POTATO = {
    price: 15,
    calories: 10,
  };

  static TOPPING_SAUCE = {
    price: 15,
    calories: 0,
  };

  static TOPPING_MAYO = {
    price: 20,
    calories: 5,
  };
}
