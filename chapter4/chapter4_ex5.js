function catNames(par) {
	var index = par.indexOf(":") + 2;
	return par.slice(index).split(",");
}


// test
var par = "born 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois";
console.log(catNames(par));