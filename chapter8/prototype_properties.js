// write a property on a prototype called 'properties' -> it returns all keys of the object
// but push it into the array only if it belongs to the object itself
Object.prototype.properties = function() {
	var result = [];
	for (var property in this) {
		if (this.hasOwnProperty(property))
			result.push(property);
	}
	return result;
};

var test = {"coffee": "black", "tea": "green"};
console.log(test.properties());