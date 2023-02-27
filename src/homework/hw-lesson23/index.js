/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */

class Hamburger {
  _ingredients = [];

  static SIZE_BIG = {
    type: 'size',
    name: 'big',
    price: 100,
    calories: 40,
  };
  static SIZE_SMALL = {
    type: 'size',
    name: 'small',
    price: 50,
    calories: 20,
  };
  static STUFFING_CHEESE = {
    type: 'stuffing',
    name: 'cheese',
    price: 10,
    calories: 20,
  };
  static STUFFING_POTATO = {
    type: 'stuffing',
    name: 'potato',
    price: 15,
    calories: 10,
  };
  static STUFFING_SALAT = {
    type: 'stuffing',
    name: 'salat',
    price: 20,
    calories: 5,
  };
  static TOPPING_KETCHUP = {
    type: 'topping',
    name: 'ketchup',
    price: 25,
    calories: 15,
  };
  static TOPPING_MAYO = {
    type: 'topping',
    name: 'mayo',
    price: 20,
    calories: 5,
  };
  static TOPPING_SAUCE = {
    type: 'topping',
    name: 'sauce',
    price: 15,
    calories: 0,
  };

  constructor(size, stuffing) {
    if (![Hamburger.SIZE_BIG, Hamburger.SIZE_SMALL].includes(size)) {
      throw new Error('Invalid hambuger size');
    }

    if (![Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_SALAT]
      .includes(stuffing)) {
      throw new Error('Invalid hambuger staffing');
    }

    this._ingredients.push(...[size, stuffing]);
  }

  addTopping(topping) {
    if (![Hamburger.TOPPING_KETCHUP, Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SAUCE]
      .includes(topping)) {
      throw new Error('Invalid hambuger topping');
    }

    this._ingredients.push(topping);
  }

  deleteTopping(topping) {
    this._ingredients = this._ingredients.filter((ingredient) => {
      // return !(ingredient.type === topping.type && ingredient.name === topping.name);
      return ingredient !== topping;
    });
  }

  calculate() {
    return this._ingredients.reduce((acc, item) => acc + item.calories, 0);
  }

  calculatePrice() {
    return this._ingredients.reduce((acc, item) => acc + item.price, 0);
  }

  #getIngredient(ingredientType) {
    return this._ingredients.find((ingredient) => ingredient.type === ingredientType);
  }

  #getIngredients(ingredientType) {
    return this._ingredients.filter((ingredient) => ingredient.type === ingredientType);
  }

  printCompound() {
    const size = this.#getIngredient('size');
    const stuffing = this.#getIngredient('stuffing');
    const toppings = this.#getIngredients('topping');

    const sizeStr = `size: ${size.name} (calories: ${size.calories}, price: ${size.price})`;
    const stuffingStr = `stuffing: ${stuffing.name} (calories: ${stuffing.calories}, price: ${stuffing.price})`;

    let toppingsStr = '';
    if (toppings.length) {
      const toppingsData = toppings.reduce((acc, currValue) => {
        acc.names.push(currValue.name);
        acc.calories += currValue.calories;
        acc.price += currValue.price;

        return acc;
      }, { names: [], calories: 0, price: 0 });

      toppingsStr = `,\n - toppings: ${toppingsData.names.map((name) => name).join(', ')} (calories: ${toppingsData.calories}, price: ${toppingsData.price})`;
    }

    return `Compounds:\n - ${sizeStr},\n - ${stuffingStr}${toppingsStr}`;
  }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// запитаємо состав бургера
console.log(hamburger.printCompound());
// запитаємо скільки там калорій
console.log(`Calories: ${hamburger.calculate()}`);
// скільки коштує
console.log(`Price: ${hamburger.calculatePrice()}`);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log(hamburger.printCompound());

// запитаємо скільки там калорій
console.log(`Calories with mayo topping: ${hamburger.calculate()}`);

// скільки коштує
console.log(`Price with mayo topping: ${hamburger.calculatePrice()}`);

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log(hamburger.printCompound());

// запитаємо скільки там калорій тепер
console.log(`Calories with mayo and sauce toppings: ${hamburger.calculate()}`);
// А скільки тепер коштує?
console.log(`Price with mayo and sauce toppings: ${hamburger.calculatePrice()}`);

// я тут передумав і вирішив видалити майонез
hamburger.deleteTopping(Hamburger.TOPPING_MAYO);
// console.log(hamburger);
console.log(hamburger.printCompound());

// запитаємо скільки там калорій тепер
console.log(`Calories with only sauce topping: ${hamburger.calculate()}`);
// А скільки тепер коштує?
console.log(`Price with with only sauce topping: ${hamburger.calculatePrice()}`);

// зробимо великий з картоплею і з усіма добавками
const hamburgerBig = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_POTATO);
// запитаємо состав бургера
console.log(hamburgerBig.printCompound());
// запитаємо скільки там калорій
console.log(`Calories: ${hamburgerBig.calculate()}`);
// скільки коштує
console.log(`Price: ${hamburgerBig.calculatePrice()}`);

// добавимо усі добавки
hamburgerBig.addTopping(Hamburger.TOPPING_KETCHUP);
hamburgerBig.addTopping(Hamburger.TOPPING_MAYO);
hamburgerBig.addTopping(Hamburger.TOPPING_SAUCE);

// запитаємо состав бургера
console.log(hamburgerBig.printCompound());
// запитаємо скільки там калорій
console.log(`Calories: ${hamburgerBig.calculate()}`);
// скільки коштує
console.log(`Price: ${hamburgerBig.calculatePrice()}`);
