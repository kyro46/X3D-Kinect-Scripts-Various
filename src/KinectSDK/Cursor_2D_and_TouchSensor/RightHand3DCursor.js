			
			var joints = new Array();

			function initialize() 
			{
				//print("RightHand3DCursor START");
				//cursor.render = false;
				
				 for(var i=0; i<24; ++i)
                    {
                        var transform = Browser.currentScene.createNode("Transform");
                        var text = Browser.currentScene.createNode("Text");
						text.string = new MFString("RightHand3DCursor");
                        transform.children[0] = text;
						transform.translation = SFVec3f(0, 1, 0);
                        transform.scale = SFVec3f(0.4, 0.4, 0.4);

                        joints[i] = transform;
                    }
			}  
    
			function skeleton_changed(value, t)
			{
				cursor.render = true;
                for(var i=0; i<24; ++i)
                {
                	//Set Z to zero to get a 2D-Cursor
                    joints[i].transform = SFVec3f(value[i].x*10, value[i].y*10, 0);
                }
                //[11] is the right hand
				new_pos = joints[11].transform;

			}  

			function shutdown()
			{
				//print("RightHand3DCursor END");
			}    