import * as THREE from 'three'

export default function hud(scene,canvas){
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }
    var hudTexture = new THREE.Texture(canvas);
    hudTexture.needsUpdate = true;
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    material.transparent = true;
    var planeGeometry = new THREE.PlaneGeometry( 0.4, 0.4 );
    var plane = new THREE.Mesh( planeGeometry, material );
    plane.position.set(0,0,-0.15);
    scene.add( plane );

	function update(time) {

    }

    return {
        update,
    }
}