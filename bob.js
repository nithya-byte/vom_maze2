  class Bob{
    constructor(x, y,radius) {
        var options = {
           
          restitution : 2.0,
          isStatic:true
        
          
        
            
             
            
        }
        this.body = Bodies.circle(x, y, radius, options);
       this.radius = radius;
        World.add(world, this.body);
       console.log(this.body);
      } 
      display(){
       
        ellipseMode(RADIUS);
        fill(128,0,128);
        ellipse( this.body.position.x,this.body.position.y,this.radius );
        
       
      }
}