(this.webpackJsonparhud=this.webpackJsonparhud||[]).push([[0],{23:function(t,e,i){},24:function(t,e,i){},26:function(t,e,i){},28:function(t,e,i){"use strict";i.r(e);var n=i(14),a=i.n(n),o=i(18),s=i.n(o),r=(i(23),i(24),i(0)),h=i(1),c=i(2),u=i(3),l=i(7);function f(t){var e=new l.e,i=new l.a(.4,.4,.4),n=new l.a(2e-5,2e-5,2e-5);function a(e,i,n,a,o){var s=new l.h({color:i}),r=new l.f(e,s);return t.add(r),r.position.x=n,r.position.y=a,r.position.z=o,r}var o=[a(i,4500104,0,0,-.5),a(n,16711680,-.032,0,-2e-4),a(n,65280,.032,0,-2e-4)];e.rotation.z=Math.PI/4;return{update:function(t){var e=.5*t;o[0].rotation.x=e,o[0].rotation.y=e}}}function d(t){var e=new l.d(16777215,1);return e.position.set(-1,2,4),t.add(e),{update:function(t){}}}var p=i(9),w=i(8),m=i(17),v=new p.a,b=new p.a,y=new p.a,g=function(){function t(){Object(r.a)(this,t),this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.offset=0,this.cameraL=new m.a,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new m.a,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null,offset:null}}return Object(h.a)(t,[{key:"update",value:function(t){var e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep||e.offset!==this.offset){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,e.offset=this.offset;var i,n,a=t.projectionMatrix.clone(),o=e.eyeSep/2,s=o*e.near/e.focus,r=e.near*Math.tan(w.a.DEG2RAD*e.fov*.5)/e.zoom;b.elements[12]=-o,v.elements[12]=o,i=-r*e.aspect+s,n=r*e.aspect+s,a.elements[0]=2*e.near/(n-i),a.elements[8]=(n+i)/(n-i);y.identity(),y.setPosition(this._cache.offset,0,0),y.copy(y.multiply(a)),this.cameraL.projectionMatrix.copy(y),i=-r*e.aspect-s,n=r*e.aspect-s,a.elements[0]=2*e.near/(n-i),a.elements[8]=(n+i)/(n-i),-r+s,r+s,y.identity(),y.setPosition(-this._cache.offset,0,0),y.copy(y.multiply(a)),this.cameraR.projectionMatrix.copy(y)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(b),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(v)}}]),t}(),x=function(t){var e=new g;e.aspect=.5;var i=new l.m;t.getSize(i),this.setEyeSeparation=function(t){e.eyeSep=t},this.setOffset=function(t){e.offset=t},this.setSize=function(e,i){t.setSize(e,i)},this.render=function(n,a){n.updateMatrixWorld(),null===a.parent&&a.updateMatrixWorld(),e.update(a),t.getSize(i),t.autoClear&&t.clear(),t.setScissorTest(!0),t.setScissor(0,0,i.width/2,i.height),t.setViewport(0,0,i.width/2,i.height),t.render(n,e.cameraL),t.setScissor(i.width/2,0,i.width/2,i.height),t.setViewport(i.width/2,0,i.width/2,i.height),t.render(n,e.cameraR),t.setScissorTest(!1)}},j=i(5),O=i(4),W=function(){function t(e,i,n){Object(r.a)(this,t),this.bm=e,this._x=i,this._y=n,this.lineWidth=this.bm.lineWidth,this.globalLineWidth=this.bm.lineWidth}return Object(h.a)(t,[{key:"lineWidth",set:function(t){this.localLineWidth=t}},{key:"x",get:function(){return this._x},set:function(t){this._x=t}},{key:"y",get:function(){return this._y},set:function(t){this._y=t}},{key:"changeLocalLineWidth",value:function(){this.globalLineWidth=this.bm.lineWidth,this.bm.lineWidth=this.localLineWidth}},{key:"resetGlobalLineWidth",value:function(){this.bm.lineWidth=this.globalLineWidth}},{key:"draw",value:function(){}}]),t}(),S=function(t){Object(c.a)(i,t);var e=Object(u.a)(i);function i(t,n,a){var o;return Object(r.a)(this,i),(o=e.call(this,t,n,a)).txt="hello...",o}return Object(h.a)(i,[{key:"text",set:function(t){this.txt=t}},{key:"draw",value:function(){this.bm.font="20px monaco",this.bm.textAlign="start",this.bm.fillText(this.txt,this.x,this.y)}}]),i}(W),L=function(t){Object(c.a)(i,t);var e=Object(u.a)(i);function i(t,n,a){var o;return Object(r.a)(this,i),(o=e.call(this,t,0,0)).width=n,o.height=a,o}return Object(h.a)(i,[{key:"draw",value:function(){Object(j.a)(Object(O.a)(i.prototype),"changeLocalLineWidth",this).call(this),this.bm.strokeRect(0,0,this.width,this.height),Object(j.a)(Object(O.a)(i.prototype),"resetGlobalLineWidth",this).call(this)}}]),i}(W),k=function(t){Object(c.a)(i,t);var e=Object(u.a)(i);function i(t,n,a){var o;return Object(r.a)(this,i),(o=e.call(this,t,n/2,a/2)).width=n,o.height=a,o}return Object(h.a)(i,[{key:"draw",value:function(){this.x=Math.floor(this.x)+.5,this.y=Math.floor(this.y)+.5,Object(j.a)(Object(O.a)(i.prototype),"changeLocalLineWidth",this).call(this),this.bm.strokeWidth=1,this.bm.beginPath(),this.bm.moveTo(this.x,this.y-10),this.bm.lineTo(this.x,this.y+10),this.bm.moveTo(this.x-10,this.y),this.bm.lineTo(this.x+10,this.y),this.bm.closePath(),this.bm.stroke(),Object(j.a)(Object(O.a)(i.prototype),"resetGlobalLineWidth",this).call(this)}}]),i}(W);function M(t,e){var i={width:e.width,height:e.height};console.log(i);var n,a=0;console.log("win"+window.innerHeight);var o="rgba(\n        ".concat(163,",\n        ",255,",\n        ",0,",\n        ",255),s=document.createElement("canvas");s.width=i.width/2,s.height=i.height;var r=s.getContext("2d");r.fillStyle=o,r.strokeStyle=o,r.globalAlpha=.75;var h={info:new S(r,10,20),border:new L(r,s.width,s.height),crosshair:new k(r,s.width,s.height)};h.border.lineWidth=5,h.crosshair.lineWidth=2,Object.values(h).forEach((function(t){t.draw()}));var c=new l.l(s);c.needsUpdate=!0;var u=new l.g({map:c});u.transparent=!0;var f=new l.j(.4,.4),d=new l.f(f,u);d.name="hudPlane",d.position.set(0,0,-.15),t.add(d);var p=5,w=2;function m(t){return(t<10?"0":"")+t}function v(){r.clearRect(0,0,i.width/2,i.height);var t=new Date;h.info.text="".concat(m(t.getHours()),":").concat(m(t.getMinutes()),":").concat(m(t.getSeconds())),h.crosshair.x=h.crosshair.x+p,h.crosshair.y=h.crosshair.y+w,(h.crosshair.y+w>i.height||h.crosshair.y+w<0)&&(w=-w),(h.crosshair.x+p>i.width/2||h.crosshair.x+p<0)&&(p=-p),h.info.draw(),h.crosshair.draw(),c.needsUpdate=!0}return{update:function(t){(n=t)-a>.1&&(v(),a=n)},getCanvas:function(){return s},draw:v}}function z(t){var e=new l.b,i=(new l.n(0,0,0),{width:t.width,height:t.height}),n={x:0,y:0},a=function(){var t=new l.k;return t.background=new l.c("black"),t}(),o=function(e){var i=e.width,n=e.height,a=new l.o({canvas:t,antialias:!0,alpha:!0}),o=window.devicePixelRatio?window.devicePixelRatio:1;return a.setPixelRatio(o),a.setSize(i,n),a.autoClear=!1,a.gammaInput=!0,a.gammaOutput=!0,a}(i),s=function(t){var e=t.width,i=t.height,n=e/i,a=new l.i(90,n,1e-4,20);return a.focus=3,a.position.set(0,0,0),a}(i),r=function(t){return[new d(t),new f(t)]}(a),h=new M(a,t),c=new x(o);c.setSize(i.width,i.height),c.setEyeSeparation(.064),c.setOffset(0);var u=0;a.add(s);var p=Math.tan(Math.PI/180*s.fov/2),w=150;function m(){for(var t=e.getElapsedTime(),i=0;i<r.length;i++)r[i].update(t);h.update(t),c.render(a,s)}return window.addEventListener("keypress",(function(t){var e=t.which;(e>=48&&e<=57||e>=97&&e<=122||e>=65&&e<=90)&&(49==e&&(u+=.1,c.setOffset(u)),50==e&&(u-=.1,c.setOffset(u)))})),{update:m,onWindowResize:function(){var e=t.width,n=t.height;i.width=e,i.height=n,s.aspect=e/n,s.fov=360/Math.PI*Math.atan(p*(n/w)),c.setOffset((i.width-300)*(.254/454)),s.updateProjectionMatrix(),c.setSize(e,n),o.setSize(e,n)},onMouseMove:function(t,e){n.x=t,n.y=e},getRenderer:function(){return o},animate:function(){o.setAnimationLoop((function(){m()}))},getScene:function(){return a}}}i(26);var R=i(12),P=function(t){Object(c.a)(i,t);var e=Object(u.a)(i);function i(){return Object(r.a)(this,i),e.apply(this,arguments)}return Object(h.a)(i,[{key:"componentDidMount",value:function(){!function(t){var e=function(t,e){var i=t.createElement("canvas");return e.appendChild(i),i}(document,t),i=new z(e);function n(){e.style.width="100%",e.style.height="100%",e.width=e.offsetWidth,e.height=e.offsetHeight,Math.round(e.offsetWidth/2),Math.round(e.offsetHeight/2),i.onWindowResize()}window.onresize=n,n(),i.animate()}(this.threeRootElement)}},{key:"render",value:function(){var t=this;return Object(R.jsx)("div",{className:"viewer-viewer",ref:function(e){return t.threeRootElement=e}})}}]),i}(n.Component);var E=function(){return Object(R.jsx)("div",{className:"App",children:Object(R.jsx)(P,{})})},C=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,29)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;i(t),n(t),a(t),o(t),s(t)}))};s.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(E,{})}),document.getElementById("root")),C()}},[[28,1,2]]]);
//# sourceMappingURL=main.fae07eb4.chunk.js.map