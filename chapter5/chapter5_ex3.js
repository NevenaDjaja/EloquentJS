function lastElement(array) {
	if (array.length > 0)
		return array[array.length-1];
	else
		throw new Error("Can't take the last elem of an empty array.");
}

function lastElemPlusTen(array) {
	return lastElement(array) + 10;
}

// try/catch block
try {
	print(lastElemPlusTen([]));
}
catch(error) {
	console.log("Something went wrong: ", error);
}

// needed for jasmine tests
exports.lastElement = lastElement;
exports.lastElemPlusTen = lastElemPlusTen;