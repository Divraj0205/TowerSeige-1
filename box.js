class box {
    constructor(x,y,width,height,color) {
      var options = {
          isStatic: false,
          density:1.6
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.color=color;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
      strokeWeight(5);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
