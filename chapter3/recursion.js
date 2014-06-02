// Example of a recursive function
function recursive(base, exponent) {
	if (exponent === 0) {
		return 1;
	}
	return base*recursive(base, exponent-1);
}

// test
console.log(recursive(3,5));

// needed for jasmine tests
exports.recursive = recursive;
