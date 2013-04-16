function doSomething(value, t) {

	var date = new Date(t * 1000);
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	//print(value + " on " + date);
	// print(value + " " + hours + ":" + minutes + ":" + seconds)
	//timeOver = true;
	
	if (value == true) {
	color = new SFColor(0, 1, 0);
	} else {
	//color = new SFColor(1, 0, 0);
	}
}