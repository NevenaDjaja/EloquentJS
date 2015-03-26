function fizzBuzz() {
	var text = "FizzBuzz";
	var counter = 1;
	while (counter <= 100) {
		if (counter % 5 == 0 && counter % 3 == 0) 
			console.log(counter + ": " + text);
		else if (counter % 5 == 0)
			console.log(counter + ": " + text.slice(0,4));
		else if (counter % 3 == 0)
			console.log(counter + ": " + text.slice(4,8));
		counter++;
	}
}

fizzBuzz();