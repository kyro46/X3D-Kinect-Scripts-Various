function initialize() {
	print("Gesture START");

}

function string_changed(value, t) {
	print("Printer 1");
	var date = new Date(t * 1000);
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	print(value + " on " + date);
	// print(value + " " + hours + ":" + minutes + ":" + seconds)
	change_url = "Printer2.js";
}

function NumUsers_changed(value, t) {
	print("NumUsers: " + value);

}

function SFVec3f_changed(value, t) {
	// print("HandPosition: " + value.x + " " + value.y + " " + value.z);

}

function shutdown() {
	print("Gesture END");
}