import * as THREE from 'three'
import * as HUD from './HudControls';
export default function hud(scene,canvas){
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }
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
    hudElements.crosshair.lineWidth = 3;
    Object.values(hudElements).forEach(val => {val.draw()});

    var hudTexture = new THREE.Texture(hudCanvas);
    hudTexture.needsUpdate = true;
    var material = new THREE.MeshBasicMaterial({map: hudTexture} );//{color: 0xffff00, side: THREE.DoubleSide} );
    material.transparent = true;
    var planeGeometry = new THREE.PlaneGeometry( 0.4, 0.4 );
    var plane = new THREE.Mesh( planeGeometry, material );
    plane.position.set(0,0,-0.15);
    scene.add( plane );

    function flipHoriz(drawing){
        drawing.translate(screenDimensions.width/2,0);
        drawing.scale(-1, 1);
    }

	function update(time) {

    }

    return {
        update,
    }
}