/* Playing with JavaScript */

var randomNumber = Math.round(Math.random() * 5);

if (randomNumber % 3 === 0) {
    console.log("Fizz");
} else if (randomNumber % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(randomNumber);
}