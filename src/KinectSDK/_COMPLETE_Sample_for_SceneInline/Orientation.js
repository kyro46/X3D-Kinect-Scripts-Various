function JointPositions_changed(value, t) {

if  (Math.abs(value[8].y - value[4].y) > 0.1) {
	roll = value[8].y - value[4].y;
} else { roll = 0;}

if  (Math.abs(value[0].z - value[3].z) > 0.2) {
	pitch = value[0].z - value[3].z;
}else { pitch = 0;}

if  (Math.abs(value[4].z - value[8].z) > 0.2) {
	yaw = value[4].z - value[8].z;
}else { yaw = 0;}

}
