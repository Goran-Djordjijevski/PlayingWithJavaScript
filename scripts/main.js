/* Playing with JavaScript */

var randomNumber = Math.round(Math.random() * 15);

if (randomNumber % 3 === 0 && randomNumber !== 0) {
    if (randomNumber % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log("Fizz");
    }
} else if (randomNumber % 5 === 0 && randomNumber !== 0) {
    console.log("Buzz");
} else {
    console.log(randomNumber);
}