function convertMonth(month) {
	months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
			  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
	return months[month];
}

function convertDay(day) {
	days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY',
	        'THURSDAY', 'FRIDAY', 'SATURDAY'];
	return days[day];
}

function padZeros(num) {
	str = num.toString();
	if (str.length < 2) {
		return "0" + str;
	} else {
		return str;
	}
}

function updateClock() {
	var today = new Date();

	var ampm = 'AM';
	var hour = today.getHours();
	if (hour > 12) {
		hour = hour - 12;
		ampm = 'PM';
	}

	hour = padZeros(hour);
	var minute = padZeros(today.getMinutes());
	var second = padZeros(today.getSeconds());

	var month = convertMonth(today.getMonth());
	var day = convertDay(today.getDay());
	var datenum = padZeros(today.getDate());

	var time = document.getElementById("time");
	time.textContent = `${hour}:${minute}:${second} ${ampm}`;

	var date = document.getElementById("date");
	date.textContent = `${day} ${month} ${datenum}`;
}

setInterval(updateClock, 1000);