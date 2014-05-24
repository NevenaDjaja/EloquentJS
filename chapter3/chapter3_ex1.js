function absolute(num) {
	if (num < 0) {
		return -num;
	} else {
		return num;
	}
}

// test examples
console.log("Testing...");
console.log(absolute(-2));
console.log(absolute(3));
console.log(absolute(0));