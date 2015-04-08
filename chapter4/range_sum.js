// return an array containing numbers betw start and end
function range(start, end) {
	var result = [];
	if (start < end) {
		for (var i=start; i<=end; i++) {
			result.push(i);
		}
	} else {
		for (var ind=start; ind>=end; ind--) {
			result.push(ind);
		}
	}
	return result;
}

function sum(ar) {
	if (ar.length == 0)
		return "empty array";
	var sumValue = 0;
	ar.forEach(function(elem) {
		sumValue += elem;
	});
	return sumValue;
}

console.log(range(1,10));
console.log(sum(range(1,10)));
console.log(range(5,2,-1));
console.log(sum(range(5,2,-1)));

exports.range = range;
exports.sum = sum;