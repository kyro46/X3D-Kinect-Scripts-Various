function JointPositions_changed(value, t)
	{
		new_pos = new SFVec3f(value[11].x*10, value[11].y*10, -30+value[11].z*15);
		//print(value[11].z);
		
		
		AB = new SFVec3f(value[8].x - value[11].x, value[8].y - value[11].y, value[8].z - value[11].z)
		distance_rHand_rShoulder = Math.sqrt(AB.x * AB.x + AB.y * AB.y + AB.z * AB.z);
						
		if (distance_rHand_rShoulder > 0.5)
			{
			hot = true;
			} 
		else 
			{
			hot = false;
			}	
		print(hot);
	}  
	
function ChangeScript(value, t) 
	{
		if(value)
		{
			newUrl="RightHand2DCursor.js";
		}
	}