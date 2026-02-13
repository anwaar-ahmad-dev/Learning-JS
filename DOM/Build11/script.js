let button = document.querySelector("button");
let main = document.querySelector(".main");

// let colors = [
//     "#0F172A",
//     "#1E293B",
//     "#334155",
//     "#3B82F6",
//     "#22C55E",
//     "#F59E0B",
//     "#EF4444",
//     "#A855F7"
// ];


// let counter = 0;

button.addEventListener("click", () => {

// Explanation --->

    // So here .replace() is used to replace all the 0s from the base color (#000000) and we select all the 0s by regex and for that we are using (0/g/ -->  here 0/ means select 0 and g/ means all the 0s) and replace() to replace all the 0s.
    // the for each 0 a function is called -->
    // (~~) is used instead of Math.floor() to remove decimal.
    // Math.random() --> generates a random number from (0 - 0.999)
    // math.random()*16 --> we multiply by 16 so the range becomes 0 - 15
    // eg 0.1 * 16 => 1.6 => ~~(1.6) => 1.
    // .toString(16) ==> all the generated numbers are converted to string and numbers above 9 are converted to hexadecimal string => 10->a, 11->b, 12->c .....
    // final value is like ---> "#a3f9c0" .

    let randomColor = "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
    });

    main.style.backgroundColor = randomColor;
    
    // main.style.backgroundColor = colors[counter];
    // counter++;

    // if (counter === colors.length){
    //     counter = 0;
    // }
});