// Example of closue - inner function uses outer variable
function makeAddFunction(amount) {
	function add(number) {
		return number + amount;
	}
	return add;
}

// tests
var addTwo = makeAddFunction(2);
console.log(addTwo(1)); // returns 3

// needed for Jasmine tests
exports.makeAddFunction = makeAddFunction;