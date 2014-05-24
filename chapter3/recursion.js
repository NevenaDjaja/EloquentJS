// Example of a recursive function
function recursive(base, exponent) {
	if (exponent === 0) {
		return 1;
	}
	return base*recursive(base, exponent-1);
}

console.log(recursive(3,5));
