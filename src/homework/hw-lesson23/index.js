/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
class Hamburger {
  #ingredients = [];

  static SIZE = {
    big: {
      type: 'size',
      name: 'big',
      price: 100,
      calories: 40,
    },
    small: {
      type: 'size',
      name: 'small',
      price: 50,
      calories: 20,
    },
  };

  static STUFFING = {
    cheese: {
      type: 'stuffing',
      name: 'cheese',
      price: 10,
      calories: 20,
    },
    potato: {
      type: 'stuffing',
      name: 'potato',
      price: 15,
      calories: 10,
    },
    salat: {
      type: 'stuffing',
      name: 'salat',
      price: 20,
      calories: 5,
    },
  };

  static TOPPING = {
    ketchup: {
      type: 'topping',
      name: 'ketchup',
      price: 25,
      calories: 15,
    },
    mayo: {
      type: 'topping',
      name: 'mayo',
      price: 20,
      calories: 5,
    },
    sauce: {
      type: 'topping',
      name: 'sauce',
      price: 15,
      calories: 0,
    },
  };

  constructor(size, stuffing) {
    if (![Hamburger.SIZE.big, Hamburger.SIZE.small].includes(size)) {
      throw new Error('Invalid hambuger size');
    }

    if (![Hamburger.STUFFING.cheese, Hamburger.STUFFING.potato, Hamburger.STUFFING.salat]
      .includes(stuffing)) {
      throw new Error('Invalid hambuger staffing');
    }

    this.#ingredients.push(size, stuffing);
  }

  addTopping(topping) {
    if (![Hamburger.TOPPING.ketchup, Hamburger.TOPPING.mayo, Hamburger.TOPPING.sauce]
      .includes(topping)) {
      throw new Error('Invalid hambuger topping');
    }

    this.#ingredients.push(topping);
  }

  deleteTopping(topping) {
    this.#ingredients = this.#ingredients.filter((ingredient) => {
      // return !(ingredient.type === topping.type && ingredient.name === topping.name);
      return ingredient !== topping;
    });
  }

  calculate() {
    return this.#ingredients.reduce((acc, item) => acc + item.calories, 0);
  }

  calculatePrice() {
    return this.#ingredients.reduce((acc, item) => acc + item.price, 0);
  }

  #getIngredient(ingredientType) {
    return this.#ingredients.find((ingredient) => ingredient.type === ingredientType);
  }

  #getIngredients(ingredientType) {
    return this.#ingredients.filter((ingredient) => ingredient.type === ingredientType);
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

const hamburger = new Hamburger(Hamburger.SIZE.small, Hamburger.STUFFING.cheese);
// запитаємо состав бургера
console.log(hamburger.printCompound());
// запитаємо скільки там калорій
console.log(`Calories: ${hamburger.calculate()}`);
// скільки коштує
console.log(`Price: ${hamburger.calculatePrice()}`);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING.mayo);
console.log(hamburger.printCompound());

// запитаємо скільки там калорій
console.log(`Calories with mayo topping: ${hamburger.calculate()}`);

// скільки коштує
console.log(`Price with mayo topping: ${hamburger.calculatePrice()}`);

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING.sauce);
console.log(hamburger.printCompound());

// запитаємо скільки там калорій тепер
console.log(`Calories with mayo and sauce toppings: ${hamburger.calculate()}`);
// А скільки тепер коштує?
console.log(`Price with mayo and sauce toppings: ${hamburger.calculatePrice()}`);

// я тут передумав і вирішив видалити майонез
hamburger.deleteTopping(Hamburger.TOPPING.mayo);
// console.log(hamburger);
console.log(hamburger.printCompound());

// запитаємо скільки там калорій тепер
console.log(`Calories with only sauce topping: ${hamburger.calculate()}`);
// А скільки тепер коштує?
console.log(`Price with with only sauce topping: ${hamburger.calculatePrice()}`);

// зробимо великий з картоплею і з усіма добавками
const hamburgerBig = new Hamburger(Hamburger.SIZE.big, Hamburger.STUFFING.potato);
// запитаємо состав бургера
console.log(hamburgerBig.printCompound());
// запитаємо скільки там калорій
console.log(`Calories: ${hamburgerBig.calculate()}`);
// скільки коштує
console.log(`Price: ${hamburgerBig.calculatePrice()}`);

// добавимо усі добавки
hamburgerBig.addTopping(Hamburger.TOPPING.ketchup);
hamburgerBig.addTopping(Hamburger.TOPPING.mayo);
hamburgerBig.addTopping(Hamburger.TOPPING.sauce);

// запитаємо состав бургера
console.log(hamburgerBig.printCompound());
// запитаємо скільки там калорій
console.log(`Calories: ${hamburgerBig.calculate()}`);
// скільки коштує
console.log(`Price: ${hamburgerBig.calculatePrice()}`);
