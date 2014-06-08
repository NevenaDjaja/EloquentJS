// higher-order function modifies the function

function negate(func) {
	return function(x) {
		return !func(x);
	};
}

// test
var isNotNan = negate(isNaN);
console.log(isNotNan);				// function returned
console.log(isNotNan(6));			// true