function HandPosition_changed(value, t) {
	x = value.x;
	y = value.y;
	z = value.z-1600;
	new_pos = new SFVec3f(x, y, z);
	
	print(z);
}

function get_gesture(value, t) {
	print(value);
	if (value == "Wave") {
	
		scriptURL = "RightHand2DCursor.js";
	}
}