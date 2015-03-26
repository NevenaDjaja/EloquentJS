var answer = parseInt(prompt("What is 2+2?"),10);

while (true) {
	if (answer === 4) {
		alert("you are a genious");
		break;
	} else {
		alert("you are embarassement!");
	}
}

var value = null;
while (value != 4) {
	value = parseInt(prompt("What is 2+2?"),10);
	if (answer === 4) {
		alert("you are a genious");
	} else {
		alert("you are embarassement!");
	}

}