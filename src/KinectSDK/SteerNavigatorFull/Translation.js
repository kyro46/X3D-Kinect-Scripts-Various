function JointPositions_changed(value, t) {

if ((value[7].y + 0.1) > value[4].y) {

	x = value[7].x*2;
	//Variante 1 - y-Translation auch mit der Hand
	//y = value[7].y*2;
	z = (value[7].z - value[5].z)*2;	
}	else {
	x = z = 0;
	//Noch Variante 1
	y = 0;
}

	//Variante 2 - y-Translation durch hinhocken und beide Arme ueber die Schultern heben
 	if ((value[12].y - value[14].y) < 0.5 && (value[16].y - value[18].y) < 0.5) {
		y = -(1/(value[16].y - value[18].y))*0.5;
	} 
	else {
		if ((value[11].y - value[8].y) > 0.1 && (value[7].y - value[4].y) > 0.1) {
			y = (1/(value[7].y - value[4].y))*0.5;
			//print(y);	

		} else {
			y = 0;
		}
	} 


}
