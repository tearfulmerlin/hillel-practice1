/** Incapsulation */
// Holding data and methods together
// Hiding private props
// const account = {
//   balance: 1000,
//   increase(v) {
//       this.balance += v;
//   },

//   decrease(v) {
//       this.balance -= v;
//   },
// };

/** Inheritance = Prototype */
function Account(intialBalance, type = 'credit') {
  let _bankInfo = 'mono'; // privat variable

  this.showBankInfo = function() {
    return _bankInfo;
  };

  this.setBankInfo = function(newInfo) {
    _bankInfo = newInfo;
  };

  this.balance = intialBalance;
  this.type = type;

  this.increase = function(v) {
    this.balance += v;
  };

  this.decrease = function(v) {
    this.balance -= v;
  };

  // this.decrease = function(v) {
  //   if (type === 'credit') {
  //     this.balance -= (v * 1.03);
  //   } else {
  //     this.balance -= v;
  //   }
  // };
}




function PremiumAccount(intialBalance, intialBonus) {
  // const PA = {};

  // PA.balance = intialBalance;
  // PA.bonus = intialBonus;

  // return PA;

  this.balance = intialBalance;
  this.bonus = intialBonus;
}

PremiumAccount.prototype = new Account();
// console.log({PremiumAccount});


function CreditAccount() {
  this.decrease = function(v) {
    this.balance -= (v * 1.06); // this.balance -= (v + v * 0.03);
  };

  this.isCredit = true;
}

CreditAccount.prototype = new Account(2000);

function PlatinumAccount(intialBonus) {
  this.balance = this.balance * 10;
  this.bonus = intialBonus * 2;

  // this.decrease = function(v) {
  //   this.balance -= v;
  // };

  // this.decrease = Object.getPrototypeOf(Object.getPrototypeOf(this)).decrease;
  this.decrease = this.__proto__.__proto__.decrease;
}

PlatinumAccount.prototype = new CreditAccount();


// const creditAccount = new CreditAccount();
// const platinumAccount = new PlatinumAccount();
// const platinumAccount2 = new PlatinumAccount();

// // console.log(creditAccount.balance);
// platinumAccount.decrease(10000);
// console.log(platinumAccount.balance);


// console.log(platinumAccount.isCredit);
// console.log(Object.getPrototypeOf(platinumAccount));

// console.log(platinumAccount instanceof CreditAccount);
// console.log(platinumAccount2 instanceof CreditAccount);
// platinumAccount.__proto__ = new PremiumAccount(10000);
// console.log(Object.getPrototypeOf(platinumAccount));

// console.log(platinumAccount instanceof CreditAccount);
// console.log(platinumAccount2 instanceof CreditAccount);
// console.log(platinumAccount.isCredit);




// const creditAccount2 = new CreditAccount();

// creditAccount.decrease(1000);
// creditAccount2.decrease(1000);
// creditAccount.increase(1000);

// console.log(creditAccount.balance);
// console.log(creditAccount);

// const account = new Account(1000);
// console.log(account instanceof Account);
// console.log(creditAccount instanceof CreditAccount);
// console.log(creditAccount instanceof Account);
// console.log(account.showBankInfo());

// const accountPremium = new PremiumAccount(5000, 500);

// accountPremium.increase(1000);
// console.log(accountPremium);
// console.log(accountPremium.balance);
// console.log({
//   account,
//   accountPremium,
// });
/** Object.create */
// const bike1 =Object.create(new Car());
// for 2 objects - adoption
// Object.setPrototypeOf(bike1, new Car());

/** hasOwnProperty */
// for in
// entries, keys, values


/** Polymorfism */
// different implementation for methods with same name


// const arr = [1,2,3];
// arr.name = 'array';
// // arr.getName = function() { return this.name };
// arr.__proto__.getName = function() { return this.name };
// arr.__proto__.age = 15;

// arr.hasOwnProperty('age');
// arr.hasOwnProperty('name');

// for (let key in arr) {
//   if (arr.hasOwnProperty(key))
//     console.log(key);
// }

/* eslint-disable */

// const person = {
//   name: 'john',
//   sex: 'm',
// };
// person.__proto__.getName = function() { return this.name };
// person.__proto__.age = 15;

// person.hasOwnProperty('age');
// person.hasOwnProperty('name');

// for (let key in person) {
//   // if (person.hasOwnProperty(key)){
//     console.log(key);
//   // }
// }

// const person = {
//   _admin: true,

//   get isAdmin() {
//     return this._admin;
//   },

//   set isAdmin(value) {
//     if(typeof value === 'boolean') {
//       this._admin = value;
//     } 
//     // else {
//     //   throw new Error('type of value should be type of boolean');
//     // }
//   }
// }

// person._admin = 'superuser';
// person.isAdmin = 'superadmin';
// console.log(person.isAdmin)
// person.isAdmin = false;
// console.log(person.isAdmin)


// const proto = person.__proto__;
// person.__proto__ = 5;
// console.log(proto === person.__proto__)
// person.__proto__ = null;
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(person.__proto__)

// const arrMap = function(arr, callback) {
//   const result = [];
//   for (const item of arr) {
//     result.push(callback(item));
//   }
// }

// const arrMap = function(callback) {
//   const result = [];

  // for (let i = 0; i < this.length; i++) {
  //   console.log('run polyfill');
  //   result.push(callback(this[i], i, this));
  // }


//   return result;
// }

// Array.prototype.map = null;
// if (!Array.prototype.map) {
//   console.log('add polyfill')
//   Array.prototype.map = arrMap;
// }


// // [1,2].map((item) => item * 2);
// const result = [1,2].map((item, index) => item * 2 + index);
// console.log(result)
