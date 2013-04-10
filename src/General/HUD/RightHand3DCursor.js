function HandPosition_changed(value, t) {
	x = value.x;
	y = value.y;
	z = value.z-1600;
	new_pos = new SFVec3f(value.x / 100, value.y / 100, value.z / 200);
			render = false;
}

function gesture_detected(value, t) {
	print(value);
	if (value == "Wave") {
	
		scriptURL = "RightHand2DCursor.js";

	}

}