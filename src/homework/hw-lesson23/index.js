class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  static SIZE_SMALL = {price: 50, calories: 20};
  static SIZE_LARGE = {price: 100, calories: 40};
  static STUFFING_CHEESE = {price: 10, calories: 20};
  static STUFFING_SALAD = {price: 20, calories: 5};
  static STUFFING_POTATO = {price: 15, calories: 10};
  static TOPPING_MAYO = {price: 20, calories: 5};
  static TOPPING_SPICE = {price: 15, calories: 0};

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    const price = this.size.price + this.stuffing.price;
    const toppingsPrice = this.toppings.reduce((total, topping) => {
      return total + topping.price;
    }, 0);
    return price + toppingsPrice;
  }

  calculateCalories() {
    const calories = this.size.calories + this.stuffing.calories;
    const toppingsCalories = this.toppings.reduce((total, topping) => {
      return total + topping.calories;
    }, 0);
    return calories + toppingsCalories;
  }
}

// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());
