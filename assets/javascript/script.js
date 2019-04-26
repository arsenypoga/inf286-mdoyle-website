console.log("Testing");

function strobe(time) {
	window.setInterval(() => {
		while (true) {
			const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
			body = document.getElementsByTagName("body")[0].style.backgroundColor = color;
		}
	}, time)



}