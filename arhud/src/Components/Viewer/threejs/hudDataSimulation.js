
// get the time as string with leading zeros
function leading_zeros(dt) 
{ 
    return (dt < 10 ? '0' : '') + dt;
}
export function getTimeString(){
    var d = new Date();
    return `TIME:${leading_zeros(d.getHours())}:${leading_zeros(d.getMinutes())}:${leading_zeros(d.getSeconds())}`;
} 

class easing{
    constructor(mx,mn,inc, val){
    this.min = mn;
    this.max = mx;
    this.inc = inc;
    this.value = val;
    }
    set inc(inc){
        this._inc = inc;
    }
    set min(min){
        this._min = min;
    }
    set max(max){
        this._max = max;
    }
    set value(value){
        this._value = value;
    }
    get value(){
        return this._value;
    }
    get inc(){
        return this._inc;
    }
    get min(){
        return this._min;
    }
    get max(){
        return this._max;
    }
}

// bounce the point within the screen limit
export class bouncer{
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.x =0;
        this.y = 0;
        this.vx = 5;
        this.vy = 2;
    }
    
    nextPoint(){
        this.x = this.x  +this.vx;
        this.y = this.y  +this.vy;
        if (this.y+ this.vy > this.height || this.y + this.vy < 0) {
            this.vy = -this.vy;
        }
        if (this.x + this.vx > this.width/2 || this.x+ this.vx < 0) {
            this.vx = -this.vx;
        }
    }

}

// simulate +/- movement with sine easing
export class sineEasing extends easing{
    constructor(){
        super(1,-1,0.02,0);
        this.yaw = 0.02;
    }
    nextPoint(){
        if (this.value>this._max)this.yaw = -this.inc;
        if (this.value<this._min)this.yaw = this.inc;
        this.value += this.yaw;
        return Math.sin(Math.PI*this.value/2)*90;
    }
}

export class linearEasing360 extends easing{
    constructor(inc=0.1){
        super(10,-10,inc,0);
        this.magnetInc = this._inc;
    }
    nextPoint(){
        if (this.value > this._max) this.magnetInc = -this._inc;
        if (this.value <=  this._min ) this.magnetInc = this._inc;
        this.value += this.magnetInc;
        return this.value;
    }
}

export class airplaneTelemetry{
    constructor(){
        this.rollModel = new sineEasing();
        this.rollModel.max = 0.4;
        this.rollModel.min = -0.4;
        this.yawModel = new linearEasing360(1);
        this.yawModel.max = 30;
        this.yawModel.min = 0;
        this.pitchModel = new linearEasing360(0.7);
        this.pitchModel.max = 25;
        this.pitchModel.min = -25;
        this._roll = this.rollModel.nextPoint();
        this._pitch = this.pitchModel.nextPoint();
        this._yaw = this.yawModel.nextPoint();
    }
    get roll(){
        return this._roll;
    }
    get pitch(){
        return this._pitch;
    }
    get yaw(){
        return this._yaw;
    }
    next(){
        if (this.roll >= 40 || this.roll <= -40){
            this._pitch = this.pitchModel.nextPoint();
            if (this.pitch >15 || this.pitch <-15 ) this._roll = this.rollModel.nextPoint();
        }else this._roll = this.rollModel.nextPoint();
        this._yaw = this.yawModel.nextPoint();
        //console.log(this._yaw);
    }
}

export default {getTimeString, bouncer, sineEasing, linearEasing360}