// includes
var ex2 = require("./chapter4_ex2");
var ex4 = require("./chapter4_ex4");
var ex5 = require("./chapter4_ex5");
var ex6 = require("./chapter4_ex6");
var ex7 = require("./chapter4_ex7");
var ex8 = require("./chapter4_ex8");
var ex10 = require("./chapter4_ex10");
var ex11 = require("./chapter4_ex11");
var cats_algo = require("./new_cats_algo");

beforeEach(function() {
	var set = {"john":true, "mark":false};
});

describe ("ex2#range", function() {
	it ("it should array [0,1,2,3]", function() {
		var range = ex2.range(3);
		expect(range).toEqual([0,1,2,3]);
	});
});

describe ("ex4#startsWith", function() {
	it ("should return true", function() {
		var startsWith = ex4.startsWith("cat mouse", "cat");
		expect(startsWith).toBe(true);
	});

	it ("should return false", function() {
		var startsWith = ex4.startsWith("cat mouse", "dog");
		expect(startsWith).toBe(false);
	});
});

describe ("ex5#catNames", function() {
	it ("should return array ['bob rock', 'red lion']", function() {
		var catNames = ex5.catNames("born 05/04/2006: bob rock, red lion");
		expect(catNames).toEqual(['bob rock', ' red lion']);
	});
});

describe("ex6#extractDate", function() {
	it ("should extract date from the specific format", function() {
		var date = ex6.extractDate("died 27/04/2006: Black Leclère");
		expect(date).toEqual(new Date(2006,03,27));
	});
});

describe("ex7#between", function() {
	it ("should return text between parenthesis", function() {
		var between = ex7.between("born (this) way", "(", ")");
		expect(between).toBe("this");
	});
});

describe("ex8#formatDate", function() {
	it ("should return '13/03/1983'", function() {
		var formatDate = ex8.formatDate(new Date(1983, 3,13));
		expect(formatDate).toEqual("13/03/1983");
	});
});

describe("ex10#range", function() {
	it ("should return an array [0,1,2]", function() {
		var range = ex10.range(2);
		expect(range).toEqual([0,1,2]);
	});

	it ("should return an array [2,3,4]", function() {
		var range = ex10.range(2,4);
		expect(range).toEqual([2,3,4]);
	});
});

describe("ex11#sum", function() {
	it ("should sum the elements of an array and return 6", function(){
		var sum = ex11.sum([1,2,3]);
		expect(sum).toBe(6);
	});
});

describe("cats_algo#catRecord", function() {
	it ("should return an object with input args", function() {
		var catRecord = cats_algo.catRecord("john", "05/05/2013", "lola");
		expect(catRecord).toEqual({name: "john", birth: "05/05/2013", mother: "lola"});
	});
});

describe("cats_algo#addCats", function() {
	var set = {};
	beforeEach(function() {
		set["john"] = true;
		spyOn(cats_algo, 'catRecord').andReturn({name: "john", birth: "05/05/2013", mother: "lola"});
	});
	it ("should set living cats hash with their name as the key", function(){
		cats_algo.addCats(set,['john'],"05/05/2013",'lola');
		expect(set).toEqual({'john': {name: 'john', birth: "05/05/2013", mother: "lola"}});
	});
});

describe("cats_algo#deadCats", function() {
	var set = {};
	beforeEach(function() {
		set = {'john': {name: 'john', birth: "05/05/2013", mother: "lola", death: true}};
	});
	it ("should set dead cats hash", function() {
		cats_algo.deadCats(set, ["john"], 1);
		expect(set["john"].death).toEqual(1);
	});

	describe("cats_algo#extractMother", function() {
		it ("should return name of the cat mother, Spot", function() {
			var extractMother = cats_algo.extractMother("born 15/11/2003 (mother Spot): White Fang");
			expect(extractMother).toBe("Spot");
		});
	});
	
});


