/* Playing with JavaScript */

// Literal object
var myCoffee = {
    flavor: "espresso",
    temperature: "piping hot",
    ounces: 100,
    milk: true,

    reheat: function() {
        if (this.temperature === "cold") {
            this.temperature = "piping hot";
            alert("Your coffee has been reheated!");
        }
    }
};

// Object constructor
function Friend(name, tshirtColor) {
    this.name = name;
    this.tshirtColor = tshirtColor;
}

var denny = new Friend("Denny", "green");
var lisa = new Friend("Lisa", "red");
var mark = new Friend("Mark", "blue");

function myFriends() {
    var numberOfFriends = Friend.length;
    console.log("You have " + numberOfFriends);
}

myFriends();