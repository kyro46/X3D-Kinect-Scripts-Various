var allreadyActivated = false;

function startDelay(value, t) {

	//Unnoetig lange Version
	//Die anderen HUD-Scripte sind besser
	if (value == true) {
		if (!allreadyActivated) {
			out_delay = true;
			allreadyActivated = true;
		}
	} else {
		out_delay_false = false;
		allreadyActivated = false;
	}
	
}

function startBool(value, t) {
	if (value == true) {
		out_Bool = t
		} else { 
		out_Bool_false = t
		}
}