 class hudControl {
     constructor(bm, x, y){
        this.bm = bm;
        this._x = x;
        this._y = y;
        this.lineWidth = this.bm.lineWidth;
        this.globalLineWidth = this.bm.lineWidth;
     }
     set lineWidth(lineWidth){
        this.localLineWidth = lineWidth;
    }
    set x(x){
        this._x = x;
    }
    get x(){
        return this._x;
    }
    set y(y){
        this._y = y;
    }
    get y(){
        return this._y;
    }
    changeLocalLineWidth(){
        this.globalLineWidth = this.bm.lineWidth;
        this.bm.lineWidth = this.localLineWidth;
    }
    resetGlobalLineWidth(){
        this.bm.lineWidth = this.globalLineWidth;
    }
     draw(){

     }
 }


export class hudSimpleText extends hudControl{
    constructor(bm, x, y, fontSize) {
        super(bm,x,y);
        this.txt = "hello..."
        this.fontSize = fontSize;
    }
    set text(txt){
        this.txt = txt;
    }
    draw(){
        this.bm.font = `bold ${this.fontSize}px Arial`;
        this.bm.textAlign = 'start';
        this.bm.fillText(this.txt, this.x, this.y);
    }
  }

  function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  }

  export class hudWrappedText extends hudControl{
    constructor(bm, x, y, fontSize) {
        super(bm,x,y);
        this.txt = "hello..."
        this.fontSize = fontSize;
    }
    set text(txt){
        this.txt = txt;
    }
    draw(){
        this.bm.font = `bold ${this.fontSize}px Arial`;
        wrapText(this.bm, this.txt, this.x, this.y, 100, this.fontSize+2);
    }
  }



  
export class hudBorder extends hudControl{
    constructor(bm, width, height) {
        super(bm,0,0);
        this.width = width;
        this.height = height;
    }  
    draw(){
        super.changeLocalLineWidth();
        this.bm.strokeRect(0,0,this.width, this.height);
        super.resetGlobalLineWidth();
    }

  }
 
export class crosshair extends hudControl{
    constructor(bm, width, height) {
        super(bm,width / 2,height / 2);
        this.width = width;
        this.height = height;

    }

    draw(){
        // remove aliasing
        this.x = Math.floor(this.x) + 0.5;
        this.y = Math.floor(this.y) + 0.5;
        super.changeLocalLineWidth();
        this.bm.strokeWidth = 1;
        this.bm.beginPath();
        this.bm.moveTo(this.x, this.y - 10);
        this.bm.lineTo(this.x, this.y + 10);
        this.bm.moveTo(this.x - 10,  this.y);
        this.bm.lineTo(this.x + 10,  this.y);
        this.bm.closePath();
        this.bm.stroke();
        super.resetGlobalLineWidth();
    }
  }

  export class horizon extends hudControl{
    constructor(bm, width, height) {
        super(bm,width / 2,height / 2);
        this.width = width;
        this.height = height;
        this.tilt = 0;
    }
    set angle(angle){
        this.tilt = angle;
    }
    draw(){
        // remove aliasing
        this.x = Math.floor(this.x) + 0.5;
        this.y = Math.floor(this.y) + 0.5;
        this.bm.save();
        //this.bm.clearRect(0,0,this.width,this.height);
        this.bm.translate(this.width/2, this.height/2)
        this.bm.rotate((Math.PI / 180) * this.tilt); // rotate
        this.bm.translate(-this.width/2, -this.height/2)
        super.changeLocalLineWidth();
        this.bm.strokeWidth = 1;
        this.bm.beginPath();
        this.bm.moveTo(this.x-20, this.y);
        this.bm.lineTo(this.x-10, this.y);
        this.bm.moveTo(this.x-10, this.y);
        this.bm.lineTo(this.x, this.y -10 );
        this.bm.moveTo(this.x, this.y -10 );
        this.bm.lineTo(this.x+10, this.y);
        this.bm.moveTo(this.x+10,  this.y);
        this.bm.lineTo(this.x+20,  this.y);
        this.bm.closePath();
        this.bm.stroke();
        super.resetGlobalLineWidth();
        
        this.bm.restore();
    }
  }

  function range(start, end, inc) {
    //console.log(start,end);
    return Array(end/inc - (start/inc) + 1).fill().map((_, idx) => start+ idx*inc);
  }
  function limit(x){
    if(x<0) x = x+ 360;
    if(x>359) x = x -360;
    return x;
  }
  function rangeClip360(rangeArray){
    return rangeArray.map(x=>limit(x));
  }
  export class compass extends hudControl{
    constructor(bm, width, height, tickSpace =40, range = 4) {   
        super(bm,width/2- 40*(4/2),height / 7);
        this.tickSpace = tickSpace;
        this._range = range;
        //this.middle =  this.tickSpace*(this._range/2);
        this.middle = width/2;
        this.width = width;
        this.height = height;
        this.tilt = 0;
        this.tickHeight = 15;
        
        this.scale = 10;
        //this.scaleVals = range(10/this.scale,50/this.scale,this.scale);
        //console.log(this.scaleVals);
        this.x = Math.floor(this.x) + 0.5;
        this.y = Math.floor(this.y) + 0.5;
        
        
    }
    set angle(angle){
        this.tilt = angle;
    }
    set range(range){
        this._range = range;
    }
    set rangeScale(rangeScale){
        this.scale = rangeScale;
    }
    draw(){
        var tiltFloor = Math.floor(this.tilt);
        var tiltRemd = Math.floor(this.tilt * 10/this.scale) % 10;
        var tiltRemdHalf = Math.floor((this.tilt/this.scale+0.5) * 10) % 10;
        this.scaleVals = range(
            Math.floor(this.tilt/this.scale)*this.scale-Math.floor(this.scale*this._range/2),
            Math.floor(this.tilt/this.scale)*this.scale+ Math.floor(this.scale*this._range/2),
            this.scale);
        this.scaleVals = rangeClip360(this.scaleVals);
        this.tilt = tiltFloor + tiltRemd/10;

        super.changeLocalLineWidth();
        this.bm.beginPath();
        
        var space = this.x-tiltRemd*this.tickSpace/10;
        var spaceHalf = this.x-tiltRemdHalf*this.tickSpace/10;
        this.scaleVals.forEach((val,idx)=>{
            this.bm.font = `bold ${12}px Arial`;
            this.bm.textAlign = 'start';
            this.bm.fillText(val.toString(), space-5, this.y-this.tickHeight-2);
            this.bm.moveTo(space, this.y);
            this.bm.lineTo(space, this.y-this.tickHeight); 
            this.bm.moveTo(spaceHalf, this.y);
            this.bm.lineTo(spaceHalf, this.y-this.tickHeight/2); 
            space += this.tickSpace;
            spaceHalf += this.tickSpace;
        });
        //var middle =  this.tickSpace*(this._range/2);
        this.bm.moveTo(this.middle, this.y+15);
        this.bm.lineTo(this.middle, this.y+15 -this.tickHeight); 
        this.bm.fillText(tiltFloor.toString(), this.middle+4, this.y+15);
        this.bm.closePath();
        this.bm.stroke();
        super.resetGlobalLineWidth(); 
    }
  }
export class pitchLader extends hudControl {
    constructor(bm, width, height){
        super(bm,0,0);
        this.width = width;
        this.height = height;
        this.middle = width/2;
        this.tilt = 0;
        this.rot = 0;
        this.tickHeight = 100;
        this.tickSpace = 40;
        this.scale = 10;
        //this.x = Math.floor(this.x) + 0.5;
        //this.y = Math.floor(this.y) + 0.5;
        this._range = 4;
        this.middleOffset = height -(height - this.tickSpace*this._range )/2;// +this.tickSpace;
    }
    set angle(angle){
        this.tilt = angle;
    }
    set rotation(rotation){
        this.rot = rotation;
    }
    set range(range){
        this._range = range;
    }
    set rangeScale(rangeScale){
        this.scale = rangeScale;
    }
    draw(){
        this.bm.save();
        this.bm.translate(this.width/2, this.height/2);
        this.bm.rotate((Math.PI / 180) * this.rot); // rotate
        this.bm.translate(-this.width/2, -this.height/2);

        var tiltFloor = Math.floor(this.tilt);
        var tiltRemd = Math.floor(this.tilt * 10/this.scale) % 10;
        this.scaleVals = range(
            Math.floor(this.tilt/this.scale)*this.scale - Math.floor(this.scale*this._range/2),
            Math.floor(this.tilt/this.scale)*this.scale + Math.floor(this.scale*this._range/2),
            this.scale);
        this.tilt = tiltFloor + tiltRemd/10;
        
        var space = 0;
        if (tiltRemd >=0) 
            space = this.middleOffset +tiltRemd*this.tickSpace/10;
        else 
            space = this.middleOffset + (10*this.tickSpace/10 +tiltRemd*this.tickSpace/10);

        super.changeLocalLineWidth();

        this.scaleVals.forEach((val,idx)=>{
            this.bm.beginPath();
            this.bm.font = `bold ${12}px Arial`;
            this.bm.textAlign = 'start';
            var sign = 1;
            if (val<0) {
                this.bm.setLineDash([3, 2]);
                sign = -1;
            }
            if (val != 0){
                this.bm.moveTo(this.middle - this.tickHeight/2, space);
                this.bm.lineTo(this.middle - this.tickHeight*0.3, space); 
                this.bm.moveTo(this.middle + this.tickHeight*0.3, space);
                this.bm.lineTo(this.middle + this.tickHeight/2, space); 
                this.bm.moveTo(this.middle - this.tickHeight/2, space);
                this.bm.lineTo(this.middle - this.tickHeight/2, space+10*sign); 
                this.bm.moveTo(this.middle + this.tickHeight/2, space);
                this.bm.lineTo(this.middle + this.tickHeight/2, space+10*sign); 
                this.bm.fillText(val.toString(), this.middle - this.tickHeight/2 -25, space+8*sign);
            }else{
                this.bm.moveTo(this.middle - this.tickHeight*0.8, space);
                this.bm.lineTo(this.middle - this.tickHeight*0.3, space); 
                this.bm.moveTo(this.middle + this.tickHeight*0.3, space);
                this.bm.lineTo(this.middle + this.tickHeight*0.8, space); 
            }
            space -= this.tickSpace;
            this.bm.closePath();
            this.bm.stroke();
            this.bm.setLineDash([]);
        });
        
        super.resetGlobalLineWidth(); 
        this.bm.restore();
    }
}



export default { hudSimpleText, hudWrappedText, hudBorder, crosshair, horizon, compass, pitchLader }
