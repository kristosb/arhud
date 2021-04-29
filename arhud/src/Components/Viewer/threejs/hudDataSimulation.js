
// get the time as string with leading zeros
function leading_zeros(dt) 
{ 
    return (dt < 10 ? '0' : '') + dt;
}
export function getTimeString(){
    var d = new Date();
    return `TIME:${leading_zeros(d.getHours())}:${leading_zeros(d.getMinutes())}:${leading_zeros(d.getSeconds())}`;
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
export class sineEasing{
    constructor(){
        this.angle = 0;
        this.yaw =0;
    }
    nextPoint(){
        if (this.angle>2.9)this.yaw = -0.02;
        if (this.angle<0.1)this.yaw = 0.02;
        this.angle += this.yaw;
        return Math.sin(Math.PI*this.angle/2)*90;
    }
}

export class linearEasing360{
    constructor(inc=0.1){
        this.magnet = 0;
        this.minc = inc;
        this.magnetInc = this.minc;
    }
    set inc(inc){
        this.minc = inc;
    }
    nextPoint(){
        if (this.magnet > 10) this.magnetInc = -this.minc;
        if (this.magnet <=  -10 ) this.magnetInc = this.minc;
        this.magnet += this.magnetInc;
        return this.magnet;
    }
}

export default {getTimeString, bouncer, sineEasing, linearEasing360}