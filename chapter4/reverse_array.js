// reverse an array and return a new array
function reverse_array(arr) {
	if (arr.length === 0)
		return -1;
	var result = [];
	for (var ind=arr.length-1; ind>=0; ind--) {
		result.push(arr[ind]);
	}
	return result;
}

console.log(reverse_array(["A","B","C"]));
console.log(reverse_array([1,2,3,4,5]));

function reverse_array_in_place(arr) {
	var last = arr.length-1;
	var half_len = Math.floor(arr.length/2);
	for (var ind=0; ind<half_len; ind++) {
		var temp = arr[ind];
		arr[ind] = arr[last-ind];
		arr[last-ind] = temp;
	}
	return arr;
}

console.log(reverse_array_in_place(["V","O","N"]));
console.log(reverse_array_in_place([10,9,8,7,6]));

// for jasmine tests
exports.reverse_array = reverse_array;
exports.reverse_array_in_place = reverse_array_in_place;