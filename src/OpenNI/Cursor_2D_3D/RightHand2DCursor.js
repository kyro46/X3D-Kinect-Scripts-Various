function HandPosition_changed(value, t) {
	new_pos = new SFVec3f(value.x / 100, value.y / 100, 0);
	print("2D");
}

function get_gesture(value, t) {
	if (value == "Wave") {
		scriptURL = "RightHand3DCursor.js";
	}
}