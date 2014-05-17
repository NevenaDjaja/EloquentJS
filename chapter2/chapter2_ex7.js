for (var current = 20; ; current++) {
	if (current % 7 == 0)
		break;
}

console.log(current);

for (var current = 20; current % 7 != 0; current++) {
	;
}

console.log(current);