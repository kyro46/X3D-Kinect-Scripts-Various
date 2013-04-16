var oldValueX = -1;
var oldValueY = -1;

function JointPositions_changed(value, t)
	{
	
		new_pos = new SFVec3f(value[11].x*10, value[11].y*10, 0);

		//Alternative
		//Toleranzgrenze ehe eine Bewegung angestossen wird - ruckelt den Zeiger aber
    	if (oldValueX < 0)
    	{
        	oldValueX = value[11].x;
    	}
		
    	Xdelta = value[11].x - oldValueX;
		
		if (Math.abs(Xdelta) < 0.1) {
			XChange = oldValueX;
		} else {
		    oldValueX = value[11].x;	
			XChange = value[11].x;
		}

   	if (oldValueY < 0)
    	{
        	oldValueY = value[11].y;
    	}
		
    	Ydelta = value[11].y - oldValueY;
		
		if (Math.abs(Ydelta) < 0.1) {
			YChange = oldValueY;
		} else {
		    oldValueY = value[11].y;	
			YChange = value[11].y;
		}

		//print(Ydelta);
	
		//new_pos = new SFVec3f(XChange*10, YChange*10, 0);
	}  