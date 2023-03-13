class Hamburgers {
  #size;

  #toping;

  #additive;

  static SIZE = {
    BIG: {
      title: 'Big',
      price: 100,
      calories: 40,
      category: 'size',
    },
    SMALL: {
      title: 'Small',
      price: 50,
      calories: 20,
      category: 'size',
    },
  };

  static TOPING = {
    CHEESE: {
      title: 'Cheese',
      price: 10,
      calories: 20,
      category: 'toping',
    },
    SALAD: {
      title: 'Salad',
      price: 20,
      calories: 5,
      category: 'toping',
    },
    POTATO: {
      title: 'Potato',
      price: 15,
      calories: 10,
      category: 'toping',
    },
  };

  static ADDITIVES = {
    SPICES: {
      title: 'Spices',
      price: 15,
      calories: 0,
      category: 'additive',
    },
    MAYO: {
      title: 'Mayo',
      price: 20,
      calories: 0,
      category: 'additive',
    },
  };

  constructor(size, toping) {
    this.#size = size;
    this.#toping = toping;
  }

  get calories() {
    return this.#size.calories + this.#toping.calories;
  }

  get price() {
    return (
      this.#size.price +
      this.#toping.price +
      (this.#additive === undefined ? 0 : this.#additive.price)
    );
  }

  set change_toping(toping) {
    if (toping.category === 'toping') {
      this.#toping = toping;
    } else {
      console.log('Incorrect ;)');
    }
  }

  set change_size(size) {
    if (size.category === 'size') {
      this.#size = size;
    } else {
      console.log('Incorrect ;)');
    }
  }

  set change_additivie(additive) {
    if (additive.category === 'additive') {
      this.#additive = additive;
    } else {
      console.log('Incorrect ;)');
    }
  }

  remove_additive() {
    if (this.#additive !== undefined) {
      this.#additive = undefined;
    }
  }

  get_bill() {
    console.log(
      `You bought ${this.#size.title} hamburger with ${
        this.#toping.title
      } toping!`,
    );
    if (this.additive) {
      console.log(`Additive: ${this.#additive.title}`);
    }
    console.log(`It costs ${this.price} tubricks. Calories per serving ${this.calories}\n\n\n`);
  }
}

const ham = new Hamburgers(Hamburgers.SIZE.BIG, Hamburgers.TOPING.SALAD);
ham.get_bill();
ham.change_additivie = Hamburgers.ADDITIVES.MAYO;
ham.get_bill();
