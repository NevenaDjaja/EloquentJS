for (var count=0; count<30; count++) {
	if (count%3==0 && count%2==0) {
		console.log(count);
	}
}

for (var count=0; count<20; count++) {
	if (count%4 == 0) {
		console.log(count);
	} else {
		console.log("("+count+")");
	}
}

console.log("\n");

for (var index=0; index<20; index++) {
	if (index > 15) {
		console.log(index + "**");
	} else if (index > 10) {
		console.log(index + "*");
	} else {
		console.log(index);
	}
}