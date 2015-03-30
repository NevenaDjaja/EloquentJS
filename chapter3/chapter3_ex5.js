// return a number that indicates how many "B"s are in the string
function countBs(str) {
	var count = 0;
	while (str) {
		var end = str.length-1;
		if (str.charAt(end) === 'B')
			count += 1;
		str = str.slice(0,end);
	}
	return count;
}

console.log(countBs("Blahblahblah"));
console.log(countBs("dfsfasfsaf"));
console.log(countBs("BBBBBbbbbb"));

function countLetter(str, letter) {
	var count = 0;
	while (str) {
		var end = str.length-1;
		if (str.charAt(end) === letter)
			count += 1;
		str = str.slice(0,end);
	}
	return count;
}

console.log(countLetter("Javascript is awesome!!", "s"));
console.log(countLetter("","e"));

// for jasmine tests
exports.countBs = countBs;
exports.countLetter = countLetter;