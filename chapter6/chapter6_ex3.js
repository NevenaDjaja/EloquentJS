function sum(numbers) {
	var total = 0;
	forEach(numbers, function(number) {
		total += number;
	});
	return total;
}

function forEach(array, action) {
	for (var i=0; i<array.length; i++) {
		action(array[i]);
	}
}

// test
console.log(sum([4,5]));

// for jasmine tests
exports.sum = sum;
exports.forEach = forEach;