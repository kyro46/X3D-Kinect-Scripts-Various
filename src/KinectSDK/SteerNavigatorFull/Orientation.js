function JointPositions_changed(value, t) {

roll = value[8].y - value[4].y;
pitch = value[2].z - value[3].z;
yaw = value[4].z - value[8].z;

print (roll);
}
