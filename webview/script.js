"use strict";

function element(id) {
	return document.getElementById(id);
}

function setDigit(number, text) {
	element("clock-digit-" + number).children[0].textContent = text;
}

function updateClock() {
	const date = new Date();

	const [, time] = date.toLocaleString().split(" ");
	const [hour, minute, second] = time.split(":");

	setDigit(1, hour.charAt(0));
	setDigit(2, hour.charAt(1));
	setDigit(3, minute.charAt(0));
	setDigit(4, minute.charAt(1));
	setDigit(5, second.charAt(0));
	setDigit(6, second.charAt(1));
}

setInterval(updateClock, 1000);
updateClock();
