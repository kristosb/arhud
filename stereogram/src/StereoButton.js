import { StereoEffect } from './StereoEffect.js';

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

class StereoButton {
    constructor(renderer){
        this.renderer = renderer;
        this.type = "single";
        this.fullSize = false;
        this.viewer = renderer;

        this.effect = new StereoEffect( this.renderer );
        this.effect.setSize( 600, 300 );
        this.effect.setEyeSeparation(0.064);
        this.effect.setOffset(0);
        this.currentSession = false;
        //this.createButton();
    }
    createButton(){
        this.button =document.createElement( 'button' );
        this.button.id = 'VRButton';
        this.button.style.display = 'none';

        stylizeElement( this.button );
        this.button.style.display = '';

        this.button.style.cursor = 'pointer';
        this.button.style.left = 'calc(50% - 50px)';
        this.button.style.width = '100px';

        this.button.textContent = 'ENTER VR';
        var that = this;
        this.button.onmouseenter = function () {
            //console.log(this);
            that.button.style.opacity = '1.0';

        };

        this.button.onmouseleave = function () {

            if(that.currentSession) 
                that.button.style.opacity = '0.1';
            else 
                that.button.style.opacity = '0.5';

        };

        this.button.onclick = function () {
            if ( that.currentSession === false ) {
                //onSessionStarted(button);
                if(document.fullscreenElement === null && that.fullSize) document.documentElement.requestFullscreen();
                //session.addEventListener( 'click', onSessionEnded );
                //await renderer.xr.setSession( session );
                that.button.textContent = 'EXIT VR';
                that.button.style.opacity = '0.1';
                that.currentSession = true;
                that.viewer = that.effect;
                that.type = "vr";

            } else {
                if(document.fullscreenElement !== null) document.exitFullscreen();
                //currentSession.removeEventListener( 'click', onSessionEnded );
                that.button.style.opacity = '0.5';
                that.button.textContent = 'ENTER VR';
                that.currentSession = false;
                that.viewer = that.renderer;
                that.type = "single";
                
            }
            that.viewer.setSize(window.innerWidth,window.innerHeight);  
        };
        return this.button;
    }

    render(scene, camera){
        this.viewer.render(scene, camera);
    }
    setSize(width, height){
        this.viewer.setSize(width, height);
    }
    setOffset(offset){
        if(this.type === "vr") this.viewer.setOffset(offset);
    }
    enableStereo(){
        if ( this.currentSession === false ) {
            if(this.button){
                this.button.textContent = 'EXIT VR';
                this.button.style.opacity = '0.1';
            }
            this.currentSession = true;
            this.viewer = this.effect;
            this.type = "vr";
            this.viewer.setSize(window.innerWidth,window.innerHeight); 
        } 
         
    }
    disableStereo(){
        if ( this.currentSession !== false ){
            if(this.button){
                this.button.style.opacity = '0.5';
                this.button.textContent = 'ENTER VR';
            }
            this.currentSession = false;
            this.viewer = this.renderer;
            this.type = "single";
            this.viewer.setSize(window.innerWidth,window.innerHeight); 
        }
    }

}

export { StereoButton };