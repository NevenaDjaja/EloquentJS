// includes
var ex1 = require("./chapter6_ex1");
var ex2 = require("./chapter6_ex2");
var ex3 = require("./chapter6_ex3");
var ex4 = require("./chapter6_ex4");
var ex5 = require("./chapter6_ex5");
var ex6 = require("./chapter6_ex6");
var ex7 = require("./chapter6_ex7");

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

describe("example5 functions", function() {
	describe("#reduce", function() {
		it ("should add numbers from the array", function() {
			var reduce = ex5.reduce(ex5.add, 0, [1,2]);
			expect(reduce).toEqual(3);
		});
	});

	describe("#add", function(){
		it ("should add two numbers", function() {
			var add = ex5.add(3,4);
			expect(add).toEqual(7);
		});
	});

	describe("#multiply", function(){
		it ("should multiply two numbers", function(){
			var multiply = ex5.multiply(4,5);
			expect(multiply).toEqual(20);
		});
	});

	describe("#sum", function() {
		it ("should sum the elements of the array", function() {
			var sum = ex5.sum([5,4,3]);
			expect(sum).toEqual(12);
		});
	});

	describe("example6 functions", function() {
		it ("should increase counter if the element equals 0", function() {
			var elCount = ex6.countEl(1,0);
			expect(elCount).toBe(2);
		});

		it ("should return number of zeros in an array", function(){
			var countZeroes = ex6.countZeroes([1,0,0,0]);
			expect(countZeroes).toBe(3);
		});
	});

	describe("example7 functions", function() {
		it ("should create a new array mapping the values", function() {
			var map = ex7.map(Math.floor, [1.2,3.9,4]);
			expect(map).toEqual([1,3,4]);
		});
	});

});