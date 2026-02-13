// Reusable discount calculator with Heigher Order Function.
/*

function discount_Calculator(discount){
    return function(price){
        return price - price *(discount/100);
    }
}
let discounter = discount_Calculator(10);
console.log(discounter(1200));

*/
// Reusable

function discount_Calculator(discount){
    return function(price){
        return price - price *(discount/100);
    }
}
let ten = discount_Calculator(10);
let twenty = discount_Calculator(20);

console.log(ten(1200)); // gives 10% discount.
console.log(twenty(1200)); // gives 20% discount.