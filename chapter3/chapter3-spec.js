// includes
var ex1 = require("./chapter3_ex1");
var ex2 = require("./chapter3_ex2");
var closure = require("./closure");
var scoping_closure = require("./scoping-closure");
var recursion = require("./recursion");

describe("ex1#absolute", function() {
	it ("should return a positive value of a negative number", function() {
		var value = ex1.absolute(-4);
		expect(value).toBe(4);
	});

	it ("should return a positive number", function() {
		var value = ex1.absolute(5);
		expect(value).toBe(5);
	});

	it ("should return zero if arg is zero", function() {
		var value = ex1.absolute(0);
		expect(value).toBe(0);
	});
});

describe("ex2#greaterThan", function() {
	it ("should return true when inner value greater than the outer", function() {
		var value = ex2.greaterThan(5);
		expect(value(6)).toBe(true);
	});

	it ("should return false when inner value smaller than outer", function() {
		var value = ex2.greaterThan(5);
		expect(value(0)).toBe(false);
	});
});

describe("closure#makeAddFunction", function() {
	it ("should return sum of two numbers", function() {
		var result = closure.makeAddFunction(10);
		expect(result(5)).toBe(15);
	});
});

describe("scoping-closure#parentFunc", function() {
	xit ("should return 'local' value", function() {
		var result = scoping_closure.parentFunc();
		expect(result()).toBe('local');
	});
});

describe("recursion#recursive", function() {
	it ("should return 1", function() {
		var result = recursion.recursive(2,0);
		expect(result).toBe(1);
	});

	it ("should return 32", function() {
		var result = recursion.recursive(2,5);
		expect(result).toBe(32);
	});
});






