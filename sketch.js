
//Create variables here
var dog
var dogImage
var dogfood
var Foodcount
var score = 30

function preload()
{
  dogImage = loadImage("images/Dog.png");
  
}

function setup() {
    createCanvas(500, 500);
    dog = createSprite(250,250,10,10);
    dog.addImage(dogImage)
    dog.scale = 0.2
    
}


function draw() {  
  background("lightgreen")
  textSize(30)
  text("food "+score,20,40)
  drawSprites();
  if(keyDown(UP_ARROW)){
      score = score-1
  }
 

  
  dog.display();
}
