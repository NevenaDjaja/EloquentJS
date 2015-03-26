// ------ Example 1 ------
// attach methods to an object
var rabbit = {};
rabbit.speak = function(line) {
	console.log("The rabbit says: '", line, "'");
	// points to the object when function used as a method	
	console.log(this);
};

console.log(rabbit.speak("Have a nice day!!"));


// ------ Example 2 ------
function talk(line) {
	console.log("The ", this.adjective, " rabbit says: '", line, "'");
}

// we assigne property talk as a function talk
var whiteRabbit = { adjective: "white", talk: talk};
var fatRabbit = { adjective: "fat", talk: talk};

whiteRabbit.talk("I could use a carrot now.");
fatRabbit.talk("It's getting pretty late.");

// another way to call a method 'talk'
talk.apply(fatRabbit, ["Yum."]);
talk.call(fatRabbit, "Blah.");

// ------ Example 3 ------
// create a Rabbit constructor
function Rabbit(adjective) {
	this.adjective = adjective;
	this.speak = function(line) {
		console.log("The ", this.adjective, " rabbit says: '",line,"'" );
	};
}

var killerRabbit = new Rabbit("killer");
killerRabbit.speak("ARGHHHHHH!!!");
// property of objects created via 'new', because of the prototype
console.log(killerRabbit.constructor);		// [Function: Rabbit]

function makeRabbit(adjective) {
	return {
		adjective: adjective,
		speak: function(line) {
			console.log("The ", this.adjective, " rabbit says: '",line,"'" );
		}
	};
}

// different kind of an object
var blackRabbit = makeRabbit("black");
// constructor here points to the Object function
console.log(blackRabbit.constructor);		// [Function: Object]
console.log(Rabbit.prototype.constructor);	// [Function: Rabbit]

// looking up the value of a property
Rabbit.prototype.teeth = "sharp";
console.log(killerRabbit.teeth);	// 'sharp'

killerRabbit.ears = "small";
console.log(Rabbit.prototype.ears);  // 'undefined'

// adding a new method to the prototype
Rabbit.prototype.dance = function() {
	console.log("The ", this.adjective, " rabbit dances a jig.");
};




