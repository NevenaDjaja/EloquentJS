function greaterThan(value) {
	function test(otherValue) {
		return otherValue > value;
	}
	return test;
}

var isGreater = greaterThan(4);
console.log(isGreater(5));