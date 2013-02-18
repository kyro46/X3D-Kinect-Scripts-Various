                var joints = new Array();
                
                function create_skeleton(num_joints) 
                {
                    for(var i=0; i<num_joints; ++i)
                    {
                        var transform = Browser.currentScene.createNode("Transform");
                        var shape = Browser.currentScene.createNode("Shape");
                        var box = Browser.currentScene.createNode("Box");
                        var appearance = Browser.currentScene.createNode("Appearance");
                        var material = Browser.currentScene.createNode("Material");

                        material.diffuseColor = SFColor(Math.random(), Math.random(), Math.random());
                        appearance.material = material;
                        shape.geometry = box;
                        shape.appearance = appearance;
                        transform.children[0] = shape;
                        transform.scale = SFVec3f(0.1, 0.1, 0.1);

                        joints[i] = transform;

                        skeleton.children[skeleton.children.length] = transform;
                    }
                }
                        
                var xnjoints = 
                {
                    "head":0,   
                    "spine":1,   
                    "shoulder_center":2,   
                    "hip_center":3,  
                    "left_shoulder":4,   
                    "left_ellbow":5,   
                    "left_wrist":6,  
                    "left_hand":7,   
                    "right_shoulder":8,   
                    "right_ellbow":9,   
                    "right_wrist":10,   
                    "right_hand":11,   
                    "left_hip":12,   
                    "left_knee":13,   
                    "left_ankle":14,   
                    "left_foot":15,   
                    "right_hip":16,   
                    "right_knee":17,   
                    "right_ankle":18,   
                    "right_foot":19,   
                };
                
                function initialize()
                {
                    skeleton.render = false;
                    create_skeleton(20);
                }
                
                var lines_temp;
                
                function draw_limb(j1, j2)
                {
                    lines_temp.coord.point[lines_temp.coord.point.length] = joints[j1].translation;
                    lines_temp.coord.point[lines_temp.coord.point.length] = joints[j2].translation;
                    lines_temp.vertexCount[lines_temp.vertexCount.length] = 2;
                }

                function skeleton_changed(value, t)
                {
                    skeleton.render = true;
                    notice.render = false;
                
                    for(var i=0; i<joints.length; ++i)
                    {
                        joints[i].translation = SFVec3f(value[i].x*10, value[i].y*10, -value[i].z*10);
                    }
                    
                    lines_temp = Browser.currentScene.createNode('LineSet');
                    lines_temp.coord = Browser.currentScene.createNode('Coordinate3D');
                    
                    draw_limb(xnjoints.head, xnjoints.shoulder_center);

					draw_limb(xnjoints.shoulder_center, xnjoints.left_shoulder);
                    draw_limb(xnjoints.left_shoulder, xnjoints.left_ellbow);
                    draw_limb(xnjoints.left_ellbow, xnjoints.left_wrist);
					draw_limb(xnjoints.left_ellbow, xnjoints.left_wrist);
					draw_limb(xnjoints.left_wrist, xnjoints.left_hand);
					
					draw_limb(xnjoints.shoulder_center, xnjoints.right_shoulder);
                    draw_limb(xnjoints.right_shoulder, xnjoints.right_ellbow);
                    draw_limb(xnjoints.right_ellbow, xnjoints.right_wrist);
					draw_limb(xnjoints.right_ellbow, xnjoints.right_wrist);
					draw_limb(xnjoints.right_wrist, xnjoints.right_hand);

					
					draw_limb(xnjoints.shoulder_center, xnjoints.spine);
					draw_limb(xnjoints.spine, xnjoints.hip_center);
					
					draw_limb(xnjoints.hip_center, xnjoints.left_hip);
					draw_limb(xnjoints.left_hip, xnjoints.left_knee);
					draw_limb(xnjoints.left_knee, xnjoints.left_ankle);
					draw_limb(xnjoints.left_ankle, xnjoints.left_foot);
					
					draw_limb(xnjoints.hip_center, xnjoints.right_hip);
					draw_limb(xnjoints.right_hip, xnjoints.right_knee);
					draw_limb(xnjoints.right_knee, xnjoints.right_ankle);
					draw_limb(xnjoints.right_ankle, xnjoints.right_foot);					
					
                    lines.geometry = lines_temp;
                }
				