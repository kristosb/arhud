import * as THREE from 'three'
import * as HUD from './HudControls';
import * as SIM from './hudDataSimulation';
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
        info: new HUD.hudSimpleText(hudBitmap, hudCanvas.width/2 -30, hudCanvas.height - 5,16),
        border: new HUD.hudBorder(hudBitmap,hudCanvas.width,hudCanvas.height),
        crosshair: new HUD.crosshair(hudBitmap,hudCanvas.width,hudCanvas.height),
        //horizon: new HUD.horizon(hudBitmap,hudCanvas.width,hudCanvas.height),
        compass: new HUD.compass(hudBitmap,hudCanvas.width,hudCanvas.height),
        pitchLader: new HUD.pitchLader(hudBitmap,hudCanvas.width,hudCanvas.height)
    };
    //hudElements.border.lineWidth = 5;
    hudElements.crosshair.lineWidth = 2;
    //hudElements.compass.rangeScale = 1;
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


    var movePoint = new SIM.bouncer(screenDimensions.width,screenDimensions.height);
    var tiltHorizon = new SIM.sineEasing();
    var rotCompass = new SIM.linearEasing360(1);
    var pitch = new SIM.linearEasing360(1);

    function draw() {
        hudBitmap.clearRect(0,0,screenDimensions.width/2,screenDimensions.height);
        
        // display time
        hudElements.info.text = SIM.getTimeString();

        // simulate crosshair movement and display
        movePoint.nextPoint();
        hudElements.crosshair.x = movePoint.x;
        hudElements.crosshair.y = movePoint.y;

        // simulate horizon tilt
        //hudElements.horizon.tilt = tiltHorizon.nextPoint();

        // simulate compass rotation
        hudElements.compass.angle = 350;//rotCompass.nextPoint();

        // simulate pitch and roll
        hudElements.pitchLader.rot = rotCompass.nextPoint();
        hudElements.pitchLader.angle = 10;//pitch.nextPoint();
        
        // redraw
        Object.values(hudElements).forEach(val => {val.draw()});

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