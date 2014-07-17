function processParagraph(paragraph) {
	var count = 0;
	var tag;
	while (paragraph.indexOf('%') !== -1) {
		paragraph = findHeader(paragraph);
		count++;
	}
	tag = (count === 0) ? "p" : "h"+count;
	return {
		content: paragraph,
		type: tag
	};
}

function findHeader(text) {
	header_start = text.indexOf('%');
	if (header_start !== (-1)) {
		text = text.slice(header_start+1, text.length);
	}
	return text;
}

// test
console.log(findHeader("%% Test1"));
console.log(findHeader("% Test2"));
console.log(processParagraph("%% Test1"));
console.log(processParagraph("% Test2"));
console.log(processParagraph("Test3"));

// since the % signs will always start at the beginning
function processParagraph2(paragraph) {
	var count = 0;
	while (paragraph.charAt(0) === '%') {
		paragraph = paragraph.slice(1);
		count++;
	}
	var tag = (count === 0) ? "p" : "h"+count;
	return {
		type: tag,
		content: paragraph
	};
}

console.log(processParagraph2("%%% BLAH"));