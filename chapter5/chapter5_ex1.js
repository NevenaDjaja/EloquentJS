function between(string, start, end) {
	var startAt = string.indexOf(start);
	if (startAt === -1)
		return undefined;
	startAt += start.length;
	var endAt = string.indexOf(end, startAt);
	if (endAt === -1)
		return undefined;
	return string.slice(startAt, endAt);
}

// test the method
console.log(between("blah blah", "cat", "dog"));
console.log(between("sweets is cool", "sweets", "cool"));

// for jasmine tests
exports.between = between;