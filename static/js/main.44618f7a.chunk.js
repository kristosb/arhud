(this.webpackJsonparhud=this.webpackJsonparhud||[]).push([[0],{23:function(t,i,e){},24:function(t,i,e){},26:function(t,i,e){},28:function(t,i,e){"use strict";e.r(i);var h=e(14),n=e.n(h),s=e(18),a=e.n(s),o=(e(23),e(24),e(0)),c=e(1),r=e(2),l=e(3),u=e(7);function f(t){var i=new u.d(16777215,1);return i.position.set(-1,2,4),t.add(i),{update:function(t){}}}var d=e(9),m=e(8),b=e(17),v=new d.a,y=new d.a,g=new d.a,p=function(){function t(){Object(o.a)(this,t),this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.offset=0,this.cameraL=new b.a,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new b.a,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null,offset:null}}return Object(c.a)(t,[{key:"update",value:function(t){var i=this._cache;if(i.focus!==t.focus||i.fov!==t.fov||i.aspect!==t.aspect*this.aspect||i.near!==t.near||i.far!==t.far||i.zoom!==t.zoom||i.eyeSep!==this.eyeSep||i.offset!==this.offset){i.focus=t.focus,i.fov=t.fov,i.aspect=t.aspect*this.aspect,i.near=t.near,i.far=t.far,i.zoom=t.zoom,i.eyeSep=this.eyeSep,i.offset=this.offset;var e,h,n=t.projectionMatrix.clone(),s=i.eyeSep/2,a=s*i.near/i.focus,o=i.near*Math.tan(m.a.DEG2RAD*i.fov*.5)/i.zoom;y.elements[12]=-s,v.elements[12]=s,e=-o*i.aspect+a,h=o*i.aspect+a,n.elements[0]=2*i.near/(h-e),n.elements[8]=(h+e)/(h-e);g.identity(),g.setPosition(this._cache.offset,0,0),g.copy(g.multiply(n)),this.cameraL.projectionMatrix.copy(g),e=-o*i.aspect-a,h=o*i.aspect-a,n.elements[0]=2*i.near/(h-e),n.elements[8]=(h+e)/(h-e),-o+a,o+a,g.identity(),g.setPosition(-this._cache.offset,0,0),g.copy(g.multiply(n)),this.cameraR.projectionMatrix.copy(g)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(y),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(v)}}]),t}(),w=function(t){var i=new p;i.aspect=.5;var e=new u.m;t.getSize(e),this.setEyeSeparation=function(t){i.eyeSep=t},this.setOffset=function(t){i.offset=t},this.setSize=function(i,e){t.setSize(i,e)},this.render=function(h,n){h.updateMatrixWorld(),null===n.parent&&n.updateMatrixWorld(),i.update(n),t.getSize(e),t.autoClear&&t.clear(),t.setScissorTest(!0),t.setScissor(0,0,e.width/2,e.height),t.setViewport(0,0,e.width/2,e.height),t.render(h,i.cameraL),t.setScissor(e.width/2,0,e.width/2,e.height),t.setViewport(e.width/2,0,e.width/2,e.height),t.render(h,i.cameraR),t.setScissorTest(!1)}},x=e(5),j=e(4),k=function(){function t(i,e,h){Object(o.a)(this,t),this.bm=i,this._x=e,this._y=h,this.lineWidth=this.bm.lineWidth,this.globalLineWidth=this.bm.lineWidth}return Object(c.a)(t,[{key:"lineWidth",set:function(t){this.localLineWidth=t}},{key:"x",get:function(){return this._x},set:function(t){this._x=t}},{key:"y",get:function(){return this._y},set:function(t){this._y=t}},{key:"changeLocalLineWidth",value:function(){this.globalLineWidth=this.bm.lineWidth,this.bm.lineWidth=this.localLineWidth}},{key:"resetGlobalLineWidth",value:function(){this.bm.lineWidth=this.globalLineWidth}},{key:"draw",value:function(){}}]),t}(),O=function(t){Object(r.a)(e,t);var i=Object(l.a)(e);function e(t,h,n,s){var a;return Object(o.a)(this,e),(a=i.call(this,t,h,n)).txt="hello...",a.fontSize=s,a}return Object(c.a)(e,[{key:"text",set:function(t){this.txt=t}},{key:"draw",value:function(){this.bm.font="".concat(this.fontSize,"px monaco"),this.bm.textAlign="start",this.bm.fillText(this.txt,this.x,this.y)}}]),e}(k),M=function(t){Object(r.a)(e,t);var i=Object(l.a)(e);function e(t,h,n){var s;return Object(o.a)(this,e),(s=i.call(this,t,0,0)).width=h,s.height=n,s}return Object(c.a)(e,[{key:"draw",value:function(){Object(x.a)(Object(j.a)(e.prototype),"changeLocalLineWidth",this).call(this),this.bm.strokeRect(0,0,this.width,this.height),Object(x.a)(Object(j.a)(e.prototype),"resetGlobalLineWidth",this).call(this)}}]),e}(k),S=function(t){Object(r.a)(e,t);var i=Object(l.a)(e);function e(t,h,n){var s;return Object(o.a)(this,e),(s=i.call(this,t,h/2,n/2)).width=h,s.height=n,s}return Object(c.a)(e,[{key:"draw",value:function(){this.x=Math.floor(this.x)+.5,this.y=Math.floor(this.y)+.5,Object(x.a)(Object(j.a)(e.prototype),"changeLocalLineWidth",this).call(this),this.bm.strokeWidth=1,this.bm.beginPath(),this.bm.moveTo(this.x,this.y-10),this.bm.lineTo(this.x,this.y+10),this.bm.moveTo(this.x-10,this.y),this.bm.lineTo(this.x+10,this.y),this.bm.closePath(),this.bm.stroke(),Object(x.a)(Object(j.a)(e.prototype),"resetGlobalLineWidth",this).call(this)}}]),e}(k),_=function(t){Object(r.a)(e,t);var i=Object(l.a)(e);function e(t,h,n){var s;return Object(o.a)(this,e),(s=i.call(this,t,h/2,n/2)).width=h,s.height=n,s.tilt=0,s}return Object(c.a)(e,[{key:"angle",set:function(t){this.tilt=t}},{key:"draw",value:function(){this.x=Math.floor(this.x)+.5,this.y=Math.floor(this.y)+.5,this.bm.save(),this.bm.translate(this.width/2,this.height/2),this.bm.rotate(Math.PI/180*this.tilt),this.bm.translate(-this.width/2,-this.height/2),Object(x.a)(Object(j.a)(e.prototype),"changeLocalLineWidth",this).call(this),this.bm.strokeWidth=1,this.bm.beginPath(),this.bm.moveTo(this.x-20,this.y),this.bm.lineTo(this.x-10,this.y),this.bm.moveTo(this.x-10,this.y),this.bm.lineTo(this.x,this.y-10),this.bm.moveTo(this.x,this.y-10),this.bm.lineTo(this.x+10,this.y),this.bm.moveTo(this.x+10,this.y),this.bm.lineTo(this.x+20,this.y),this.bm.closePath(),this.bm.stroke(),Object(x.a)(Object(j.a)(e.prototype),"resetGlobalLineWidth",this).call(this),this.bm.restore()}}]),e}(k);function T(t,i,e){return Array(i/e-t/e+1).fill().map((function(i,h){return t+h*e}))}var L=function(t){Object(r.a)(e,t);var i=Object(l.a)(e);function e(t,h,n){var s;return Object(o.a)(this,e),(s=i.call(this,t,h/4,n/7)).width=h,s.height=n,s.tilt=0,s.tickHeight=15,s.tickSpace=40,s.scale=10,s.x=Math.floor(s.x)+.5,s.y=Math.floor(s.y)+.5,s._range=4,s}return Object(c.a)(e,[{key:"angle",set:function(t){this.tilt=t}},{key:"range",set:function(t){this._range=t}},{key:"rangeScale",set:function(t){this.scale=t}},{key:"draw",value:function(){var t=this,i=Math.floor(this.tilt),h=Math.floor(10*this.tilt/this.scale)%10,n=Math.floor(10*(this.tilt/this.scale+.5))%10;this.scaleVals=T(Math.floor(this.tilt/this.scale)*this.scale-Math.floor(this.scale*this._range/2),Math.floor(this.tilt/this.scale)*this.scale+Math.floor(this.scale*this._range/2),this.scale),this.scaleVals=this.scaleVals.map((function(t){return function(t){return t<0&&(t+=360),t>359&&(t-=360),t}(t)})),this.tilt=i+h/10,Object(x.a)(Object(j.a)(e.prototype),"changeLocalLineWidth",this).call(this),this.bm.beginPath();var s=this.x-h*this.tickSpace/10,a=this.x-n*this.tickSpace/10;this.scaleVals.forEach((function(i,e){t.bm.font="".concat(12,"px monaco"),t.bm.textAlign="start",t.bm.fillText(i.toString(),s-5,t.y-t.tickHeight-2),t.bm.moveTo(s,t.y),t.bm.lineTo(s,t.y-t.tickHeight),t.bm.moveTo(a,t.y),t.bm.lineTo(a,t.y-t.tickHeight/2),s+=t.tickSpace,a+=t.tickSpace}));var o=this.x+this.tickSpace*(this._range/2);this.bm.moveTo(o,this.y+15),this.bm.lineTo(o,this.y+15-this.tickHeight),this.bm.fillText(i.toString(),o+4,this.y+15),this.bm.closePath(),this.bm.stroke(),Object(x.a)(Object(j.a)(e.prototype),"resetGlobalLineWidth",this).call(this)}}]),e}(k),W=function(t){Object(r.a)(e,t);var i=Object(l.a)(e);function e(t,h,n){var s;return Object(o.a)(this,e),(s=i.call(this,t,0,0)).width=h,s.height=n,s.middle=h/2,s.tilt=0,s.rot=0,s.tickHeight=100,s.tickSpace=40,s.scale=10,s._range=4,s.middleOffset=n-(n-s.tickSpace*s._range)/2,s}return Object(c.a)(e,[{key:"angle",set:function(t){this.tilt=t}},{key:"rotation",set:function(t){this.rot=t}},{key:"range",set:function(t){this._range=t}},{key:"rangeScale",set:function(t){this.scale=t}},{key:"draw",value:function(){var t=this;this.bm.save(),this.bm.translate(this.width/2,this.height/2),this.bm.rotate(Math.PI/180*this.rot),this.bm.translate(-this.width/2,-this.height/2);var i=Math.floor(this.tilt),h=Math.floor(10*this.tilt/this.scale)%10;this.scaleVals=T(Math.floor(this.tilt/this.scale)*this.scale-Math.floor(this.scale*this._range/2),Math.floor(this.tilt/this.scale)*this.scale+Math.floor(this.scale*this._range/2),this.scale),this.tilt=i+h/10;var n=0;n=h>=0?this.middleOffset+h*this.tickSpace/10:this.middleOffset+(10*this.tickSpace/10+h*this.tickSpace/10),Object(x.a)(Object(j.a)(e.prototype),"changeLocalLineWidth",this).call(this),this.scaleVals.forEach((function(i,e){t.bm.beginPath(),t.bm.font="".concat(12,"px monaco"),t.bm.textAlign="start";var h=1;i<0&&(t.bm.setLineDash([3,2]),h=-1),0!=i?(t.bm.moveTo(t.middle-t.tickHeight/2,n),t.bm.lineTo(t.middle-.3*t.tickHeight,n),t.bm.moveTo(t.middle+.3*t.tickHeight,n),t.bm.lineTo(t.middle+t.tickHeight/2,n),t.bm.moveTo(t.middle-t.tickHeight/2,n),t.bm.lineTo(t.middle-t.tickHeight/2,n+10*h),t.bm.moveTo(t.middle+t.tickHeight/2,n),t.bm.lineTo(t.middle+t.tickHeight/2,n+10*h),t.bm.fillText(i.toString(),t.middle-t.tickHeight/2-25,n+8*h)):(t.bm.moveTo(t.middle-.8*t.tickHeight,n),t.bm.lineTo(t.middle-.3*t.tickHeight,n),t.bm.moveTo(t.middle+.3*t.tickHeight,n),t.bm.lineTo(t.middle+.8*t.tickHeight,n)),n-=t.tickSpace,t.bm.closePath(),t.bm.stroke(),t.bm.setLineDash([])})),Object(x.a)(Object(j.a)(e.prototype),"resetGlobalLineWidth",this).call(this),this.bm.restore()}}]),e}(k);function P(t){return(t<10?"0":"")+t}function H(){var t=new Date;return"TIME:".concat(P(t.getHours()),":").concat(P(t.getMinutes()),":").concat(P(t.getSeconds()))}var z=function(){function t(i,e,h,n){Object(o.a)(this,t),this.min=e,this.max=i,this.inc=h,this.value=n}return Object(c.a)(t,[{key:"inc",get:function(){return this._inc},set:function(t){this._inc=t}},{key:"min",get:function(){return this._min},set:function(t){this._min=t}},{key:"max",get:function(){return this._max},set:function(t){this._max=t}},{key:"value",get:function(){return this._value},set:function(t){this._value=t}}]),t}(),R=function(){function t(i,e){Object(o.a)(this,t),this.width=i,this.height=e,this.x=0,this.y=0,this.vx=5,this.vy=2}return Object(c.a)(t,[{key:"nextPoint",value:function(){this.x=this.x+this.vx,this.y=this.y+this.vy,(this.y+this.vy>this.height||this.y+this.vy<0)&&(this.vy=-this.vy),(this.x+this.vx>this.width/2||this.x+this.vx<0)&&(this.vx=-this.vx)}}]),t}(),E=function(t){Object(r.a)(e,t);var i=Object(l.a)(e);function e(){var t;return Object(o.a)(this,e),(t=i.call(this,1,-1,.02,0)).yaw=.02,t}return Object(c.a)(e,[{key:"nextPoint",value:function(){return this.value>this._max&&(this.yaw=-this.inc),this.value<this._min&&(this.yaw=this.inc),this.value+=this.yaw,90*Math.sin(Math.PI*this.value/2)}}]),e}(z),I=function(t){Object(r.a)(e,t);var i=Object(l.a)(e);function e(){var t,h=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1;return Object(o.a)(this,e),(t=i.call(this,10,-10,h,0)).magnetInc=t._inc,t}return Object(c.a)(e,[{key:"nextPoint",value:function(){return this.value>this._max&&(this.magnetInc=-this._inc),this.value<=this._min&&(this.magnetInc=this._inc),this.value+=this.magnetInc,this.value}}]),e}(z),A=function(){function t(){Object(o.a)(this,t),this.rollModel=new E,this.rollModel.max=.4,this.rollModel.min=-.4,this.yawModel=new I(1),this.yawModel.max=30,this.yawModel.min=0,this.pitchModel=new I(.7),this.pitchModel.max=25,this.pitchModel.min=-25,this._roll=this.rollModel.nextPoint(),this._pitch=this.pitchModel.nextPoint(),this._yaw=this.yawModel.nextPoint()}return Object(c.a)(t,[{key:"roll",get:function(){return this._roll}},{key:"pitch",get:function(){return this._pitch}},{key:"yaw",get:function(){return this._yaw}},{key:"next",value:function(){this.roll>=40||this.roll<=-40?(this._pitch=this.pitchModel.nextPoint(),(this.pitch>15||this.pitch<-15)&&(this._roll=this.rollModel.nextPoint())):this._roll=this.rollModel.nextPoint(),this._yaw=this.yawModel.nextPoint()}}]),t}();function C(t,i){var e,h=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,n={width:i.width,height:i.height};console.log(n);var s=0,a=.05;console.log("win inner height"+window.innerHeight);var o="rgba(\n        ".concat(163,",\n        ",255,",\n        ",0,",\n        ",255),c=document.createElement("canvas");c.width=n.width/2,c.height=n.height;var r=c.getContext("2d");r.fillStyle=o,r.strokeStyle=o,r.globalAlpha=.75;var l={info:new O(r,c.width/2-30,c.height-5,16),border:new M(r,c.width,c.height),crosshair:new S(r,c.width,c.height),horizon:new _(r,c.width,c.height),compass:new L(r,c.width,c.height),pitchLader:new W(r,c.width,c.height)};l.crosshair.lineWidth=2,Object.values(l).forEach((function(t){t.draw()}));var f=new u.l(c);f.needsUpdate=!0;var d=new u.g({map:f});d.transparent=!0;var m=new u.j(h,h),b=new u.f(m,d);b.name="hudPlane",b.position.set(0,0,-.15),t.add(b);var v=new R(n.width,n.height),y=new A;function g(){r.clearRect(0,0,n.width/2,n.height),l.info.text=H(),v.nextPoint(),l.crosshair.x=v.x,l.crosshair.y=v.y,y.next(),l.compass.angle=y.yaw,l.pitchLader.rot=y.roll,l.pitchLader.angle=y.pitch,Object.values(l).forEach((function(t){t.draw()})),f.needsUpdate=!0}function p(t){(e=t)-s>a&&(g(),s=e)}function w(){return c}return{update:p,getCanvas:w,draw:g}}function V(t){var i=new u.b,e=(new u.n(0,0,0),{width:t.width,height:t.height}),h={x:0,y:0},n=function(){var t=new u.k;return t.background=new u.c("black"),t}(),s=function(i){var e=i.width,h=i.height,n=new u.o({canvas:t,antialias:!0,alpha:!0}),s=window.devicePixelRatio?window.devicePixelRatio:1;return n.setPixelRatio(s),n.setSize(e,h),n.autoClear=!1,n.gammaInput=!0,n.gammaOutput=!0,n}(e),a=function(t){var i=t.width,e=t.height,h=i/e,n=new u.i(90,h,1e-4,20);return n.focus=3,n.position.set(0,0,0),n}(e),o=function(t){return[new f(t)]}(n),c=new C(n,t,.7),r=new w(s);r.setSize(e.width,e.height),r.setEyeSeparation(.064),r.setOffset(0);var l=s;n.add(a);var d=Math.tan(Math.PI/180*a.fov/2),m=150;function b(){for(var t=i.getElapsedTime(),e=0;e<o.length;e++)o[e].update(t);c.update(t),function(t){t.render(n,a)}(l)}return window.addEventListener("keypress",(function(t){t.which})),{update:b,onWindowResize:function(){var i=t.width,h=t.height;e.width=i,e.height=h,a.aspect=i/h,a.fov=360/Math.PI*Math.atan(d*(h/m)),r.setOffset((e.width-300)*(.254/454)),a.updateProjectionMatrix(),r.setSize(i,h),s.setSize(i,h)},onMouseMove:function(t,i){h.x=t,h.y=i},animate:function(){s.setAnimationLoop((function(){b()}))},getScene:function(){return n}}}e(26);var D=e(12),G=function(t){Object(r.a)(e,t);var i=Object(l.a)(e);function e(){return Object(o.a)(this,e),i.apply(this,arguments)}return Object(c.a)(e,[{key:"componentDidMount",value:function(){!function(t){var i=function(t,i){var e=t.createElement("canvas");return i.appendChild(e),e}(document,t),e=new V(i);function h(){i.style.width="100%",i.style.height="100%",i.width=i.offsetWidth,i.height=i.offsetHeight,Math.round(i.offsetWidth/2),Math.round(i.offsetHeight/2),e.onWindowResize()}window.onresize=h,h(),e.animate()}(this.threeRootElement)}},{key:"render",value:function(){var t=this;return Object(D.jsx)("div",{className:"viewer-viewer",ref:function(i){return t.threeRootElement=i}})}}]),e}(h.Component);var F=function(){return Object(D.jsx)("div",{className:"App",children:Object(D.jsx)(G,{})})},U=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,29)).then((function(i){var e=i.getCLS,h=i.getFID,n=i.getFCP,s=i.getLCP,a=i.getTTFB;e(t),h(t),n(t),s(t),a(t)}))};a.a.render(Object(D.jsx)(n.a.StrictMode,{children:Object(D.jsx)(F,{})}),document.getElementById("root")),U()}},[[28,1,2]]]);
//# sourceMappingURL=main.44618f7a.chunk.js.map