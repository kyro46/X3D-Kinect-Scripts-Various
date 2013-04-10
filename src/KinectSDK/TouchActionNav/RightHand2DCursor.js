			function skeleton_changed(value, t)
			{
                	//Set Z to zero to get a 2D-Cursor
                    new_pos = new SFVec3f(value[11].x*20, value[11].y*20, 0);
					AB = new SFVec3f(value[8].x - value[11].x, value[8].y - value[11].y, value[8].z - value[11].z)
					distance_rHand_rShoulder = Math.sqrt(AB.x * AB.x + AB.y * AB.y + AB.z * AB.z);
						
					if (distance_rHand_rShoulder > 0.5) {
					 hot = true;
					 } else {
					 hot = false;
					 }
			}