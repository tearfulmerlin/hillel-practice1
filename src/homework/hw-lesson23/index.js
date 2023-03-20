class Hamburger {
  #price = 0;

  #calories = 0;

  constructor(size, stuffing) {
    this.#price += size.price + stuffing.price;
    this.#calories += size.calories + stuffing.calories;
  }

  static SIZE_SMALL = {
    price: 50,
    calories: 40,
  };

  static SIZE_LARGE = {
    price: 100,
    calories: 80,
  };

  static STAFFING_CHEESE = {
    price: 10,
    calories: 20,
  };

  static STAFFING_SALAT = {
    price: 20,
    calories: 5,
  };

  static STAFFING_POTATO = {
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

  addTopping(topping) {
    this.#calories += topping.calories;
    this.#price += topping.price;
  }

  get calculate() {
    return this.#calories;
  }

  get calculatePrice() {
    return this.#price;
  }
}
// Маленький гамбургер з нчинкою з сиром
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STAFFING_CHEESE);

// добавляєм майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// калорії
console.log(`Calories: ${hamburger.calculate}`);

// ціна
console.log(`Price ${hamburger.calculatePrice}`);

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// скільки коштує тепер
console.log(`Price with sauce: ${hamburger.calculatePrice}`);
