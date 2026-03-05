// Practice questions on calsses and objects....

// 1️⃣ Create a Constructor Function
// Create a constructor Car with:
// brand
// model
// method getDetails() (should be in prototype)

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(this.brand + this.model);
};

let car1 = new Car('Honda', 'city');

// Simple banking example..
class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  getBalance() {
    console.log(this.balance);
  }

  deposite(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log('Insufficient Balance');
    }
  }
}

const acc1 = new BankAccount(5000);
