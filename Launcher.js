
class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.03,
            length:40
        }
        this.pointB=pointB;
        this.bodyA=bodyA;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher)
    }
    attach(body){
        this.launcher.bodyA=bodyA;
    }
    fly(){
        this.launcher.bodyA=null;
    }
    display(){
        var position=this.bodyA.position
        var pointB=this.pointB.position
        strokeWeight(5);
        line(position.x,position.y,pointB.x,point.y);
    }
    
}