 class hudControl {
     constructor(bm, x, y){
        this.bm = bm;
        this.x = x;
        this.y = y;
        this.lineWidth = this.bm.lineWidth;
        this.globalLineWidth = this.bm.lineWidth;
     }
     set lineWidth(lineWidth){
        this.localLineWidth = lineWidth;
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
    constructor(bm, x, y) {
        super(bm,x,y);
    }
    draw(){
        this.bm.font = "20px monaco";
        this.bm.textAlign = 'start';
        this.bm.fillText('Text...', this.x, this.y);
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

        // remove aliasing
        this.x = Math.floor(this.x) + 0.5;
        this.y = Math.floor(this.y) + 0.5;
    }
    draw(){
        super.changeLocalLineWidth();
        this.bm.strokeWidth = 1;
        this.bm.moveTo(this.x, this.y - 10);
        this.bm.lineTo(this.x, this.y + 10);
        this.bm.moveTo(this.x - 10,  this.y);
        this.bm.lineTo(this.x + 10,  this.y);
        this.bm.stroke();
        super.resetGlobalLineWidth();
    }
  }





  export default {hudSimpleText, hudBorder}