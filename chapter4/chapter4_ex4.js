function startsWith(text, start) {
	var length = start.length;
	return text.slice(0,length) === start;
}

// test
console.log(startsWith("blahblah2 blah3", "blah"));  //true
console.log(startsWith("ja sam mala", "garava"));	// false