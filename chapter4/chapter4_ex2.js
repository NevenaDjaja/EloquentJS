function range(length) {
	var values = [];
	for (var i=0; i<=length; i++) {
		values[i] = i;
	}
	return values;
}

// test
console.log(range(10));
console.log(range(5));