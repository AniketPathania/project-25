class Ball{
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;

        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.8
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.image = loadImage("sprites/paper.png")
    }
  display(){
      var pos = this.body.position;
      fill("green");
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,40,40);
  }

    
}