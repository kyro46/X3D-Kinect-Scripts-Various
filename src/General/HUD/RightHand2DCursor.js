function HandPosition_changed(value, t) {
	new_pos = new SFVec3f(value.x / 100, value.y/ 100, 10);
	print("2D");
			render = true;
}

function gesture_detected(value, t) {
	if (value == "Wave") {
		scriptURL = "RightHand3DCursor.js";

	}

}