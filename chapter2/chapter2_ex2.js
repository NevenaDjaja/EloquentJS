var result = 1; // 2*2*2
var counter = 0;

while (counter<10) {
	result *= 2;
	counter++;
}

print(result);

function print(arg) {
	console.log(arg);
}