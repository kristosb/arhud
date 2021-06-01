//console.log("test");
      //stereogram.test();
      //console.log(stereogram.getTimeString());
      const canvas = document.createElement("canvas");   
      canvas.width = window.innerWidth;//document.body.clientWidth; //document.width is obsolete
      canvas.height = window.innerHeight;//document.body.clientHeight; //document.height is obsolete

      document.body.appendChild(canvas); 
      //const canvas2d = document.createElement("canvas");
      const screenDimensions = {
        width: canvas.width,
        height: canvas.height
      }
      var preserveSize = true;
      const clock = new THREE.Clock();
      const scene = new THREE.Scene();
      scene.background = new THREE.Color('black');
      const renderer = buildRender(screenDimensions);
      const camera = buildCamera(screenDimensions);
      document.body.appendChild( renderer.domElement );
      const light = new THREE.DirectionalLight(0xFFFFFF, 1);
      light.position.set(-1, 2, 4);
      scene.add(light);
      
      console.log(canvas.height,canvas.width);
      console.log(window.innerHeight,window.innerWidth);
      var hud = new hud(scene,canvas,0.5);
      var viewer = new stereogram.StereoButton(renderer);
      viewer.fullSize = false;
      //viewer.setSize( window.innerWidth, window.innerHeight );
      //viewer.enableStereo();
      document.body.appendChild( viewer.createButton());

      if (preserveSize){
        // remember these initial values
        var tanFOV = Math.tan( ( ( Math.PI / 180 ) * camera.fov / 2 ) );
        var windowHeight = 150;//window.innerHeight;
    }

      const geometry = new THREE.BoxGeometry(0.2,0.2,0.2);
      const material = new THREE.MeshPhongMaterial( { color: 0x44aa88 } );
      const cube = new THREE.Mesh( geometry, material );
      scene.add( cube );

      //camera.position.z = 0;
      cube.position.x = 0;
      cube.position.y = 0;
      cube.position.z = -0.5;
      //var s = new test();
      //var flightData = new airplaneTelemetry();
      //var viewer = new StereoButton(renderer);
      
      camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( canvas.height  / windowHeight ) );
      camera.updateProjectionMatrix();
      viewer.setSize( screenDimensions.width, screenDimensions.height );
      bindEventListeners();
      const animate = function () {
          requestAnimationFrame( animate );

          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;

          const elapsedTime = clock.getElapsedTime();    
          hud.update(elapsedTime);
          viewer.render(scene, camera);
          //renderer.render( scene, camera );
      };
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
       function resizeCanvas() {        
        canvas.style.width = '100%';
        canvas.style.height= '100%';
        
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const { width, height } = canvas;
        
        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        if (preserveSize){
            // adjust the FOV
            camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( height / windowHeight ) );
            //viewer.setOffset(getOffset());
        }

        camera.updateProjectionMatrix();
        //camera.lookAt( scene.position );  
        viewer.setSize(width, height);  
        //hudManager.onWindowResize()
    }
    function bindEventListeners() {
        window.onresize = resizeCanvas;
        //window.onmousemove = mouseMove;
        resizeCanvas();	
    }
      animate();