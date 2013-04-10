	var trigger;
	
function initialize() {
print("init");
		trigger = false;
		}
	
	
function get_gesture(value, t) {
print(value);
	if (value == "Wave" && trigger == false) {
		scriptURL = RightHand3DCursor.js;
		trigger = true;
		}
	if (value == "Wave" && trigger == true) {
		scriptURL = RightHand2DCursor.js;
		trugger = false;
		}
}