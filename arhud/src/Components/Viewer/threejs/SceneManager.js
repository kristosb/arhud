import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';
import { StereoEffect } from './StereoEffect.js';
import Hud from './Hud';

export default function canvas(canvas)  {
    var preserveSize = true;

    const clock = new THREE.Clock();
    const origin = new THREE.Vector3(0,0,0);

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }
    
    const mousePosition = {
        x: 0,
        y: 0
    }

    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);

    var effect = new StereoEffect( renderer );
    effect.setSize( screenDimensions.width, screenDimensions.height );
    effect.setEyeSeparation(0.064);
    effect.setOffset(0);
    var offset = 0;
    scene.add(camera);
    console.log(screenDimensions);
    var hud = new Hud(scene,canvas);
    if (preserveSize){
        // remember these initial values
        var tanFOV = Math.tan( ( ( Math.PI / 180 ) * camera.fov / 2 ) );
        var windowHeight = 150;//window.innerHeight;
    }
    window.addEventListener("keypress", onKeyPress);

    function getOffset(){
        const pxMm = 0.254/454;
        return (screenDimensions.width -300)*pxMm;
    }
    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('black');

        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;

        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);
        renderer.autoClear = false;     //needed for canvas2d overlayed
        renderer.gammaInput = true;
        renderer.gammaOutput = true; 
        
        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 90;
        const nearPlane = 0.0001;
        const farPlane = 20; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.focus = 3;
        camera.position.set(0, 0, 0);

        return camera;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new GeneralLights(scene),
            new SceneSubject(scene),
        ];
        return sceneSubjects;
    }


    function update() {
        const elapsedTime = clock.getElapsedTime();

        for(let i=0; i<sceneSubjects.length; i++)
            sceneSubjects[i].update(elapsedTime);
        //renderer.render(scene, camera);
        render();
    }
    function render() {
        //updateCameraPositionRelativeToMouse()
        effect.render( scene, camera );
    }
    function onKeyPress(ev) {
        let keycode = ev.which;
        if (
          (keycode >= 48 && keycode <= 57) ||
          (keycode >= 97 && keycode <= 122) ||
          (keycode >= 65 && keycode <= 90)
        ) {
            if(keycode == 49) {offset= offset +0.1;effect.setOffset(offset);}
            if(keycode == 50) {offset = offset -0.1;effect.setOffset(offset);}
            //if(keycode == 51) {camera.rotateY(Math.PI/360);}
            //if(keycode == 52) {camera.rotateY(-Math.PI/360);}
            console.log( offset);
        }
      }


    function updateCameraPositionRelativeToMouse() {
        camera.position.x += (  (mousePosition.x * 0.1) - camera.position.x ) * 0.1;
        camera.position.y += ( -(mousePosition.y * 0.1) - camera.position.y ) * 0.1;
        camera.lookAt(origin );
    }

    function onWindowResize() {
        const { width, height } = canvas;
        
        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        if (preserveSize){
            // adjust the FOV
            camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( height / windowHeight ) );
            effect.setOffset(getOffset());
        }

        camera.updateProjectionMatrix();
        effect.setSize( width, height);
        //camera.lookAt( scene.position );
        renderer.setSize(width, height);   
    }

    function onMouseMove(x, y) {
        mousePosition.x = x;
        mousePosition.y = y;
    }

    return {
        update,
        onWindowResize,
        onMouseMove
    }
}