// classes and instances.

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
        document.body.querySelectorAll("h1").forEach(elem => {
            if (elem.style.color === this.color) {
                elem.remove();
            }
        });
    }

    // used to write and create the h1 with custom text each time 

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}

let p1 = new CreatePencil("Natraj", "natraj", 10, "black");
let p2 = new CreatePencil("Apsara", "apsara", 15, "blue");