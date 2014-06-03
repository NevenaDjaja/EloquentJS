function between(text, start, end) {
	firstIndex = text.indexOf(start)+1;
	secondIndex = text.indexOf(end, firstIndex);
	return text.slice(firstIndex, secondIndex);
}

// test
console.log(between("born (this) way", "(", ")"));

// needed for jasmine
exports.between = between;