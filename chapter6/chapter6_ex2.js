function forEach(array, action) {
	for (var i=0; i<array.length; i++) {
		action(array[i]);
	}
}

// tests
forEach([4,9,16], Math.sqrt);

// exports
exports.forEach = forEach;