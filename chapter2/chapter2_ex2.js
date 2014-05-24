var result = 1; // 2*2*2
var counter = 0;

while (counter<10) {
	result *= 2;
	counter++;
}

print(result);

// or with for loop
var power = 1;
for (count=0; count<10; count++) {
	power *= 2;
}
print(power);

function print(arg) {
	console.log(arg);
}