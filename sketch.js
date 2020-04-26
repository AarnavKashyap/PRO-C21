var bullet,wall;
function setup() {
  createCanvas(1600, 400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=new Bullet(weight,speed);
  wall=new Wall(thickness);
  
}


function draw() {
  background(0);  
 
  if(hasCollided(bullet, wall))
  {
  	bullet.sprite.velocityX=0;
  	var damage=0.5 * bullet.weight * bullet.speed* bullet.speed/(wall.thickness *wall.thickness *wall.thickness);
	if(damage>10)
	{
		wall.sprite.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.sprite.shapeColor=color(0,255,0);
	}
	console.log(damage)

  }
  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.sprite.x +lbullet.sprite.width;
	wallLeftEdge=lwall.sprite.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
