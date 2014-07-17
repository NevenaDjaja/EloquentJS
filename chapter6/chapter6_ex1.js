// function that only prints values
function printArray(array) {
	for (var i=0; i<array.length; i++) {
		console.log(array[i]);
	}
}

//test
printArray([2,3,4]);

// export
exports.printArray = printArray;
