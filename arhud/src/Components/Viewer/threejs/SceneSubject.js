import * as THREE from 'three'

export default function scene(scene) {    
    const group = new THREE.Group();
    const boxGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const boxGeometrySmall = new THREE.BoxGeometry(0.00002, 0.00002, 0.00002);
    function makeInstance(geometry, color, x,y,z) {
        const material = new THREE.MeshPhongMaterial({color});
    
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        
        //cube.rotation.x = 0.2;
        cube.position.x = x;
        cube.position.y = y;
        cube.position.z = z;
        
        return cube;
      }
    const cubes = [
    makeInstance(boxGeometry, 0x44aa88,  0, 0, -0.15),
    makeInstance(boxGeometrySmall, 0xff0000,  -0.032, 0, -0.0002),
    makeInstance(boxGeometrySmall, 0x00ff00,  0.032, 0, -0.0002)
      ];
    //group.add(boxGeometry);
    //scene.add(group);


    group.rotation.z = Math.PI/4;

    const speed = 0.5;
    const textureOffsetSpeed = 0.02;

    function deformGeometry(geometry) {
        /*for (let i=0; i<geometry.vertices.length; i+=2) {
            const scalar = 1 + Math.random()*0.8;
            geometry.vertices[i].multiplyScalar(scalar)
        }*/

        return geometry;
    }

    function update(time) {
        const angle = time*speed;

        //group.rotation.y = angle;
        //cubes[0].rotation.x = angle;
        //cubes[0].rotation.y = angle;
        //subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed;

        //subjectWireframe.material.color.setHSL( Math.sin(angle*2), 0.5, 0.5 );
        
        //const scale = (Math.sin(angle*8)+6.4)/5;
        //subjectWireframe.scale.set(scale, scale, scale)
    }

    return {
        update
    }
}