class slingShot{
    constructor(bodyA,pointB) {
        var sling_options={
            bodyA: polygon.body,
            pointB: pointB,
            stiffness: 0.01,
            length:10,
        }
        this.pointB=pointB;
       this.polygon = Bodies.circle(50,200,20,sling_options);
       World.add(world,this.polygon)
   
    }

    fly(){
        this.sling.bodyA = null;
    }
    display() {
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        imageMODE(CENTER)
        image(polygon_img,this.polygon.position.x,this.polygon.position.y,40,40);
    }
}