import SceneManager from './SceneManager';

export default container => {
    
    const canvas = createCanvas(document, container);
    //const canvas2d = createCanvas2d(document, container);
    const sceneManager = new SceneManager(canvas);
    //const hudManager = new HudManager(sceneManager.rendererGet());

    let canvasHalfWidth;
    let canvasHalfHeight;


    bindEventListeners();
    render();
    
    function createCanvas(document, container) {
        const canvas = document.createElement("canvas");    
        container.appendChild(canvas);   
        return canvas;
    }

    function bindEventListeners() {
        window.onresize = resizeCanvas;
        //window.onmousemove = mouseMove;
        resizeCanvas();	
    }

    function resizeCanvas() {        
        canvas.style.width = '100%';
        canvas.style.height= '100%';
        
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;




        canvasHalfWidth = Math.round(canvas.offsetWidth/2);
        canvasHalfHeight = Math.round(canvas.offsetHeight/2);

        sceneManager.onWindowResize();
        //hudManager.onWindowResize()
    }

    function mouseMove({screenX, screenY}) {
        sceneManager.onMouseMove(screenX-canvasHalfWidth, screenY-canvasHalfHeight);
    }

    function render(time) {
        
        sceneManager.update();
        //hudManager.update();
        requestAnimationFrame(render);
    }
}
/*
import * as THREE from 'three';
import { StereoEffect } from 'three/examples/jsm/effects/StereoEffect.js';
export default container => {
    const canvas = createCanvas(document, container);
    var scene = new THREE.Scene();
  
    // Create shortcuts for window size.
    var width = window.innerWidth;
    var height = window.innerHeight;
    // Create camera and move it a bit further. Make it to look to origo.
    var camera = new THREE.PerspectiveCamera( 75, width / height, 0.001, 50 );
    camera.position.y = 0;
    camera.position.z = 0;
    camera.position.x = 0;
      //camera.lookAt(scene.position);
    
    // Create renderer.
    var renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setSize( width, height );
    renderer.autoClear = false;
    //document.body.appendChild(renderer.domElement);
    var effect = new StereoEffect( renderer );
    effect.setSize( width, height );
    effect.eyeSeparation = 0.064;

    container.appendChild(renderer.domElement);
  
    // Let there be light!
    var light = new THREE.DirectionalLight( 0xffffff, 1 );
      light.position.set( -1, 2, 4 );
      scene.add(light);
  
    // And the box.
    var geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
    var material = new THREE.MeshPhongMaterial( {color: 0xcccccc} );
    var cube = new THREE.Mesh( geometry, material );
    cube.position.set(0,0,-0.25);
    scene.add( cube );
  
  
    
    
    // Ok, now we have the cube. Next we'll create the hud. For that we'll
    // need a separate scene which we'll render on top of our 3D scene. We'll
    // use a dynamic texture to render the HUD.
    
    // We will use 2D canvas element to render our HUD.  
    //var hudCanvas = canvas;//document.createElement('canvas');
    
    // Again, set dimensions to fit the screen.
    canvas.width = width;
    canvas.height = height;
  
    // Get 2D context and draw something supercool.
    var hudBitmap = canvas.getContext('2d');
      hudBitmap.font = "Normal 60px Arial";
    hudBitmap.textAlign = 'start';
    hudBitmap.fillStyle = "rgba(245,0,0,0.75)";
    hudBitmap.fillText('Initializing......................12345378', 0 , height/2 );
    //hudBitmap.scale(0.1,0.1);
    //console.log(hudBitmap.position);  
    //console.log(cube.position); 
    // Create the camera and set the viewport to match the screen dimensions.
    //var cameraHUD = new THREE.OrthographicCamera(-width/2, width/2, height/2, -height/2, 0, 500 );
    //var cameraHUD = new THREE.PerspectiveCamera( 45, width / height, 0.005, 50 );
    //cameraHUD.position.y = 100;
    //cameraHUD.position.z = 1;
    //cameraHUD.position.x = 100;
    //cameraHUD.lookAt(scene.position);
    //var cameraHUD = new THREE.OrthographicCamera(-width*2, width*2, height*2, -height*2, 0, 500 );
 


    // Create also a custom scene for HUD.
    //var sceneHUD = scene;//new THREE.Scene();
    //cameraHUD.lookAt(sceneHUD.position);
      // Create texture from rendered graphics.
      var hudTexture = new THREE.Texture(canvas);
      hudTexture.needsUpdate = true;
    
    // Create HUD material.
    var material = new THREE.MeshBasicMaterial( {map: hudTexture, side: THREE.DoubleSide} );
    material.transparent = true;
    
    // Create plane to render the HUD. This plane fill the whole screen.
    var planeGeometry = new THREE.PlaneGeometry( width/3000, height/3000 );
    var plane = new THREE.Mesh( planeGeometry, material );
    plane.position.set(0,0,-0.15);
    //plane.scale.set(0.00035,0.0035,0.00035);
    scene.add( plane );
    
    //console.log(canvas.width);
    //console.log(hudCanvas.width );
    
    
    // Now we have two scenes. Only thing we need now is a render loop!
    function animate() {
      
      // Rotate cube.
      cube.rotation.x += 0.01;
      cube.rotation.y -= 0.01;
      cube.rotation.z += 0.03;
  
      // Update HUD graphics.
      //hudBitmap.clearRect(0, 0, width, height);
      //hudBitmap.fillText("RAD [x:"+(cube.rotation.x % (2 * Math.PI)).toFixed(1)+", y:"+(cube.rotation.y % (2 * Math.PI)).toFixed(1)+", z:"+(cube.rotation.z % (2 * Math.PI)).toFixed(1)+"]" , width / 2, height /2);
 
      //hudTexture.needsUpdate = true;
      
      // Render scene.
      //renderer.render(scene, camera);
      effect.render(scene, camera);
      // Render HUD on top of the scene.
      //renderer.render(sceneHUD, cameraHUD);
      //effect.render(sceneHUD, camera);
       // effect.render(sceneHUD, cameraHUD);
      // Request new frame.
      requestAnimationFrame(animate);
  
    };
    //
    // Start animation.
    
    animate();
    bindEventListeners();

    let canvasHalfWidth;
    let canvasHalfHeight;
    
    
    //render();
    


    function createCanvas(document, container) {
        const canvas = document.createElement("canvas");    
        //container.appendChild(canvas);   
        return canvas;
    }


    function bindEventListeners() {
        window.onresize = resizeCanvas;
        //window.onmousemove = mouseMove;
        resizeCanvas();	
    }

    function resizeCanvas() {     
        canvas.style.width = '100%';
        canvas.style.height= '100%';
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;


        camera.aspect = canvas.width / canvas.height;
        camera.updateProjectionMatrix();

        effect.setSize( canvas.width, canvas.height);
        //canvasHalfWidth = Math.round(canvas.offsetWidth/2);
        //canvasHalfHeight = Math.round(canvas.offsetHeight/2);

    }



}*/