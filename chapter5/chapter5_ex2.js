function lastElement(array) {
	if (array.length > 0)
		return array[array.length - 1];
	else
		return undefined;
}

// test
console.log(lastElement([1,2,undefined]));

// needed for Jasmine tests
exports.lastElement = lastElement;