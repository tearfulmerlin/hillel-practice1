
class Hamburger {
  #price = 0;

  #calories = 0;

  #size = '';

  #stuffing = '';

  #topping = '';

  constructor(size, stuffing) {
    this.#price = size.price + stuffing.price;
    this.#calories = size.calories + stuffing.calories;
    this.#size = size.size;
    this.#stuffing = stuffing.stuffing;
  }

  static sizeSmall = {
    price: 50,
    calories: 20,
    size: 'small',
  };

  static sizeBig = {
    price: 100,
    calories: 40,
    size: 'big',
  };

  static stuffingCheese = {
    price: 10,
    calories: 20,
    stuffing: 'cheese',
  };

  static stuffingSalad = {
    price: 20,
    calories: 5,
    stuffing: 'salad',
  };

  static stuffingFries = {
    price: 15,
    calories: 10,
    stuffing: 'fries',
  };

  static toppingMayonnaise = {
    price: 20,
    calories: 5,
    topping: 'mayonnaise',
  };

  static toppingSeasoning = {
    price: 15,
    calories: 0,
    topping: 'seasoning',
  };

  addTopping(topping) {
    this.#price += topping.price;
    this.#calories += topping.calories;
    this.#topping = topping.topping;
  }

  calculatePrice() {
    return this.#price;
  }

  calculate() {
    return this.#calories;
  }

  result() {
    return `Size of hamburger: ${this.#size}
Stuffing: ${this.#stuffing}
Topping: ${this.#topping || 'nothing'}
Price: ${this.calculatePrice()}
Calories: ${this.calculate()}`;
  }
}

const hamburger = new Hamburger(Hamburger.sizeBig, Hamburger.stuffingCheese);
hamburger.addTopping(Hamburger.toppingMayonnaise);
console.log(`Calories: ${hamburger.calculate()}`);
console.log(`Price: ${hamburger.calculatePrice()}`);
hamburger.addTopping(Hamburger.toppingSeasoning);
console.log(`Price with sauce: ${hamburger.calculatePrice()}`);

console.log(hamburger.result());
