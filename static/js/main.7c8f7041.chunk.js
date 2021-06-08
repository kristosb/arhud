(this.webpackJsonparhud=this.webpackJsonparhud||[]).push([[0],{29:function(t,e,i){},30:function(t,e,i){},32:function(t,e,i){},34:function(t,e,i){"use strict";i.r(e);var n=i(15),s=i.n(n),h=i(23),a=i.n(h),o=(i(29),i(30),i(0)),c=i(1),r=i(2),l=i(3),u=i(9);function f(t){var e=new u.d(16777215,1);return e.position.set(-1,2,4),t.add(e),{update:function(t){}}}function d(t){return(t<10?"0":"")+t}function b(){var t=new Date;return"TIME:".concat(d(t.getHours()),":").concat(d(t.getMinutes()),":").concat(d(t.getSeconds()))}var m=function(){function t(e,i,n,s){Object(o.a)(this,t),this.min=i,this.max=e,this.inc=n,this.value=s}return Object(c.a)(t,[{key:"inc",get:function(){return this._inc},set:function(t){this._inc=t}},{key:"min",get:function(){return this._min},set:function(t){this._min=t}},{key:"max",get:function(){return this._max},set:function(t){this._max=t}},{key:"value",get:function(){return this._value},set:function(t){this._value=t}}]),t}(),y=function(){function t(e,i){Object(o.a)(this,t),this.width=e,this.height=i,this.x=0,this.y=0,this.vx=5,this.vy=2}return Object(c.a)(t,[{key:"nextPoint",value:function(){this.x=this.x+this.vx,this.y=this.y+this.vy,(this.y+this.vy>this.height||this.y+this.vy<0)&&(this.vy=-this.vy),(this.x+this.vx>this.width/2||this.x+this.vx<0)&&(this.vx=-this.vx)}}]),t}(),p=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(){var t;return Object(o.a)(this,i),(t=e.call(this,1,-1,.02,0)).yaw=.02,t}return Object(c.a)(i,[{key:"nextPoint",value:function(){return this.value>this._max&&(this.yaw=-this.inc),this.value<this._min&&(this.yaw=this.inc),this.value+=this.yaw,90*Math.sin(Math.PI*this.value/2)}}]),i}(m),v=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1;return Object(o.a)(this,i),(t=e.call(this,10,-10,n,0)).magnetInc=t._inc,t}return Object(c.a)(i,[{key:"nextPoint",value:function(){return this.value>this._max&&(this.magnetInc=-this._inc),this.value<=this._min&&(this.magnetInc=this._inc),this.value+=this.magnetInc,this.value}}]),i}(m),g=function(){function t(){Object(o.a)(this,t),this.rollModel=new p,this.rollModel.max=.4,this.rollModel.min=-.4,this.yawModel=new v(1),this.yawModel.max=30,this.yawModel.min=0,this.pitchModel=new v(.7),this.pitchModel.max=25,this.pitchModel.min=-25,this._roll=this.rollModel.nextPoint(),this._pitch=this.pitchModel.nextPoint(),this._yaw=this.yawModel.nextPoint()}return Object(c.a)(t,[{key:"roll",get:function(){return this._roll}},{key:"pitch",get:function(){return this._pitch}},{key:"yaw",get:function(){return this._yaw}},{key:"next",value:function(){this.roll>=40||this.roll<=-40?(this._pitch=this.pitchModel.nextPoint(),(this.pitch>15||this.pitch<-15)&&(this._roll=this.rollModel.nextPoint())):this._roll=this.rollModel.nextPoint(),this._yaw=this.yawModel.nextPoint()}}]),t}(),w=i(5),x=i(4),k=function(){function t(e,i,n){Object(o.a)(this,t),this.bm=e,this._x=i,this._y=n,this.lineWidth=this.bm.lineWidth,this.globalLineWidth=this.bm.lineWidth}return Object(c.a)(t,[{key:"lineWidth",set:function(t){this.localLineWidth=t}},{key:"x",get:function(){return this._x},set:function(t){this._x=t}},{key:"y",get:function(){return this._y},set:function(t){this._y=t}},{key:"changeLocalLineWidth",value:function(){this.globalLineWidth=this.bm.lineWidth,this.bm.lineWidth=this.localLineWidth}},{key:"resetGlobalLineWidth",value:function(){this.bm.lineWidth=this.globalLineWidth}},{key:"draw",value:function(){}}]),t}(),M=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(t,n,s,h){var a;return Object(o.a)(this,i),(a=e.call(this,t,n,s)).txt="hello...",a.fontSize=h,a}return Object(c.a)(i,[{key:"text",set:function(t){this.txt=t}},{key:"draw",value:function(){this.bm.font="bold ".concat(this.fontSize,"px Arial"),this.bm.textAlign="start",this.bm.fillText(this.txt,this.x,this.y)}}]),i}(k);var O=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(t,n,s){var h;return Object(o.a)(this,i),(h=e.call(this,t,0,0)).width=n,h.height=s,h}return Object(c.a)(i,[{key:"draw",value:function(){Object(w.a)(Object(x.a)(i.prototype),"changeLocalLineWidth",this).call(this),this.bm.strokeRect(0,0,this.width,this.height),Object(w.a)(Object(x.a)(i.prototype),"resetGlobalLineWidth",this).call(this)}}]),i}(k),j=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(t,n,s){var h;return Object(o.a)(this,i),(h=e.call(this,t,n/2,s/2)).width=n,h.height=s,h}return Object(c.a)(i,[{key:"draw",value:function(){this.x=Math.floor(this.x)+.5,this.y=Math.floor(this.y)+.5,Object(w.a)(Object(x.a)(i.prototype),"changeLocalLineWidth",this).call(this),this.bm.strokeWidth=1,this.bm.beginPath(),this.bm.moveTo(this.x,this.y-10),this.bm.lineTo(this.x,this.y+10),this.bm.moveTo(this.x-10,this.y),this.bm.lineTo(this.x+10,this.y),this.bm.closePath(),this.bm.stroke(),Object(w.a)(Object(x.a)(i.prototype),"resetGlobalLineWidth",this).call(this)}}]),i}(k),S=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(t,n,s){var h;return Object(o.a)(this,i),(h=e.call(this,t,n/2,s/2)).width=n,h.height=s,h.tilt=0,h}return Object(c.a)(i,[{key:"angle",set:function(t){this.tilt=t}},{key:"draw",value:function(){this.x=Math.floor(this.x)+.5,this.y=Math.floor(this.y)+.5,this.bm.save(),this.bm.translate(this.width/2,this.height/2),this.bm.rotate(Math.PI/180*this.tilt),this.bm.translate(-this.width/2,-this.height/2),Object(w.a)(Object(x.a)(i.prototype),"changeLocalLineWidth",this).call(this),this.bm.strokeWidth=1,this.bm.beginPath(),this.bm.moveTo(this.x-20,this.y),this.bm.lineTo(this.x-10,this.y),this.bm.moveTo(this.x-10,this.y),this.bm.lineTo(this.x,this.y-10),this.bm.moveTo(this.x,this.y-10),this.bm.lineTo(this.x+10,this.y),this.bm.moveTo(this.x+10,this.y),this.bm.lineTo(this.x+20,this.y),this.bm.closePath(),this.bm.stroke(),Object(w.a)(Object(x.a)(i.prototype),"resetGlobalLineWidth",this).call(this),this.bm.restore()}}]),i}(k);function _(t,e,i){return Array(e/i-t/i+1).fill().map((function(e,n){return t+n*i}))}function T(t){return t<0&&(t+=360),t>359&&(t-=360),t}function P(t){return t<-90&&(t=-180-t),t>90&&(t=180-t),t}function L(t,e){return t.map((function(t){return e(t)}))}var W=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(t,n,s){var h,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:4;return Object(o.a)(this,i),(h=e.call(this,t,n/2-80,s/7)).tickSpace=a,h._range=c,h.middle=n/2,h.width=n,h.height=s,h.tilt=0,h.tickHeight=15,h.scale=10,h.x=Math.floor(h.x)+.5,h.y=Math.floor(h.y)+.5,h}return Object(c.a)(i,[{key:"angle",set:function(t){this.tilt=t}},{key:"range",set:function(t){this._range=t}},{key:"rangeScale",set:function(t){this.scale=t}},{key:"draw",value:function(){var t=this,e=Math.floor(this.tilt),n=Math.floor(10*this.tilt/this.scale)%10,s=Math.floor(10*(this.tilt/this.scale+.5))%10;this.scaleVals=_(Math.floor(this.tilt/this.scale)*this.scale-Math.floor(this.scale*this._range/2),Math.floor(this.tilt/this.scale)*this.scale+Math.floor(this.scale*this._range/2),this.scale),this.scaleVals=L(this.scaleVals,T),this.tilt=e+n/10,Object(w.a)(Object(x.a)(i.prototype),"changeLocalLineWidth",this).call(this),this.bm.beginPath();var h=this.x-n*this.tickSpace/10,a=this.x-s*this.tickSpace/10;this.scaleVals.forEach((function(e,i){t.bm.font="bold ".concat(12,"px Arial"),t.bm.textAlign="start",t.bm.fillText(e.toString(),h-5,t.y-t.tickHeight-2),t.bm.moveTo(h,t.y),t.bm.lineTo(h,t.y-t.tickHeight),t.bm.moveTo(a,t.y),t.bm.lineTo(a,t.y-t.tickHeight/2),h+=t.tickSpace,a+=t.tickSpace})),this.bm.moveTo(this.middle,this.y+15),this.bm.lineTo(this.middle,this.y+15-this.tickHeight),this.bm.fillText(e.toString(),this.middle+4,this.y+15),this.bm.closePath(),this.bm.stroke(),Object(w.a)(Object(x.a)(i.prototype),"resetGlobalLineWidth",this).call(this)}}]),i}(k),E=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(t,n,s){var h;return Object(o.a)(this,i),(h=e.call(this,t,0,0)).width=n,h.height=s,h.middle=n/2,h.tilt=0,h.rot=0,h.tickHeight=100,h.tickSpace=40,h.scale=10,h._range=4,h.middleOffset=s-(s-h.tickSpace*h._range)/2,h}return Object(c.a)(i,[{key:"angle",set:function(t){this.tilt=t}},{key:"rotation",set:function(t){this.rot=t}},{key:"range",set:function(t){this._range=t}},{key:"rangeScale",set:function(t){this.scale=t}},{key:"draw",value:function(){var t=this;this.bm.save(),this.bm.translate(this.width/2,this.height/2),this.bm.rotate(Math.PI/180*this.rot),this.bm.translate(-this.width/2,-this.height/2);var e=Math.floor(this.tilt),n=Math.floor(10*this.tilt/this.scale)%10;this.scaleVals=_(Math.floor(this.tilt/this.scale)*this.scale-Math.floor(this.scale*this._range/2),Math.floor(this.tilt/this.scale)*this.scale+Math.floor(this.scale*this._range/2),this.scale),this.scaleVals=L(this.scaleVals,P),this.tilt=e+n/10;var s=0;s=n>=0?this.middleOffset+n*this.tickSpace/10:this.middleOffset+(10*this.tickSpace/10+n*this.tickSpace/10),Object(w.a)(Object(x.a)(i.prototype),"changeLocalLineWidth",this).call(this),this.scaleVals.forEach((function(e,i){t.bm.beginPath(),t.bm.font="bold ".concat(12,"px Arial"),t.bm.textAlign="start";var n=1;e<0&&(t.bm.setLineDash([3,2]),n=-1),0!=e?(t.bm.moveTo(t.middle-t.tickHeight/2,s),t.bm.lineTo(t.middle-.3*t.tickHeight,s),t.bm.moveTo(t.middle+.3*t.tickHeight,s),t.bm.lineTo(t.middle+t.tickHeight/2,s),t.bm.moveTo(t.middle-t.tickHeight/2,s),t.bm.lineTo(t.middle-t.tickHeight/2,s+10*n),t.bm.moveTo(t.middle+t.tickHeight/2,s),t.bm.lineTo(t.middle+t.tickHeight/2,s+10*n),t.bm.fillText(e.toString(),t.middle-t.tickHeight/2-25,s+8*n)):(t.bm.moveTo(t.middle-.8*t.tickHeight,s),t.bm.lineTo(t.middle-.3*t.tickHeight,s),t.bm.moveTo(t.middle+.3*t.tickHeight,s),t.bm.lineTo(t.middle+.8*t.tickHeight,s)),s-=t.tickSpace,t.bm.closePath(),t.bm.stroke(),t.bm.setLineDash([])})),Object(w.a)(Object(x.a)(i.prototype),"resetGlobalLineWidth",this).call(this),this.bm.restore()}}]),i}(k),I=i(24),z=i(11),H=i(22),R=Math.PI/180,A=(Math.PI,new z.a),D=new z.a,V=new z.a,C=function(){function t(){Object(o.a)(this,t),this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.offset=0,this.cameraL=new H.a,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new H.a,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null,offset:null}}return Object(c.a)(t,[{key:"update",value:function(t){var e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep||e.offset!==this.offset){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,e.offset=this.offset;var i,n,s=t.projectionMatrix.clone(),h=e.eyeSep/2,a=h*e.near/e.focus,o=e.near*Math.tan(R*e.fov*.5)/e.zoom;D.elements[12]=-h,A.elements[12]=h,i=-o*e.aspect+a,n=o*e.aspect+a,s.elements[0]=2*e.near/(n-i),s.elements[8]=(n+i)/(n-i);V.identity(),V.setPosition(this._cache.offset,0,0),V.copy(V.multiply(s)),this.cameraL.projectionMatrix.copy(V),i=-o*e.aspect-a,n=o*e.aspect-a,s.elements[0]=2*e.near/(n-i),s.elements[8]=(n+i)/(n-i),-o+a,o+a,V.identity(),V.setPosition(-this._cache.offset,0,0),V.copy(V.multiply(s)),this.cameraR.projectionMatrix.copy(V)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(D),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(A)}}]),t}(),N=function(t){var e=new C;e.aspect=.5;var i=new I.a;t.getSize(i),this.setEyeSeparation=function(t){e.eyeSep=t},this.setOffset=function(t){e.offset=t},this.setSize=function(e,i){t.setSize(e,i)},this.render=function(n,s){n.updateMatrixWorld(),null===s.parent&&s.updateMatrixWorld(),e.update(s),t.getSize(i),t.autoClear&&t.clear(),t.setScissorTest(!0),t.setScissor(0,0,i.width/2,i.height),t.setViewport(0,0,i.width/2,i.height),t.render(n,e.cameraL),t.setScissor(i.width/2,0,i.width/2,i.height),t.setViewport(i.width/2,0,i.width/2,i.height),t.render(n,e.cameraR),t.setScissorTest(!1)}};var B=function(){function t(e){Object(o.a)(this,t),this.renderer=e,this.type="single",this.fullSize=!1,this.landscapeLock=!0,this.viewer=e,this.effect=new N(this.renderer),this.effect.setSize(600,300),this.effect.setEyeSeparation(.064),this.effect.setOffset(0),this.currentSession=!1}return Object(c.a)(t,[{key:"createButton",value:function(){var t;this.button=document.createElement("button"),this.button.id="VRButton",this.button.style.display="none",(t=this.button).style.position="absolute",t.style.bottom="20px",t.style.padding="12px 6px",t.style.border="1px solid #fff",t.style.borderRadius="4px",t.style.background="rgba(0,0,0,0.1)",t.style.color="#fff",t.style.font="normal 13px sans-serif",t.style.textAlign="center",t.style.opacity="0.5",t.style.outline="none",t.style.zIndex="999",this.button.style.display="",this.button.style.cursor="pointer",this.button.style.left="calc(50% - 50px)",this.button.style.width="100px",this.button.textContent="ENTER VR";var e=this;return this.button.onmouseenter=function(){e.button.style.opacity="1.0"},this.button.onmouseleave=function(){e.currentSession?e.button.style.opacity="0.1":e.button.style.opacity="0.5"},this.button.onclick=function(){!1===e.currentSession?(null===document.fullscreenElement&&e.fullSize&&(document.documentElement.requestFullscreen(),e.landscapeLock&&screen.orientation.lock("landscape")),e.button.textContent="EXIT VR",e.button.style.opacity="0.1",e.currentSession=!0,e.viewer=e.effect,e.type="vr"):(null!==document.fullscreenElement&&(e.landscapeLock&&screen.orientation.unlock(),document.exitFullscreen()),e.button.style.opacity="0.5",e.button.textContent="ENTER VR",e.currentSession=!1,e.viewer=e.renderer,e.type="single"),e.viewer.setSize(window.innerWidth,window.innerHeight)},this.button}},{key:"render",value:function(t,e){this.viewer.render(t,e)}},{key:"setSize",value:function(t,e){this.viewer.setSize(t,e)}},{key:"setOffset",value:function(t){"vr"===this.type&&this.viewer.setOffset(t)}},{key:"enableStereo",value:function(){!1===this.currentSession&&(this.button&&(this.button.textContent="EXIT VR",this.button.style.opacity="0.1"),this.currentSession=!0,this.viewer=this.effect,this.type="vr",this.viewer.setSize(window.innerWidth,window.innerHeight))}},{key:"disableStereo",value:function(){!1!==this.currentSession&&(this.button&&(this.button.style.opacity="0.5",this.button.textContent="ENTER VR"),this.currentSession=!1,this.viewer=this.renderer,this.type="single",this.viewer.setSize(window.innerWidth,window.innerHeight))}}]),t}(),G=Math.PI/180;function U(t,e){return[[t[0][0]*e[0][0]+t[0][1]*e[1][0]+t[0][2]*e[2][0],t[0][0]*e[0][1]+t[0][1]*e[1][1]+t[0][2]*e[2][1],t[0][0]*e[0][2]+t[0][1]*e[1][2]+t[0][2]*e[2][2]],[t[1][0]*e[0][0]+t[1][1]*e[1][0]+t[1][2]*e[2][0],t[1][0]*e[0][1]+t[1][1]*e[1][1]+t[1][2]*e[2][1],t[1][0]*e[0][2]+t[1][1]*e[1][2]+t[1][2]*e[2][2]],[t[2][0]*e[0][0]+t[2][1]*e[1][0]+t[2][2]*e[2][0],t[2][0]*e[0][1]+t[2][1]*e[1][1]+t[2][2]*e[2][1],t[2][0]*e[0][2]+t[2][1]*e[1][2]+t[2][2]*e[2][2]]]}var F=function(t){var e=t?t*G:0,i=Math.cos(e),n=Math.sin(e);return[[i,-n,0],[n,i,0],[0,0,1]]}(-90),K=function(){var t=90*G,e=Math.cos(t),i=Math.sin(t);return[[1,0,0],[0,e,-i],[0,i,e]]}();function J(t){return t*(Math.PI/180)}function X(t){return t*(180/Math.PI)}var q={imu:function(){function t(){Object(o.a)(this,t),this._yaw=0,this._pitch=0,this._roll=0,this._compass=0,this._updated=!1;var e=this,i={HEADING:0,ATTITUDE:0,BANK:0};window.addEventListener("deviceorientation",(function(t){i=function(t,e,i){t=J(t),e=J(e),i=J(i);var n=Math.cos(t),s=Math.sin(t),h=Math.cos(e),a=Math.sin(e),o=Math.cos(i),c=Math.sin(i),r=U([[n*h,-n*a*o+s*c,n*a*c+s*o],[a,h*o,-h*c],[-s*h,s*a*o+n*c,-s*a*c+n*o]],F),l=U(r,K);return l[1][0]>.998?(t=Math.atan2(-l[2][0],l[0][0])+Math.PI,e=Math.asin(l[1][0]),i=0):l[1][0]<-.998?(t=Math.atan2(-l[2][0],l[0][0])+Math.PI,e=-Math.PI/2,i=0):(t=Math.atan2(-l[2][0],l[0][0])+Math.PI,e=Math.asin(l[1][0]),i=Math.atan2(-l[1][2],l[1][1])),{HEADING:X(t),ATTITUDE:X(e),BANK:X(i)}}(t.alpha,t.beta,t.gamma),e._yaw=i.HEADING,e._roll=-i.BANK,e._pitch=i.ATTITUDE,e._updated=!0}),!0)}return Object(c.a)(t,[{key:"yaw",get:function(){return this._yaw}},{key:"pitch",get:function(){return this._pitch}},{key:"roll",get:function(){return this._roll}},{key:"compass",get:function(){return this._compass}},{key:"updated",get:function(){return!!this._updated&&(this._updated=!1,!0)}}]),t}()};function Q(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}var Y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(o.a)(this,t),this.isMobile=Q()||e,console.log(this.isMobile),this.flightData=null,this.isMobile?this.flightData=new q.imu:this.flightData=new g}return Object(c.a)(t,[{key:"yaw",get:function(){return this.flightData.yaw}},{key:"pitch",get:function(){return this.flightData.pitch}},{key:"roll",get:function(){return this.flightData.roll}},{key:"next",value:function(){this.isMobile||this.flightData.next()}}]),t}();function Z(t,e){var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,s={width:e.width,height:e.height},h=0,a=.05,o="rgba(\n        ".concat(163,",\n        ",255,",\n        ",0,",\n        ",255),c=document.createElement("canvas");c.width=s.width/2,c.height=s.height;var r=c.getContext("2d");r.lineWidth=2,r.fillStyle=o,r.strokeStyle=o,r.globalAlpha=.75;var l={info:new M(r,c.width/2-30,c.height-5,16),border:new O(r,c.width,c.height),crosshair:new j(r,c.width,c.height),horizon:new S(r,c.width,c.height),compass:new W(r,c.width,c.height),pitchLader:new E(r,c.width,c.height)};Object.values(l).forEach((function(t){t.draw()}));var f=new u.n(c);f.needsUpdate=!0;var d=new u.i({map:f});d.transparent=!0;var m=new u.l(n,n),p=new u.h(m,d);p.name="hudPlane",p.position.set(0,0,-.15),t.add(p);var v=new y(s.width,s.height),g=new Y(!1);function w(){r.clearRect(0,0,s.width/2,s.height),l.info.text=b(),v.nextPoint(),l.crosshair.x=v.x,l.crosshair.y=v.y,g.next(),l.compass.angle=g.yaw,l.pitchLader.rot=g.roll,l.pitchLader.angle=g.pitch,Object.values(l).forEach((function(t){t.draw()})),f.needsUpdate=!0}function x(t){(i=t)-h>a&&(w(),h=i)}return{update:x,draw:w}}function $(t){var e=new u.b,i=(new u.o(0,0,0),{width:t.width,height:t.height}),n={x:0,y:0},s=function(){var t=new u.m;return t.background=new u.c("black"),t}(),h=function(e){var i=e.width,n=e.height,s=new u.p({canvas:t,antialias:!0,alpha:!0}),h=window.devicePixelRatio?window.devicePixelRatio:1;return s.setPixelRatio(h),s.setSize(i,n),s.autoClear=!1,s.gammaInput=!0,s.gammaOutput=!0,s}(i),a=function(t){var e=t.width,i=t.height,n=e/i,s=new u.k(90,n,1e-4,20);return s.focus=3,s.position.set(0,0,0),s}(i),o=function(t){return[new f(t)]}(s),c=new Z(s,t,.5);s.add(a);var r=new B(h);r.fullSize=!1,document.body.appendChild(r.createButton());var l=Math.tan(Math.PI/180*a.fov/2),d=150;function b(){for(var t=e.getElapsedTime(),i=0;i<o.length;i++)o[i].update(t);c.update(t),r.render(s,a)}return window.addEventListener("keypress",(function(t){t.which})),{update:b,onWindowResize:function(){var e=t.width,n=t.height;i.width=e,i.height=n,a.aspect=e/n,a.fov=360/Math.PI*Math.atan(l*(n/d)),a.updateProjectionMatrix(),r.setSize(e,n)},onMouseMove:function(t,e){n.x=t,n.y=e},animate:function(){h.setAnimationLoop((function(){b()}))}}}i(32);var tt=i(14),et=function(t){Object(r.a)(i,t);var e=Object(l.a)(i);function i(){return Object(o.a)(this,i),e.apply(this,arguments)}return Object(c.a)(i,[{key:"componentDidMount",value:function(){!function(t){var e=function(t,e){var i=t.createElement("canvas");return e.appendChild(i),i}(document,t),i=new $(e);function n(){e.style.width="100%",e.style.height="100%",e.width=e.offsetWidth,e.height=e.offsetHeight,Math.round(e.offsetWidth/2),Math.round(e.offsetHeight/2),i.onWindowResize()}window.onresize=n,n(),i.animate()}(this.threeRootElement)}},{key:"render",value:function(){var t=this;return Object(tt.jsx)("div",{className:"viewer-viewer",ref:function(e){return t.threeRootElement=e}})}}]),i}(n.Component);var it=function(){return Object(tt.jsx)("div",{className:"App",children:Object(tt.jsx)(et,{})})},nt=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,35)).then((function(e){var i=e.getCLS,n=e.getFID,s=e.getFCP,h=e.getLCP,a=e.getTTFB;i(t),n(t),s(t),h(t),a(t)}))};a.a.render(Object(tt.jsx)(s.a.StrictMode,{children:Object(tt.jsx)(it,{})}),document.getElementById("root")),nt()}},[[34,1,2]]]);
//# sourceMappingURL=main.7c8f7041.chunk.js.map