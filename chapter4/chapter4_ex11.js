function sum(array) {
	var result = 0;
	for (var i=0; i<array.length; i++) {
		result += array[i];
	}
	return result;
}

// test
console.log(sum([1,2,3]));

// needed for jasmine tests
exports.sum = sum;