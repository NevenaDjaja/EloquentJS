function catRecord(name, birthdate, mother) {
	return {name: name, birth: birthdate, mother: mother};
}

function addCats(set, names, birthdate, mother) {
	for (var i=0; i < names.length; i++)
		set[names[i]] = catRecord(names[i], birthdate, mother);
}

function deadCat(set, names, deathdate) {
	for (var i=0; i < names.length; i++)
		set[names[i]].death = deathdate;
}

function extractMother(paragraph) {
	var start = paragraph.indexOf("(mother ") + "(mother ".length;
	var end = paragraph.indexOf(")");
	return paragraph.slice(start, end);
}

// test extractMother
console.log(extractMother("born 15/11/2003 (mother Spot): White Fang"));