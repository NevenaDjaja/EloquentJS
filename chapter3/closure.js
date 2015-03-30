// Example of a closure - inner function uses the outer variable
function makeAddFunction(amount) {
	function add(number) {
		return number + amount;
	}
	return add;
}

// preserve the variable localVar
function wrapValue(n) {
	var localVar = n;
	return function() { return localVar; };
}

// multiply an arbitrary amount
function multiplier(factor) {
	return function(number) {
		return number*factor;
	};
}

// tests
var addTwo = makeAddFunction(2);
console.log(addTwo(1)); // returns 3
console.log("---");

var wrap1 = wrapValue(1);
console.log(wrap1());
var wrap2 = wrapValue(2);
console.log(wrap2());

console.log("---");
var triple = multiplier(3);
console.log(triple(4));

// needed for Jasmine tests
exports.makeAddFunction = makeAddFunction;
exports.wrapValue = wrapValue;
exports.multiplier = multiplier;
