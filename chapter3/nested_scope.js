// functions nested inside of other function (closure)
var landscape = function() {
	var result = "";
	// this can access var result
	var flat = function(size) {
		for (var ind=0; ind<size; ind++) {
			result += "_";
		}
	};

	var mountain = function(size) {
		result += "/";
		for (var count=0; count<size; count++) {
			result += "'";
		}
		result += "\\";
	};

	// invoke inner functions
	mountain(5);
	flat(3);
	mountain(4);

	return result;
};

console.log(landscape());

// for jasmine tests
exports.landscape = landscape;

