import * as THREE from 'three'
import * as HUD from './HudControls';
export default function hud(scene,canvas){
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }
    console.log(screenDimensions);
    var count = 0;
    var elapsed, now;
    var then= 0;
    var interval=0.05;
    console.log('win'+window.innerHeight);
    var style = `rgba(
        ${0xa3},
        ${0xff},
        ${0x00},
        ${0xFF}`;
    var hudCanvas = document.createElement('canvas');
    hudCanvas.width = screenDimensions.width/2; //keep it square assuming default 300x150
    hudCanvas.height = screenDimensions.height;
    var hudBitmap = hudCanvas.getContext('2d');
    //flipHoriz(hudBitmap);    
    hudBitmap.fillStyle = style;
    hudBitmap.strokeStyle = style;
    hudBitmap.globalAlpha = 0.75;
    var hudElements = {
        info: new HUD.hudSimpleText(hudBitmap, 10, 20,16),
        border: new HUD.hudBorder(hudBitmap,hudCanvas.width,hudCanvas.height),
        crosshair: new HUD.crosshair(hudBitmap,hudCanvas.width,hudCanvas.height),
        horizon: new HUD.horizon(hudBitmap,hudCanvas.width,hudCanvas.height),
        compass: new HUD.compass(hudBitmap,hudCanvas.width,hudCanvas.height)
    };
    hudElements.border.lineWidth = 5;
    hudElements.crosshair.lineWidth = 2;
    //hudElements.border.draw();
    Object.values(hudElements).forEach(val => {val.draw()});
 

    var hudTexture = new THREE.Texture(hudCanvas);
    //hudTexture.name = "hudCanvas";
    hudTexture.needsUpdate = true;
    var material = new THREE.MeshBasicMaterial({map: hudTexture} );//{color: 0xffff00, side: THREE.DoubleSide} );
    material.transparent = true;
    var planeGeometry = new THREE.PlaneGeometry( 0.4, 0.4 );
    var plane = new THREE.Mesh( planeGeometry, material );
    plane.name = "hudPlane";
    plane.position.set(0,0,-0.15);
    scene.add( plane );
    var vx = 5;
    var vy = 2;
    var angle = 0;
    var yaw =0;
    var magnet = 10;
    const minc = 0.1;
    var magnetInc = minc;
    function leading_zeros(dt) 
    { 
        return (dt < 10 ? '0' : '') + dt;
    }
    
    function draw() {
        hudBitmap.clearRect(0,0,screenDimensions.width/2,screenDimensions.height);
        
        var d = new Date();   
        hudElements.info.text = `TIME:${leading_zeros(d.getHours())}:${leading_zeros(d.getMinutes())}:${leading_zeros(d.getSeconds())}`;
        
        //hudTexture.needsUpdate = true;
        //hudBitmap.clearRect(0,0, 300, 300);
        hudElements.crosshair.x = hudElements.crosshair.x  +vx;
        hudElements.crosshair.y = hudElements.crosshair.y  +vy;
        if (hudElements.crosshair.y+ vy > screenDimensions.height || hudElements.crosshair.y + vy < 0) {
            vy = -vy;
          }
        if (hudElements.crosshair.x + vx > screenDimensions.width/2 || hudElements.crosshair.x+ vx < 0) {
            vx = -vx;
        }

        hudElements.info.draw();
        hudElements.crosshair.draw();

        if (magnet>25)magnetInc = -minc;
        if (magnet< 5)magnetInc = minc;
        magnet += magnetInc;
        hudElements.compass.angle = magnet;
        hudElements.compass.draw();

        if (angle>2.9)yaw = -0.02;
        if (angle<0.1)yaw = 0.02;
        angle += yaw;
        hudElements.horizon.tilt = Math.sin(Math.PI*angle/2)*90;
        hudElements.horizon.draw();

        hudTexture.needsUpdate = true;
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
    function getCanvas(){
         return hudCanvas;
    }
    return {
        update,
        getCanvas,
        draw
    }
}