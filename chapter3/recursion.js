// Example of a recursive function
function recursive(base, exponent) {
	// condition to break out of recursion
	if (exponent === 0) {
		return 1;
	}
	return base*recursive(base, exponent-1);
}

function findSolution(target) {
	function find(start, history) {
		if (start == target)
			return history;
		else if (start > target)
			return null;
		else
			return find(start+5, "("+history+"+5)") || find(start*3, "("+history+"*3)");
	}
	return find(1, "1");
}

// test
console.log(recursive(3,5));
console.log(recursive(2,0));
console.log(findSolution(35));
// needed for jasmine tests
exports.recursive = recursive;
