function showTime() {
	const date = new Date();

	const today = date.toLocaleString("en", { weekday: "long" });
	const hour = date.toLocaleString("pl", { hour: "2-digit" });
	let minute = date.toLocaleString("en", { minute: "2-digit" });
	let second = date.toLocaleString("en", { second: "2-digit" });
	const day = date.toLocaleString("en", { day: "2-digit" });
	const month = date.toLocaleString("en", { month: "2-digit" });
	const year = date.toLocaleString("en", { year: "numeric" });

	minute = addZero(minute);
	second = addZero(second);

	document.getElementById("date-display").innerHTML =
		`${today}, ${hour}:${minute}:${second} | ${day}/${month}/${year}`;
	setTimeout(showTime, 0);
}

function addZero(i) {
	if (i.length < 2) i = `0${i}`;
	return i;
}

showTime();
