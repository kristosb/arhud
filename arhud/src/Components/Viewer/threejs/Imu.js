import * as THREE from 'three';
var degtorad = Math.PI / 180; // Degree-to-Radian conversion

function compassHeading( alpha, beta, gamma ) {

  var _x = beta  ? beta  * degtorad : 0; // beta value
  var _y = gamma ? gamma * degtorad : 0; // gamma value
  var _z = alpha ? alpha * degtorad : 0; // alpha value

  var cX = Math.cos( _x );
  var cY = Math.cos( _y );
  var cZ = Math.cos( _z );
  var sX = Math.sin( _x );
  var sY = Math.sin( _y );
  var sZ = Math.sin( _z );

  // Calculate Vx and Vy components
  var Vx = - cZ * sY - sZ * sX * cY;
  var Vy = - sZ * sY + cZ * sX * cY;

  // Calculate compass heading
  var compassHeading = Math.atan( Vx / Vy );

  // Convert compass heading to use whole unit circle
  if( Vy < 0 ) {
    compassHeading += Math.PI;
  } else if( Vx < 0 ) {
    compassHeading += 2 * Math.PI;
  }

  return compassHeading * ( 180 / Math.PI ); // Compass Heading (in degrees)

}
///////
function getScreenTransformationMatrix( screenOrientation ) {
	var orientationAngle = screenOrientation ? screenOrientation * degtorad : 0;

	var cA = Math.cos( orientationAngle );
	var sA = Math.sin( orientationAngle );

	// Construct our screen transformation matrix
	var r_s = [
		[cA,    -sA,    0],
		[sA,    cA,     0],
		[0,     0,      1]
	];

	return r_s;
}
function getWorldTransformationMatrix() {
	var x = 90 * degtorad;

	var cA = Math.cos( x );
	var sA = Math.sin( x );

	// Construct our world transformation matrix
	var r_w = [
		[1,     0,    0],
		[0,     cA,   -sA],
		[0,     sA,   cA]
	];

	return r_w;
}

function matrixMultiply( a, b ) {
	var final = 
    [
	[a[0][0] * b[0][0] + a[0][1] * b[1][0] + a[0][2] * b[2][0],
	 a[0][0] * b[0][1] + a[0][1] * b[1][1] + a[0][2] * b[2][1],
	 a[0][0] * b[0][2] + a[0][1] * b[1][2] + a[0][2] * b[2][2] ],
    [a[1][0] * b[0][0] + a[1][1] * b[1][0] + a[1][2] * b[2][0],
	 a[1][0] * b[0][1] + a[1][1] * b[1][1] + a[1][2] * b[2][1],
	 a[1][0] * b[0][2] + a[1][1] * b[1][2] + a[1][2] * b[2][2] ],
    [a[2][0] * b[0][0] + a[2][1] * b[1][0] + a[2][2] * b[2][0],
	 a[2][0] * b[0][1] + a[2][1] * b[1][1] + a[2][2] * b[2][1],
	 a[2][0] * b[0][2] + a[2][1] * b[1][2] + a[2][2] * b[2][2]]
    ];

	return final;
}
const screenTransform = getScreenTransformationMatrix( -90 ); // r_s
const worldTransform = getWorldTransformationMatrix();
//////////////////////////////
  function degToRad(deg){
    return deg*(Math.PI/180);
}

function radToDeg(rad){
    return rad*(180/Math.PI);
}

function eulerAngles(heading,attitude,bank){

    //Convert everything to radians
    heading = degToRad(heading);
    attitude = degToRad(attitude);
    bank = degToRad(bank);

    //Cos and sin
    var ch = Math.cos(heading),
        sh = Math.sin(heading),
        ca = Math.cos(attitude),
        sa = Math.sin(attitude),
        cb = Math.cos(bank),
        sb = Math.sin(bank);

    //Create matrix
    var matrix1 = [
        [  ch*ca , -ch*sa*cb + sh*sb , ch*sa*sb + sh*cb  ],
        [   sa   ,       ca*cb       ,      -ca*sb       ],
        [ -sh*ca , sh*sa*cb + ch*sb  , -sh*sa*sb + ch*cb ]
    ];

    var matrix2 = matrixMultiply( matrix1, screenTransform ); // R_w
    var matrix = matrixMultiply( matrix2, worldTransform ); // R_w
    //console.log(matrix1);
    //console.log(matrix);
    //Singularity fix
    //http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToEuler/index.htm
    //North pole
    if( matrix[1][0]>0.998 ){
        heading = Math.atan2( -matrix[2][0], matrix[0][0] )+ Math.PI;//Math.atan2( matrix[0][2], matrix[2][2] );
        attitude = Math.asin( matrix[1][0] );//Math.PI/2;
        bank = 0;//Math.atan2( -matrix[1][2], matrix[1][1] );//0
        //console.log("s1");
    //South pole
    } else if( matrix[1][0]<-0.998 ){
        heading = Math.atan2( -matrix[2][0], matrix[0][0] )+ Math.PI;//Math.atan2( matrix[0][2], matrix[2][2] );
        attitude = -Math.PI/2;
        bank = 0;
        //console.log("s2");
    } else {
        heading = Math.atan2( -matrix[2][0], matrix[0][0] )+ Math.PI;
        attitude = Math.asin( matrix[1][0] );
        bank = Math.atan2( -matrix[1][2], matrix[1][1] );
    }

    //Turn radians back to degrees and return
    return {
        "HEADING":  radToDeg( heading ),
        "ATTITUDE": radToDeg( attitude ),
        "BANK": radToDeg( bank )
    };
}
function getRotationMatrix( alpha, beta, gamma ) {

    var _x = beta  ? beta  * degtorad : 0; // beta value
    var _y = gamma ? gamma * degtorad : 0; // gamma value
    var _z = alpha ? alpha * degtorad : 0; // alpha value
  
    var cX = Math.cos( _x );
    var cY = Math.cos( _y );
    var cZ = Math.cos( _z );
    var sX = Math.sin( _x );
    var sY = Math.sin( _y );
    var sZ = Math.sin( _z );
  
    //
    // ZXY rotation matrix construction.
    //
  
    var m11 = cZ * cY - sZ * sX * sY;
    var m12 = - cX * sZ;
    var m13 = cY * sZ * sX + cZ * sY;
  
    var m21 = cY * sZ + cZ * sX * sY;
    var m22 = cZ * cX;
    var m23 = sZ * sY - cZ * cY * sX;
  
    var m31 = - cX * sY;
    var m32 = sX;
    var m33 = cX * cY;
  
    /*return [
      m11,    m12,    m13,
      m21,    m22,    m23,
      m31,    m32,    m33
    ];*/
    const rotMat = new THREE.Matrix4();
    rotMat.set(
        m11,    m12,    m13,
        m21,    m22,    m23,
        m31,    m32,    m33
    );
  return rotMat;
  };

  function eulerFromRotation(x,y,z){
    var rot =  getRotationMatrix(x,y,z);
    const euler = new THREE.Euler();
    //const rotMat = new THREE.Matrix4();
    euler.setFromRotationMatrix(rot);
    return euler;
  }


class imu {
    constructor(){
        this._yaw = 0;
        this._pitch = 0;
        this._roll = 0;
        this._compass = 0;
        this._updated = false;
        var that = this;
        var objOrientation = {
			"HEADING": 0,
			"ATTITUDE": 0,
			"BANK": 0
		};
        function handleOrientation(event) {
            objOrientation = eulerAngles(event.alpha,event.beta,event.gamma);
            //var eu = eulerFromRotation(event.alpha,event.beta,event.gamma);
            //that._compass = compassHeading(event.alpha,event.beta,event.gamma);
            that._yaw =  objOrientation.HEADING; //360- event.alpha;//
            that._roll = -objOrientation.BANK;  
            that._pitch = objOrientation.ATTITUDE;
            that._updated  = true;
          }
        window.addEventListener("deviceorientation", handleOrientation, true);
    }
    get yaw(){
        return this._yaw;
    }
    get pitch(){
        return this._pitch;
    }
    get roll(){
        return this._roll;
    }
    get compass(){
        return this._compass;
    }
    get updated(){
        if (this._updated){
            this._updated = false;
            return true;
        } else return false;   
    }
}
export default {imu}