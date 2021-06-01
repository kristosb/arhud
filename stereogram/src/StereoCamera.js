import { Matrix4 } from 'three/src/math/Matrix4.js';
//import { MathUtils } from 'three/src/math/MathUtils.js';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js';
const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;
const _eyeRight = new Matrix4();
const _eyeLeft = new Matrix4();
const offsetView = new Matrix4();
class StereoCamera {

	constructor() {

		this.type = 'StereoCamera';

		this.aspect = 1;

		this.eyeSep = 0.064;

        this.offset = 0;
        
		this.cameraL = new PerspectiveCamera();
		this.cameraL.layers.enable( 1 );
		this.cameraL.matrixAutoUpdate = false;

		this.cameraR = new PerspectiveCamera();
		this.cameraR.layers.enable( 2 );
		this.cameraR.matrixAutoUpdate = false;

		this._cache = {
			focus: null,
			fov: null,
			aspect: null,
			near: null,
			far: null,
			zoom: null,
			eyeSep: null,
            offset: null
		};
	}

	update( camera ) {

		const cache = this._cache;

		const needsUpdate = cache.focus !== camera.focus || cache.fov !== camera.fov ||
			cache.aspect !== camera.aspect * this.aspect || cache.near !== camera.near ||
			cache.far !== camera.far || cache.zoom !== camera.zoom || cache.eyeSep !== this.eyeSep || cache.offset !== this.offset;;

		if ( needsUpdate ) {

			cache.focus = camera.focus;
			cache.fov = camera.fov;
			cache.aspect = camera.aspect * this.aspect;
			cache.near = camera.near;
			cache.far = camera.far;
			cache.zoom = camera.zoom;
			cache.eyeSep = this.eyeSep;
            cache.offset = this.offset;
			// Off-axis stereoscopic effect based on
			// http://paulbourke.net/stereographics/stereorender/

			const projectionMatrix = camera.projectionMatrix.clone();
			const eyeSepHalf = cache.eyeSep / 2;
			const eyeSepOnProjection = eyeSepHalf * cache.near / cache.focus;
			const ymax = ( cache.near * Math.tan( DEG2RAD * cache.fov * 0.5 ) ) / cache.zoom;
			let xmin, xmax;

			// translate xOffset

			_eyeLeft.elements[ 12 ] = - eyeSepHalf;
			_eyeRight.elements[ 12 ] = eyeSepHalf;

			// for left eye

			xmin = - ymax * cache.aspect + eyeSepOnProjection;
			xmax = ymax * cache.aspect + eyeSepOnProjection;

			projectionMatrix.elements[ 0 ] = 2 * cache.near / ( xmax - xmin );
			projectionMatrix.elements[ 8 ] = ( xmax + xmin ) / ( xmax - xmin );

            var xminFixed = - ymax  + eyeSepOnProjection;
			var xmaxFixed = ymax + eyeSepOnProjection;

            offsetView.identity();
            offsetView.setPosition(this._cache.offset,0,0);
            offsetView.copy(offsetView.multiply(projectionMatrix));

            this.cameraL.projectionMatrix.copy( offsetView );
			// for right eye

			xmin = - ymax * cache.aspect - eyeSepOnProjection;
			xmax = ymax * cache.aspect - eyeSepOnProjection;

			projectionMatrix.elements[ 0 ] = 2 * cache.near / ( xmax - xmin );
			projectionMatrix.elements[ 8 ] = ( xmax + xmin ) / ( xmax - xmin );

            xminFixed = - ymax  + eyeSepOnProjection;
			xmaxFixed = ymax + eyeSepOnProjection;

            offsetView.identity();
            offsetView.setPosition(-this._cache.offset,0,0);
            offsetView.copy(offsetView.multiply(projectionMatrix));

			this.cameraR.projectionMatrix.copy( offsetView );

		}

		this.cameraL.matrixWorld.copy( camera.matrixWorld ).multiply( _eyeLeft );
		this.cameraR.matrixWorld.copy( camera.matrixWorld ).multiply( _eyeRight );
        
	}

}

export { StereoCamera };