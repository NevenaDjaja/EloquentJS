function reduce(method, base, array) {
	forEach(array, function(element) {
		base = method(base, element);
	});
	return base;
}

function forEach(array, action) {
	for (var i=0; i<array.length; i++) {
		action(array[i]);
	}
}

function countEl(count, element) {
	if (element === 0)
		count += 1;
	return count;
}

function countZeroes(numbers) {
	var zeros = reduce(countEl, 0, numbers);
	return zeros;
}

// test
console.log(countZeroes([1,0,0,3]));

// for jasmine tests
exports.reduce = reduce;
exports.forEach = forEach;
exports.countEl = countEl;
exports.countZeroes = countZeroes;