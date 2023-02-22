/* eslint-disable */
// function OldAccount(initialBalance) {
//   let _pivate = 'text';

//   this.balance = initialBalance;
// }

// const oldAccount = new OldAccount(1000);

// oldAccount._pivate = 50;

// console.log(oldAccount.balance);

// function OldCreditAccount() {}

// OldCreditAccount.prototype = OldAccount;



class Account {
  static #clients = [];

  static isClient(name) {
    return this.#clients.includes(name);
  }

  static get clients() {
    return this.#clients;
  }

  static issuedCount = 0;

  Balance = 0;

  constructor({ initialBalance, name }) {
    if (Account.#clients.includes(name)) {
      console.log({name})
      throw new Error('is already client');
    }

    Account.#clients.push(name);
    Account.issuedCount++;

    this.Balance = initialBalance;
  }

  get balance() {
    return this.Balance;
  }

  set balance(v) {
    console.log('setter');
    this.Balance += v;
  }
}

// const account = new Account(2000);

// console.log(account);
// console.log(account.accountBalance);
// account.balance = 500;
// console.log(account.balance);

class CreditAccount extends Account {
  #creditLimit;

  // balance = 'credit';

  constructor({ creditLimit, startBalance, name }) {
    super({
      initialBalance: startBalance ?? creditLimit,
      name
    })
    this.#creditLimit = creditLimit;
  }

  get creditLimit() {
    return this.#creditLimit;
  }

  set creditLimit(newLimit) {
    this.#changeCreditLimit(newLimit);
  }

  hasDebt() {
    return (this.balance - this.creditLimit) < 0;
  }

  #changeCreditLimit(newLimit) {
    if (this.hasDebt()) {
      return null;
    }

    this.creditLimit = newLimit;
  }
}

const crediAccount = new CreditAccount({
  name: 'john', startBalance: 5000, creditLimit: 6000
});
const crediAccount2 = new CreditAccount({
  name: 'joe', creditLimit: 5000, startBalance: 6000
});
const account = new Account({
  intialBalance: 5000, name: 'jozy'
});

console.log('balance', crediAccount.balance);
// crediAccount.balance = -5000;
console.log('balance', crediAccount.balance);
// console.log(crediAccount.hasDebt());
// console.log('creditLimit', crediAccount.creditLimit);
// crediAccount.creditLimit = 10000;
// console.log('creditLimit', crediAccount.creditLimit);

class PremiumAccount extends CreditAccount {
  #bonus;

  get balance() {
    console.log('premuim')
    return super.balance;
  }

  constructor({ bonus, name, creditLimit, balance }) {
    super({name, creditLimit, startBalance: balance });

    this.#bonus = bonus;
  }
}

const premiumAccount = new PremiumAccount({
  bonus: 4000, name: 'jack', creditLimit: 50000
})

console.log(premiumAccount instanceof PremiumAccount);
console.log(premiumAccount instanceof CreditAccount);
console.log(premiumAccount instanceof Account);
// console.log(Account.clients);
// console.log(Account.issuedCount);

// public
// ptivat
// static

class Player {
  lives = 3;

  positionX = 0;
  positionY = 0;

  move(direction) {
    this.positionX += 5;
  }

  jump() {
    this.positionY += 10; 
  }
}


class Enemy {
  positionX = 0;
  positionY = 0;

  destroy() {
    // remove from DOM
  }
}


class Boss extends Enemy {}