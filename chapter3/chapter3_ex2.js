function greaterThan(value) {
	function test(otherValue) {
		return otherValue > value;
	}
	return test;
}

// tests
var isGreater = greaterThan(4);
console.log(isGreater(5));

// needed for Jasmine tests
exports.greaterThan = greaterThan;