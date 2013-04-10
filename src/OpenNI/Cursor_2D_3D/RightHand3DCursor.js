function HandPosition_changed(value, t) {
	new_pos = new SFVec3f(value.x / 100, value.y / 100, value.z/200);
	print("3D");
}

function get_gesture(value, t) {
	print(value);
	if (value == "Wave") {
	
		scriptURL = "RightHand2DCursor.js";
	}
}