function JointPositions_changed(value, t) {

//Wenn Ellenbogen ab 10 cm und aufwaerts unter der Schulter ist
if ((value[5].y + 0.15) > value[4].y) {

	AB = new SFVec3f(value[5].x - value[7].x, 0, 0);
	distance_lHand_lEllbowX = Math.sqrt(AB.x * AB.x);

	AB = new SFVec3f(0, value[5].y - value[7].y, 0);
	distance_lHand_lEllbowY = Math.sqrt(AB.y * AB.y);

	AB = new SFVec3f(0, 0, value[5].z - value[7].z);
	distance_lHand_lEllbowZ = Math.sqrt(AB.z * AB.z);

	
	//print(distance_lHand_lEllbowX + ' ' + distance_lHand_lEllbowY + ' ' + distance_lHand_lEllbowZ);
	
  	if (value[7].x > value[5].x){
		x = distance_lHand_lEllbowX*3;
		print(distance_lHand_lEllbowX)
		} else {
		x = -distance_lHand_lEllbowX*3;
		print(-distance_lHand_lEllbowX);
		}  

		if (value[7].y > value[5].y){
		y = distance_lHand_lEllbowY*2;
		} else {
		y = -distance_lHand_lEllbowY*2;
		}	 
 		
	if (value[7].z > value[5].z){
		z = distance_lHand_lEllbowZ*2;
		} else {
		z = -distance_lHand_lEllbowZ*2;
		}	 
}	else {
	x = y = z = 0;
	}

}
