// An example of a closure
var variable = "top-level";

function parentFunc() {
	var variable = "local";  // new local variable

	function childFunc() {
		console.log(variable);
	}
	return childFunc;
}

// assign the return value of parentFunc to var child
var child = parentFunc();
// call childFunc()
child();	// returns "local"

// needed for Jasmine tests
exports.parentFunc = parentFunc;
