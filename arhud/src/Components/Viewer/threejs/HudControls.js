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
        this.bm.font = `${this.fontSize}px monaco`;
        this.bm.textAlign = 'start';
        this.bm.fillText(this.txt, this.x, this.y);
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
        this.bm.moveTo(this.x-50, this.y);
        this.bm.lineTo(this.x-20, this.y);
        this.bm.moveTo(this.x-20, this.y);
        this.bm.lineTo(this.x, this.y -20 );
        this.bm.moveTo(this.x, this.y -20 );
        this.bm.lineTo(this.x+20, this.y);
        this.bm.moveTo(this.x+20,  this.y);
        this.bm.lineTo(this.x+50,  this.y);
        this.bm.closePath();
        this.bm.stroke();
        super.resetGlobalLineWidth();
        
        this.bm.restore();
    }
  }

  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  export class compass extends hudControl{
    constructor(bm, width, height) {
        super(bm,width / 6,height / 6);
        this.width = width;
        this.height = height;
        this.tilt = 0;
        this.tickHeight = 15;
        this.tickSpace = 30;
        this.scaleVals = range(0,5);
        this.x = Math.floor(this.x) + 0.5;
        this.y = Math.floor(this.y) + 0.5;
        this.yOffset = 0;
    }
    set angle(angle){
        this.tilt = angle;
    }
    draw(){
        // remove aliasing
        var tiltFloor =Math.floor(this.tilt);
        var tiltRemd = Math.floor(this.tilt * 10) % 10;
        var tiltRemdHalf = Math.floor((this.tilt+0.5) * 10) % 10;
        this.scaleVals = range(tiltFloor-4,tiltFloor+4);
        this.tilt = tiltFloor + tiltRemd/10;
        //this.scaleVals = range(this.tilt-4,this.tilt+4);
        //this.bm.save();
        super.changeLocalLineWidth();
        this.bm.beginPath();

        //this.bm.moveTo(this.x, this.y);
        //this.bm.lineTo(this.x, this.y-this.tickHeight);
        
        var space = this.x-tiltRemd*this.tickSpace/10;
        var spaceHalf = this.x-tiltRemdHalf*this.tickSpace/10;
        //if (tiltRemd != 0) this.scaleVals.pop();
        this.scaleVals.forEach((val,idx)=>{
            this.bm.font = `${12}px monaco`;
            this.bm.textAlign = 'start';
            this.bm.fillText(val.toString(), space-5, this.y-this.tickHeight-2);
            this.bm.moveTo(space, this.y);
            this.bm.lineTo(space, this.y-this.tickHeight); 
            //if (idx%2)this.bm.lineTo(space, this.y-this.tickHeight); 
            //else this.bm.lineTo(space, this.y-this.tickHeight/2); 
            //space += this.tickSpace;
            this.bm.moveTo(spaceHalf, this.y);
            this.bm.lineTo(spaceHalf, this.y-this.tickHeight/2); 
            space += this.tickSpace;
            spaceHalf += this.tickSpace;
            //space = Math.floor(space) + 0.5;
        });
        var middle = this.x + this.tickSpace*4;
        this.bm.moveTo(middle, this.y+15);
        this.bm.lineTo(middle, this.y+15 -this.tickHeight); 
        this.bm.fillText(tiltFloor.toString(), middle+4, this.y+15);
        this.bm.closePath();
        this.bm.stroke();
        super.resetGlobalLineWidth(); 
        //this.bm.restore();
    }
  }




export default {hudSimpleText, hudBorder, crosshair, horizon, compass}
