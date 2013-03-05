X3D-Kinect-Scripts-Various
==========================

Various Scripts and belonging Java(script)code to be used with InstantReality (IR) (http://www.instantreality.org/). Tested with version 2.2.0.24818.
Eclipse Project to benefit from Eclipse syntax colouring and autoformat for java, js and - with new file assoc - x3d. 
Dependency: instantreality.jar (included in build path, suggesting standardinstallationpath was used).
Can't get new InstantReality versions to work with OpenNI anymore (see SkeletonLogger Repository). Kinect for Windows SDK 1.6 used instead.

No fancy magic super code here, just a little playing around with X3D.

Nodeskeleton_+_Cursor.x3d
* Renders a Skeleton as used in the Kinect SDK, Codebase is the old Kinectsample from InstantReality (http://www.instantreality.org/kinect/)

Nodeskeleton.js
* Renders a Skeleton as used in the Kinect SDK
* Used in
 ** Nodeskeleton_+_Cursor.x3d

RightHand3DCursor.js
* Uses JointPositions and delivers a single SFVec3f for translationspurposes
* Used in
 ** Nodeskeleton_+_Cursor.x3d
 ** 2DCursor.x3d with slight adjusments
 ** 2DCursorInteractive.x3d

2DCursor.x3d
* Creates a 2D-Cursor controlled via kinect to interact with the sensors in the scene (based on ir_userbody.wrl from IR-Tutorials)

TouchDebugOutput.js
* Prints the state of a sensor, non generic
* Used in
 ** 2DCursor.x3d
 ** 2DCursorInteractive.x3d

2DCursorInteractive.x3d
* Previous shown 2D-Cursor plus interactive adding and deleting rotating Objects (see dynamic_box_04.x3d in IR-Tutorials)

Cave-head-flystick.x3d
* Wraps the scene and configures the VR-Cluster (©Richard Müller, IWI Leipzig)


Next: Interaction with animated context menu