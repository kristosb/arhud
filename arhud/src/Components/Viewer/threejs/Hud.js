import * as THREE from 'three';
import * as SGRAM from 'stereogram';
import IMU from './Imu.js';
function isMobileCheck() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
class orientationData {
    //sinulate on desktop or real IMU on mobile
    constructor(forceMobile =false){
        this.isMobile = isMobileCheck() || forceMobile;
        this.flightData = null
        if(this.isMobile) this.flightData = new IMU.imu();
        else this.flightData = new SGRAM.airplaneTelemetry();
    }
    get yaw(){
        return this.flightData.yaw;
    }
    get pitch(){
        return this.flightData.pitch;
    }
    get roll(){
        return this.flightData.roll;
    }
    next(){
        if(!this.isMobile) this.flightData.next();
    }
}
export default function hud(scene,canvas,planeSize = 0.5){

    //var size = 600;
    //if (window.innerHeight < size) 
    //size = window.innerHeight;
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }
    //console.log(screenDimensions);
    var elapsed, now;
    var then = 0;
    var interval=0.05;
    //console.log('win inner height'+window.innerHeight);
    var style = `rgba(
        ${0xa3},
        ${0xff},
        ${0x00},
        ${0xFF}`;
    var hudCanvas = document.createElement('canvas');
    hudCanvas.width = screenDimensions.width/2; //keep it square assuming default 300x150
    hudCanvas.height = screenDimensions.height;
    var hudBitmap = hudCanvas.getContext('2d');
    hudBitmap.lineWidth = 2;
    //flipHoriz(hudBitmap);   
    hudBitmap.fillStyle = style;
    hudBitmap.strokeStyle = style;
    hudBitmap.globalAlpha = 0.75;
    var hudElements = {
        info: new SGRAM.hudSimpleText(hudBitmap, hudCanvas.width/2 -30, hudCanvas.height - 5,16),
        border: new SGRAM.hudBorder(hudBitmap,hudCanvas.width,hudCanvas.height),
        crosshair: new SGRAM.crosshair(hudBitmap,hudCanvas.width,hudCanvas.height),
        horizon: new SGRAM.horizon(hudBitmap,hudCanvas.width,hudCanvas.height),
        compass: new SGRAM.compass(hudBitmap,hudCanvas.width,hudCanvas.height),
        pitchLader: new SGRAM.pitchLader(hudBitmap,hudCanvas.width,hudCanvas.height),
        //msgs: new SGRAM.hudWrappedText(hudBitmap,10,60,12)
    };
    //hudElements.msgs.txt = 'Smash 11, you have traffic 12 o\'clock, less than five miles. 727 descending to one four thousand.\n Copy. Smash is radar contact tally-ho.';
    //hudElements.border.lineWidth = 5;
    /*hudElements.crosshair.lineWidth = 2;
    hudElements.compass.lineWidth = 2;
    hudElements.pitchLader.lineWidth = 2;*/
    Object.values(hudElements).forEach(val => {val.draw()});
 

    var hudTexture = new THREE.Texture(hudCanvas);
    //hudTexture.name = "hudCanvas";
    hudTexture.needsUpdate = true;
    var material = new THREE.MeshBasicMaterial({map: hudTexture} );//{color: 0xffff00, side: THREE.DoubleSide} );
    material.transparent = true;
    var planeGeometry = new THREE.PlaneGeometry( planeSize, planeSize );
    var plane = new THREE.Mesh( planeGeometry, material );
    plane.name = "hudPlane";
    plane.position.set(0,0,-0.15);
    scene.add( plane );


    var movePoint = new SGRAM.bouncer(screenDimensions.width,screenDimensions.height);
    var flightData = new orientationData(false);

    function draw() {
        hudBitmap.clearRect(0,0,screenDimensions.width/2,screenDimensions.height);
        
        // display time
        hudElements.info.text = SGRAM.getTimeString();

        // simulate crosshair movement and display
        movePoint.nextPoint();
        hudElements.crosshair.x = movePoint.x;
        hudElements.crosshair.y = movePoint.y;

        // simulate incomming data
        flightData.next();

        // simulate compass rotation
        hudElements.compass.angle = flightData.yaw;
        hudElements.pitchLader.rot = flightData.roll;
        hudElements.pitchLader.angle = flightData.pitch;
        // redraw
        Object.values(hudElements).forEach(val => {val.draw()});

        hudTexture.needsUpdate = true;
        //if (imuData.updated) console.log(`compass = ${imuData.compass}, yaw = ${imuData.yaw},pitch = ${imuData.pitch},roll = ${imuData.roll}`);
      }


    function flipHoriz(drawing){
        drawing.translate(screenDimensions.width/2,0);
        drawing.scale(-1, 1);
    }

	function update(time) {
        //then = now;
        now = time;
        elapsed = now - then;
        if (elapsed > interval){
            draw();
            //console.log(time);
            then = now;
        }
    }
    return {
        update,
        draw
    }
}