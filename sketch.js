 var road ,roadimage,car,carimage 
 function preload () {
roadimage=loadImage("roadtrack1.jpg");
carimage=loadImage("carimage.png");


 }

 function setup() {
createCanvas (800,800);
road=createSprite(425,400);
road.addImage(roadimage)
car=createSprite(100,180);
car.addImage(carimage);
car.scale=0.3
//road.scale=2
roadimage.scale=4
}

function draw() {
  background(0);  
  if(road.y>600){
  road.y=300
  }
  if(keyDown("W")){
  car.x=car.x+6
  }
  if(keyDown("s")){
    car.x=car.x-6
    }
    
      
  drawSprites();


}