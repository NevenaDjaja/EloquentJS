// includes
var ex1 = require("./chapter5_ex1");
var ex2 = require("./chapter5_ex2");
var ex3 = require("./chapter5_ex3");

describe("ex1#between", function() {
	it('should return the word between start and end', function() {
		var betw = ex1.between("eyes:green,hair:brown",":",",");
		expect(betw).toBe("green");
	});

	it('should return undefined if start or end words not in string', function() {
		var betw = ex1.between("blah blah","start","end");
		expect(betw).toBe(undefined);
	});
});

describe("ex2#lastElement", function() {
	it('should return undefined if last element not present', function() {
		var last = ex2.lastElement([]);
		expect(last).toBe(undefined);
	});
});

describe("ex3#lastElement", function() {
	it('should return the last element of an array', function() {
		var lastEl = ex3.lastElement([4,3,2]);
		expect(lastEl).toBe(2);
	});

	xit('should raise an exception if array is empty', function() {
		expect(ex3.lastElement([])).toThrow(new Error("Can't take the last elem of an empty array."));
	});
});

