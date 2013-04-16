function initialize() {
	shown = false;
}

function doSomething(value, t) {

	if (value == true) {
		if (shown) {
		out = false;
		shown = false;
		} else {
		out = true;
		shown = true;
		}
	}
}