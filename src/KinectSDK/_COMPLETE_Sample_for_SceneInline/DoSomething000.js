function initialize() {
	shown = false;
}

function doSomething(value, t) {

	if (value == true) {
		if (shown) {
		out = false;
		shown = false;
		newUrl="RightHand3DCursor.js";
		} else {
		out = true;
		shown = true;
		newUrl="RightHand2DCursor.js";
		}
	}
}