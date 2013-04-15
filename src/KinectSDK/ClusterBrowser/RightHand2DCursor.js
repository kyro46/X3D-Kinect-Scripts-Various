			function skeleton_changed(value, t)
			{
                	//Set Z to zero to get a 2D-Cursor
                    new_pos = new SFVec3f(value[11].x*40, value[11].y*40, 0);
					
					// Var 1: Use right hand for click
					AB = new SFVec3f(value[8].x - value[11].x, value[8].y - value[11].y, value[8].z - value[11].z)
					//Var 2: Use left hand for click
					//AB = new SFVec3f(value[4].x - value[7].x, value[4].y - value[7].y, value[4].z - value[7].z);
					
					//Use AB to calculate distance
					distance_hand_shoulder = Math.sqrt(AB.x * AB.x + AB.y * AB.y + AB.z * AB.z);
					

					
					if (distance_hand_shoulder > 0.5) {
					hit_to.set_pointer = hit_from.hitTexCoord_changed;
					hot = true;
					 } else {
					 hot = false;
					 }
			}