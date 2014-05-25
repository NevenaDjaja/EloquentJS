// check if the given text starts with the given word
function startsWith(text, start) {
	var length = start.length;
	return text.slice(0,length) === start;
}

// returns an array of strings
function catNames(par) {
	var index = par.indexOf(":") + 2;
	return par.slice(index).split(",");
}

// add values to a set
function addToSet(set, values) {
	for (var i=0; i < values.length; i++) {
		set[values[i]] = true;
	}
}

// remove values from 
function removeFromSet(set, values) {
	for (var i=0; i < values.length; i++) {
		delete set[values[i]];
	}
}

// cats algorithm encapsulated in findLivingCats function
function findLivingCats() {
	var mailArchive = retrieveMails();
	var livingCats = { "Spot": true };

	function handleParagraph(paragraph) {
		if (startsWith(paragraph, "born"))
			addToSet(livingCats, catNames(paragraph));
		else if (startsWith(paragraph, "died"))
			removeFromSet(livingCats, catNames(paragraph));
		}

		for (var mail = 0; mail < mailArchive.length; mail++) {
			var paragraphs = mailArchive[mail].split("\n");
			for (var i = 0; i<paragraphs.length; i++) {
				handleParagraph(paragraphs[i]);
			}
		}

		return livingCats;
	}

var howMany = 0;
for (var cat in findLivingCats())
	howMany ++;
