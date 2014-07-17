function forEach(array, action) {
	for (var i=0; i<array.length; i++) {
		action(array[i]);
	}
}

// function map -> creates a new array
function map(func, array) {
	var result = [];
	forEach(array, function(element) {
		result.push(func(element));
	});
	return result;
}

// test
console.log(map(Math.round, [0.3,2.1,9.8]));

// for jasmine tests
exports.map = map;