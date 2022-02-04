class Snow{
constructor(){
var options = {
'restitution':0,
'denstity':0.005,
'isStatic':false,
}

this.body = Bodies.rectangle(Math.round(random(20, 370)),10,80,80,options);

this.image = loadImage("snow4.webp");
World.add(world,this.body);
}


display(){
var pos = this.body.position;
imageMode(CENTER);
image(this.image,pos.x,pos.y,40,40);
}

}