var ball;
var position
var database
function setup(){
    database = firebase.database()
    createCanvas(500,500);
    
    ball.shapeColor = "red";
    var ballposition = database.ref('ball/position')
    ballposition.on("value",readposition,showerror)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x:position.x+x,
        y:position.y+y,        
    })
    
}
function showerror(){
    console.log("errorreadingfromthedatabase")
}
function readposition(data){
    position = data.val()
    ball.x = position.x
    ball.y = position.y
}
//Create variables here
var dog
var dogfood
var Foodcount

function preload()
{
  dog.Image = loadImage("images/Dog.png");
  
}

function setup() {
    createCanvas(500, 500);
    dog = createSprite(250,250,10,10);
}


function draw() {  
 
  drawSprites();
  //add styles here
  if(keyDown(LEFT_ARROW)){
  writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
  writePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
  writePosition(0,-5);
  }
  else if(keyDown(DOWN_ARROW)){
  writePosition(0,+1);
  }
  dog.display();
}
