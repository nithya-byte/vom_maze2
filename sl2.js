class SlingShot2{
    constructor(bodyA, pointB){
        
       
        var options = {
            bodyA: bodyA,
            pointB: pointB,stiffness:0,
            length:1            
            
        }
       
        this.sling = Matter.Constraint.create(options);
        this.pointb=pointB;
        World.add(world, this.sling);
        
    }

    attach(body)
    {
        this.sling.bodyA=body;
    }
    fly()
    {
        this.sling.bodyA=null;
    }
    display()
    {
        if(this.sling.bodyA)
        {
        var pointa=this.sling.bodyA.position;
        var pointb=this.pointb;
        strokeWeight(8);
       
        stroke("white");

        line(pointa.x,pointa.y,pointb.x,pointb.y)
        }
    }
}

    
