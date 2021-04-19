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
    var interval=0.1;
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
        info: new HUD.hudSimpleText(hudBitmap, 10, 20),
        border: new HUD.hudBorder(hudBitmap,hudCanvas.width,hudCanvas.height),
        crosshair: new HUD.crosshair(hudBitmap,hudCanvas.width,hudCanvas.height)
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
    
    function leading_zeros(dt) 
    { 
        return (dt < 10 ? '0' : '') + dt;
    }
    
    function draw() {
        hudBitmap.clearRect(0,0,screenDimensions.width/2,screenDimensions.height);
        //count++;
        var d = new Date();   
        hudElements.info.text = `${leading_zeros(d.getHours())}:${leading_zeros(d.getMinutes())}:${leading_zeros(d.getSeconds())}`;
        
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
        //hudElements.info.x= hudElements.crosshair.x-30;
        //hudElements.info.y= hudElements.crosshair.y-30;
        hudElements.info.draw();
        hudElements.crosshair.draw();
        hudTexture.needsUpdate = true;
        //console.log(screenDimensions.width);
        
        //hudTexture.needsUpdate = true;
        /*ball.draw();
        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.y + ball.vy > screenDimensions.height || ball.y + ball.vy < 0) {
            ball.vy = -ball.vy;
          }
        if (ball.x + ball.vx > screenDimensions.width || ball.x + ball.vx < 0) {
            ball.vx = -ball.vx;
        }*/
        //console.log(hudCanvas);
        //var a =scene.getObjectByName("hudPlane").material.map;
        //console.log(a);
        //console.log(scene.getObjectByName("hudPlane").material.map.minimaps);
        //console.log(scene.getObjectByName("hudPlane").material.map.image);
      }
    //draw();
    //draw();
    //draw();
    //draw();
    //setInterval(draw, 5000);

    
      //canvas.addEventListener('mouseover', function(e) {
        
      //});
      
      //canvas.addEventListener('mouseout', function(e) {
     //   window.cancelAnimationFrame(raf);
      //});
      
      
      //window.requestAnimationFrame(draw);
    //hudAnimate();
    /*function hudAnimate(){
        hudBitmap.clearRect(0,0,300,300);
        //hudCanvas.clearRect(0,0, hudCanvas.width, hudCanvas.height);
        hudElements.info.text = count.toString();
        Object.values(hudElements).forEach(val => {val.draw()});
        count= count +1;
        //console.log("anim");
        window.requestAnimationFrame(hudAnimate);
    }*/
    //window.requestAnimationFrame(hudAnimate);
    //hudAnimate();
///////////////////////
/*var raf;
var stop = false;
var frameCount = 0;
//this.$results = $("#results");
var fps = 5; 
var fpsInterval=1000/this.fps;
var startTime = 0;
var now = Date.now();
var then = Date.now();
var elapsed = 0;

//startAnimating(1);
//}
//function startAnimating(fps) {
    fps = 1;
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    console.log(startTime);
    
//}
function  animate( ){

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame
    //console.log("noanim");
    if ( elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but...
        // Also, adjust for fpsInterval not being multiple of 16.67
        then = now - (elapsed % fpsInterval);

        // draw stuff here

        
        // TESTING...Report #seconds since start and achieved fps.
        //var sinceStart = this.now - this.startTime;
        //var currentFps = Math.round(1000 / (sinceStart / ++this.frameCount) * 100) / 100;
        //$results.text("Elapsed time= " + Math.round(sinceStart / 1000 * 100) / 100 + " secs @ " + currentFps + " fps.");
        //hudAnimate.call(scope);
        hudBitmap.clearRect(0,0,300,300);
        //hudCanvas.clearRect(0,0, hudCanvas.width, hudCanvas.height);
        hudElements.info.text = count.toString();
        Object.values(hudElements).forEach(val => {val.draw()});
        count= count +1;
        console.log("anim"+count);
        
    }
    ////
}
//animate();
/////////////

*/


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