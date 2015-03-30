// calculate the minimum of 2 numbers
function findMin(a,b) {
	return ((a<=b) ? a : b);
}

console.log(findMin(0,-10));

// for Jasmine tests
exports.findMin = findMin;