// includes
var ex1 = require("./chapter6_ex1");
var ex2 = require("./chapter6_ex2");
var ex3 = require("./chapter6_ex3");
var ex4 = require("./chapter6_ex4");

describe("ex1#printArray", function() {
	it ("should print elements of an array", function() {
		console.log = jasmine.createSpy("log");
		ex1.printArray([1,2,3]);
		expect(console.log).toHaveBeenCalledWith(1);
		expect(console.log).toHaveBeenCalledWith(2);
		expect(console.log).toHaveBeenCalledWith(3);
	});
});

describe("ex2#forEach", function() {
	it ("should execute a Math.sqrt on array elements", function() {
		spyOn(Math, 'sqrt');
		ex2.forEach([2,4], Math.sqrt);
		expect(Math.sqrt).toHaveBeenCalledWith(2);
		expect(Math.sqrt).toHaveBeenCalledWith(4);
	});
});

describe("ex3#sum", function() {
	it ("should loop through an array and return the sum of its elements", function() {
		var sum = ex3.sum([1,2]);
		expect(sum).toBe(3);
	});
});

describe("ex4#negate", function() {
	xit ("should return a function", function() {
		var negate = negate(isNaN);
		expect(negate(6)).toEqual(true);
	});
});