function touch1(b) {

	if (b) {
		Browser.println('touch1');
		textNode.text = new MFString('cube1 touched');
		navInfo.set_type = new MFString('EXAMINE');
		print(navInfo.type);
	} else
		textNode.text = new MFString(' ');

}

function touch2(b) {

	if (b) {
		Browser.println('touch2');
		textNode.text = new MFString('cube2 touched');
		navInfo.type = new MFString('GAME');
		print(navInfo.type);
	} else
		textNode.text = new MFString(' ');

}

function ovtouch1(b) {

	if (b) {
		//Browser.println('over cube1');
		textNode.text = new MFString('cube1 over');
	} else
		textNode.text = new MFString(' ');

}

function ovtouch2(b) {

	if (b) {
		//Browser.println('over cube 2');
		textNode.text = new MFString('cube2 over');
	} else
		textNode.text = new MFString(' ');

}

function buttonPress(b) {

	if (b) {

		//Browser.println('button pressed');

	} else {

		//Browser.println('button released');
	}

}
