import * as THREE from 'three'


export default function scene(scene) {    

    /*const lightIn = new THREE.PointLight("#4CAF50", 30);
    const lightOut = new THREE.PointLight("#2196F3", 10);
    lightOut.position.set(40,20,40);*/
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    //light.position.set(-1, 2, 4);
    light.position.set(-1, 2, 4);
    scene.add(light);
    //scene.add(lightIn);
    //scene.add(lightOut);
    
    const rad = 80;

    function update(time) {
        //const x = rad * Math.sin(time*0.2)
        //lightOut.position.x = x;
    }

    return {
        update
    }
}