
class Hamburger {
  #price = 0;

  #calories = 0;

  constructor(size, stuffing) {
    this.#price += size.price + stuffing.price;
    this.#calories += size.calories + stuffing.calories;
  }

  static sizeSmall() {
    return {
      price: 50,
      calories: 20,
    };
  }

  static sizeBig() {
    return {
      price: 100,
      calories: 40,
    };
  }

  static stuffingCheese() {
    return {
      price: 10,
      calories: 20,
    };
  }

  static stuffingSalad() {
    return {
      price: 20,
      calories: 5,
    };
  }

  static stuffingFries() {
    return {
      price: 15,
      calories: 10,
    };
  }

  static addMayonnaise() {
    return {
      price: 20,
      calories: 5,
    };
  }

  static addSeasoning() {
    return {
      price: 15,
    };
  }

  addTopping(topping) {
    this.#price += topping.price;
    this.#calories += topping.calories;
  }

  get price() {
    return this.#price;
  }

  get calories() {
    return this.#calories;
  }
}

const hamburger = new Hamburger(Hamburger.sizeBig(), Hamburger.stuffingCheese());
hamburger.addTopping(Hamburger.addMayonnaise());
console.log(`Calories: ${hamburger.calories}`);
console.log(`Price: ${hamburger.price}`);
hamburger.addTopping(Hamburger.addSeasoning());
console.log(`Price with sauce: ${hamburger.price}`);
