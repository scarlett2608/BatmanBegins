class Drop {
    constructor(x,y){
        this.body = Bodies.circle(x,y,10,{restitution:0,isStatic:false});
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        fill('deepskyblue')
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,10,10);
    }

    update(){
      if(this.body.position.y > 500){
          Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
      }
    }
}