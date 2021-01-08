class SlingShot{
  constructor(bodyA,pointB){
    var options = {
      bodyA:bodyA,
      pointB:pointB,
      stiffness:0.10,
      length:20
    }
    this.sling1=loadImage("sprites/sling1.png");
    this.sling2=loadImage("sprites/sling2.png");
    this.sling3=loadImage("sprites/sling3.png");
    this.pointB=pointB
    this.sling=Constraint.create(options);
    
    World.add(world,this.sling)


  }
  
  display(){
    image(this.sling1, 200,24);
    image(this.sling2, 170,24);
    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;

    push() 
    stroke(48,22,8);
    if(pointA.x<220){
      strokeWeight(7)
      line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
      line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)
      image(this.sling3,pointA.x-30,pointA.y-17,15,40)

    }
    else{
      strokeWeight(4)
      line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
      line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3)
      image(this.sling3,pointA.x+25,pointA.y-17,15,40)

    }
    pop()
    }
  }

  fly(){
    this.sling.bodyA=null;  
 }
 
 attach(body){
  this.sling.bodyA=body
 }
}

