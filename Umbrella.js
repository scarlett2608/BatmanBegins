class Umbrella {
    constructor(x,y){
        this.body = Bodies.circle(x,y,70,{restitution:0,isStatic:true});
        World.add(world,this.body)
        this.image = loadImage('images/Walking Frame/walking_1.png')
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,200,200);
        //ellipseMode(CENTER);
        //ellipse(pos.x,pos.y,60,60)
        //console.log('this is an error')
    }
}