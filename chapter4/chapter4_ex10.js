function range(length, end) {
	var values = [];

	if (arguments.length < 2) {
		for (var i=0; i<=length; i++) {
			values[i] = i;
		}
	} else {
		for (var j=length; j<=end; j++) {
			values.push(j);
		}
	}

	return values;
}

// test
console.log(range(10));
console.log(range(5, 10));


// faster, only 1 for loop
function range2(length, end) {
	values = [];

	if (arguments.length <2) {
		end = length;
		length = 0;
	}

	for (var i=length; i<=end; i++) {
		values.push(i);
	}
	return values;
}

// test 
console.log(range2(7));
console.log(range2(3,7));