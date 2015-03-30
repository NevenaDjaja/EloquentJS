// includes
var ex1 = require("./chapter3_ex1");
var ex2 = require("./chapter3_ex2");
var closure = require("./closure");
var scoping_closure = require("./scoping_closure");
var recursion = require("./recursion");
var nested_scope = require("./nested_scope");
var ex3 = require("./chapter3_ex3");
var ex4 = require("./chapter3_ex4");
var ex5 = require("./chapter3_ex5");

// tests
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

describe("closure#wrapValue", function() {
	it ("should return 3", function() {
		var wrap = closure.wrapValue(3);
		expect(wrap()).toBe(3);
	});
});

describe("closure#multiplier", function() {
	it ("should return 20", function() {
		var multiply = closure.multiplier(4);
		expect(multiply(5)).toBe(20);
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

describe("nested_scope#landscape", function() {
	it ("should return /\\_", function() {
		var result = nested_scope.landscape();
		expect(result).toBe("/'''''\\___/''''\\");
	});
});

describe("ex3#findMin", function() {
	it ("should return -10", function() {
		expect(ex3.findMin(0,-10)).toBe(-10);
	});

	it ("shoul return 3", function() {
		expect(ex3.findMin(3,3)).toBe(3);
	});
});

describe("ex4#isEven", function() {
	it ("should return true", function() {
		expect(ex4.isEven(64)).toBeTruthy();
	});

	it ("should return false", function() {
		expect(ex4.isEven(-7)).toBeFalsy();
	});
});

describe("ex5#countBs", function() {
	it ("should return 3", function(){
		expect(ex5.countBs("BlahBlahBlah")).toBe(3);
	});
	it ("should return 0", function() {
		expect(ex5.countBs("repo")).toBe(0);
	});
});

describe("ex5#countLetter", function() {
	it ("should return 5", function() {
		expect(ex5.countLetter("thisissosweets","s")).toBe(5);
	});
	it ("should return 0", function() {
		expect(ex5.countLetter("","m")).toBe(0);
	});
});
