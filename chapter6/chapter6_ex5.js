// another way of writing the sum function
// combine is a function, base is a starting element 
function reduce(combine, base, array) {
	forEach(array, function(element) {
		// apply combine to every element of the array
		base = combine(base, element);
	});
	console.log(base);
	return base;
}

function forEach(array, action) {
	for (var i=0; i<array.length; i++) {
		action(array[i]);
	}
}

function add(a,b) {
	return a+b;
}

function multiply(a,b) {
	return a*b;
}

function sum(numbers) {
	var sumnum = reduce(add, 0, numbers);
	console.log(sumnum);
	return sumnum;
}

// test
num = [2,3,4];
sum(num);
reduce(multiply, 1, num);

// for jasmine tests
exports.reduce = reduce;
exports.forEach = forEach;
exports.add = add;
exports.multiply = multiply;
exports.sum = sum;