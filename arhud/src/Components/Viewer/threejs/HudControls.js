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





export default {hudSimpleText, hudBorder, crosshair}
