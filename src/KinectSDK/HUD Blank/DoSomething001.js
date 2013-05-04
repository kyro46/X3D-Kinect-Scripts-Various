function initialize () {
	toggle = false;
}

function doSomething(value, t) {

	var date = new Date(t * 1000);
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	//print(value + " on " + date);
	// print(value + " " + hours + ":" + minutes + ":" + seconds)
	//timeOver = true;
	
	if (value == true) {
		if (toggle) {
		color = new SFColor(1, 0, 0);
		toggle = false;
		} else {
		color = new SFColor(0, 0, 1);
		toggle = true;
		}
	}

}