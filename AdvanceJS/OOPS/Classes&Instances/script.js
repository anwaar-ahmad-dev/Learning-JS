// classes and instances.

// ES6 class and constructor..

class CreatePencil {
  constructor(name, company, price, color) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }

  // when erase is called by p1 the elements with black color are removed from the page.
  // same goes with p2 , the blue color elements are removed..
  erase() {
    document.body.querySelectorAll('h1').forEach((elem) => {
      if (elem.style.color === this.color) {
        elem.remove();
      }
    });
  }

  // used to write and create the h1 with custom text each time

  write(text) {
    let h1 = document.createElement('h1');
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }
}

let p1 = new CreatePencil('Natraj', 'natraj', 10, 'black');
let p2 = new CreatePencil('Apsara', 'apsara', 15, 'blue');

// extends and super() keyword..

class User {
  constructor(name, address, username, email, color) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.color = color;
    this.role = 'User';
  }

  // method to check role of the user..(either Admin or user)

  checkRole() {
    console.log(`${this.name} You are ${this.role}`);
  }

  write(text) {
    let h1 = document.createElement('h1');
    h1.style.color = this.color;
    h1.textContent = `${this.name} : ${text}`;
    document.body.appendChild(h1);
  }
}

class Admin extends User {
  constructor(name, address, username, email, color) {
    super(name, address, username, email, color);
    this.role = 'Admin';
  }

  remove() {
    document.querySelectorAll('h1').forEach((elem) => {
      elem.remove();
    });
  }
}

let u1 = new User('Ariz', 'Lucknow', 'ariz121', 'ariz@ariz.com', 'red');
let u2 = new User('Sahil', 'Raebareli', 'sahil232', 'sahil@sahil.com', 'green');
let a1 = new Admin('Admin', 'India', 'adminnnn', 'admin@admin.com', 'blue');

// prototypal inheritance...
// object inherits properties and methods from other objects through prototype chain..

// it is done using the Object.create()...

// example--
let coffee = {
  color: 'dark',
  dring: function () {
    console.log('gut gut gut');
  },
};

let arabiataCoffee = Object.create(coffee); // Added the props & methods of coffee to the prototype of the arabiata
arabiataCoffee.taste = 'Bitter';
console.log(arabiataCoffee);
arabiataCoffee.dring();
