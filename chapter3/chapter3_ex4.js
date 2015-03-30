function isEven(num, counter) {
	if (counter === undefined) counter = 0;
	if (num < 0) num = -num;
	if (num === 0)
		return true;
	else if (num === 1)
		return false;
	else
		counter += 1;
		console.log("Counter: " + counter);
		return isEven(num-2, counter);
}

console.log(isEven(75));
console.log(isEven(-7));

// for jasmine tests
exports.isEven = isEven;