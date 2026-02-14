// Learning About "this" keyword.
// this refers to the object that calls a function ..

// Used in global scope 
console.log(this);

// this used in function scope.
function useOfThis() {
    console.log(this);
}

useOfThis();


const user1 = {
    name: "Ariz",
    greet: function () {
        console.log(this.name);
    }
};
user1.greet();

const user2 = {
    name: "Rahul"
};

user2.greet = user1.greet;
console.log(user2)
user2.greet();
