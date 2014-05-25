function formatDate(date) {
	var day = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();

	if (day < 10)
		day = "0" + day;
	if (month < 10)
		month = "0" + month;
	return day + "/" + month + "/" + year;
}

console.log(formatDate(new Date(1983, 3,13)));