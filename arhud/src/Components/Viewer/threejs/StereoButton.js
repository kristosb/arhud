import { StereoEffect } from './StereoEffect.js';
class StereoButton {
    static createViewer(renderer){
        const viewer = 
        {
            renderer:renderer,
            type:"single",
            fullSize: true,
            render: function(scene, camera){
                this.renderer.render(scene, camera);
            },
            setSize: function(width, height){
                this.renderer.setSize(width, height);
            },
            setOffset: function(offset){
                if(this.type === "vr") this.renderer.setOffset(offset);
            }
        };
        return viewer;
    }
	static createButton( renderer, viewer ) {

        const screenDimensions = {
            width: 600,//canvas.width,
            height: 300,//canvas.height
        }

		const button = document.createElement( 'button' );
        const effect = new StereoEffect( renderer );
        effect.setSize( screenDimensions.width, screenDimensions.height );
        effect.setEyeSeparation(0.064);
        effect.setOffset(0);
        
        //viewer.renderer = renderer;
        //viewer.stereo = "single";
		function showEnterVR( /*device*/ ) {

			let currentSession = false;

			/*async function onSessionStarted( session ) {
                document.documentElement.requestFullscreen();
				session.addEventListener( 'click', onSessionEnded );
				//await renderer.xr.setSession( session );
				button.textContent = 'EXIT VR';
                button.style.opacity = '0.1';
				currentSession = session;
                console.log("enter");
			}

			function onSessionEnded(  ) {
                document.exitFullscreen();
				currentSession.removeEventListener( 'click', onSessionEnded );
                button.style.opacity = '0.5';
				button.textContent = 'ENTER VR';
                console.log("exit");
				currentSession = null;

			}*/

			button.style.display = '';

			button.style.cursor = 'pointer';
			button.style.left = 'calc(50% - 50px)';
			button.style.width = '100px';

			button.textContent = 'ENTER VR';

			button.onmouseenter = function () {

				button.style.opacity = '1.0';

			};

			button.onmouseleave = function () {

				if(currentSession) 
                    button.style.opacity = '0.1';
                else 
                    button.style.opacity = '0.5';

			};

			button.onclick = function () {

				if ( currentSession === false ) {
					//onSessionStarted(button);
                    if(document.fullscreenElement === null && viewer.fullSize) document.documentElement.requestFullscreen();
                    //session.addEventListener( 'click', onSessionEnded );
                    //await renderer.xr.setSession( session );
                    button.textContent = 'EXIT VR';
                    button.style.opacity = '0.1';
                    currentSession = true;
                    viewer.renderer = effect;
                    viewer.stereo = "vr";
                    

				} else {
                    if(document.fullscreenElement !== null) document.exitFullscreen();
                    //currentSession.removeEventListener( 'click', onSessionEnded );
                    button.style.opacity = '0.5';
                    button.textContent = 'ENTER VR';
                    currentSession = false;
                    viewer.renderer = renderer;
                    viewer.stereo = "single";
                    
				}
                viewer.renderer.setSize(window.innerWidth,window.innerHeight);  
			};

		}

		function stylizeElement( element ) {

			element.style.position = 'absolute';
			element.style.bottom = '20px';
			element.style.padding = '12px 6px';
			element.style.border = '1px solid #fff';
			element.style.borderRadius = '4px';
			element.style.background = 'rgba(0,0,0,0.1)';
			element.style.color = '#fff';
			element.style.font = 'normal 13px sans-serif';
			element.style.textAlign = 'center';
			element.style.opacity = '0.5';
			element.style.outline = 'none';
			element.style.zIndex = '999';

		}

			button.id = 'VRButton';
			button.style.display = 'none';

			stylizeElement( button );
            showEnterVR()

			return button;

	}
}

export { StereoButton };