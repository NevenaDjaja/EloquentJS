// extract date from the following line format
// "died 27/04/2006: Black Leclère"
function extractDate(paragraph) {
	date = paragraph.slice(5,15);
	year = date.slice(-4);
	month = date.slice(3,5)-1;
	day = date.slice(0,2);
	return new Date(year, month, day);
}

// test
console.log(extractDate("died 27/04/2006: Black Leclère"));

// or with a helper function
function extractDate2(paragraph) {
	date = paragraph.slice(5,15);
	function numberAt(start, length) {
		return Number(date.slice(start, start+length));
	}
	return new Date(numberAt(6,4), numberAt(3,2)-1, numberAt(0,2));
}

// test
console.log(extractDate2("died 23/06/2003: Tommy"));