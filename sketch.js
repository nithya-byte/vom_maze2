var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	roof=new roof(200,320);
	
mainground=new ground(200,500,400,20);

ground1=new ground(200,470,300,20);
ground2= new ground(200,170,300,20);
ground3= new ground(50,340,20,260);
ground4= new ground(350,320,20,300)

	

	ball1=new Bob(280,420,10);

if(ground1.body!=null &&ground2.body!=null&&ground3.body!=null&&ground4.body!=null && ball1.body!=null)



{
	

	chain2=new SlingShot(ground1.body,roof.body);
chain3=new SlingShot(ground2.body,roof.body);
chain4=new SlingShot(ground3.body,roof.body);
chain5=new SlingShot(ground4.body,roof.body);


}

//chain6= new SlingShot2(ball1.body,{x:200,y:350});
	Engine.run(engine);
	a=0;
  
}


function draw() {
  
  background(0);
  fill("red");
 roof.display();
  fill("pink");
 
 mainground.display();
 ground1.display();
 ground2.display();
 ground3.display();
 ground4.display();
 ball1.display();
 drawSprites();
//chain6.display();

a=a+0.5

if(a>100)
{
	a=0;
}

{
Matter.Body.setAngle(roof.body,a);

}

 
}


  function keyPressed()
  {
	if(keyCode===UP_ARROW){
		console.log(ball1.body.position)
		if(ball1.body.position!=null)
		{
			
			
		var x=ball1.body.position.x+1;
		var y=ball1.body.position.y;
		
		Matter.Body.setPosition(ball1.body,{x:x,y:y});

		
		}
	}
  }


