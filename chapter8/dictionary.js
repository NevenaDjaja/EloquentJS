// function to check whether a property is present in an object
// constructor
function Dictionary(startValues) {
	this.values = startValues || {};
}
// populate the Dictionary object
Dictionary.prototype.store = function(name, value) {
	this.values[name] = value;
};
// return the value of given keys
Dictionary.prototype.lookup = function(name) {
	return this.values[name];
};
// check if an object contains a certain property
// Note: if you call hasOwnProperty on a prototype (not an object itself)
// then you can chain 'call' after it
Dictionary.prototype.contains = function(name) {
	return Object.prototype.hasOwnProperty.call(this.values, name) &&
	Object.prototype.propertyIsEnumerable.call(this.values, name);
};

// implement method each
Dictionary.prototype.each = function(action) {
	forEachIn(this.values, action);
};

var colours = new Dictionary({ Grover: "blue", Elmo: "orange", Bert: "yellow"});

console.log(colours.contains("Grover")); // true
console.log(colours.contains("constructor")); // false