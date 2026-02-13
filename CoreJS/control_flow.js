// if else else if 
// switch case
// early return pattern

// write a function getGrade(score) that:
//  takes student's markes (0-100)
//  returns the grade based on this logic

// function getGrade(score) {
//     if (score >= 90 && score <= 100){
//         return "A";
//     }
//     else if(score >= 80 && score <= 89){
//         return "B";
//     }
//     else if(score >= 70 && score <= 79){
//         return "C";
//     }
//     else if(score >= 60 && score <= 69){
//         return "D";
//     }
//     else if(score >= 33 && score <= 59){
//         return "E";
//     }
//     else if(score >= 0 && score <= 32){
//         return "Fail";
//     }
//     else{
//         return "Invalid Marks";
//     }
// }




function getGrade(score) {
    if (score >= 90 && score <= 100) return "A";
    if(score >= 80 && score <= 89) return "B";
    if(score >= 70 && score <= 79) return "C";
    if(score >= 60 && score <= 69) return "D";
    if(score >= 33 && score <= 59) return "E";
    if(score >= 0 && score <= 32) return "Fail";
    return "Invalid Marks";
}
console.log(getGrade(99));

// Rock paper scissors logic

function rps(user, computer){
    if (user === computer) return "draw";

    if (user === "rock" && computer === "scissors") return "user";
    if (user === "paper" && computer === "rock") return "user";
    if (user === "scissor" && computer === "paper") return "user";

    return "computer";
}

console.log(rps("rock","paper"));