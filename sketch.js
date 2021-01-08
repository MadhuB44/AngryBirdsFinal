/*//data types
//number
var num = 546;
console.log(num);

//string
var str = "Hello, I am  a string";
console.log(str);

//boolean
var bool = false;
console.log(bool)

//undefined
var object;
console.log(object);

//reassigning some value to undefined
//null
object = null;
console.log(null);

//Examples of arrays

//an array holding same data type
var arr1 = [76,98,145,986];
console.log(arr1);

//an array holding different data type
var arr2 = [655,"Hello World", true];
console.log(arr2);
console.log(arr2[1]);

//an array holding lists of arrays
var arr3 = [[54,098,"Hey"],[544,567,315,776],[null,true,false,654,"heyyy"]];
console.log(arr3);
console.log(arr3[2]);
console.log(arr3[2][2]);

//adding data to the array
arr3.push(56788);
console.log(arr3);

//deleting data from an array
arr3.pop();
console.log(arr3);

//checking the length of an array
//arr3.length;
//console.log(arr3);*/

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var platform
var gameState="start"
var score=0

function preload() {
  //  backgroundImg = loadImage("sprites/bg.png");
    getBackgroundImage(); 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    platform1 = new Ground(150,310,300,175)

    bird = new Bird(200,50);

    //log6 = new Log(100,200,50,PI/2);

    sling= new SlingShot(bird.body,{x:200,y:50});

     

}

function draw(){
   if(backgroundImg)
   {
       background(backgroundImg);
    } 
    fill("white")
    textSize(20)
 text("score:"+score,1100,40)
 
    Engine.update(engine);
    pig1.score()
    pig3.score()
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    platform1.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    
//log6.display();

  sling.display()
    //x1,y1,x2,y2- for the 2 end points
  

    
}

function mouseReleased(){
  sling.fly();
  gameState="launch"
}

function mouseDragged(){
   if(gameState==="start")
   { 
       Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
   }
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(bird.body,{x:200,y:50})
        sling.attach(bird.body)
        gameState="start"
        bird.trajectory=[]
    }
}

async function getBackgroundImage(){
    /*var response = await fetch("https://worldclockapi.com/api/json/est/now");
    var responseJson = await response.json();
    var dateTime = responseJson.currentDateTime;
    var hour = dateTime.slice(11,13);
    console.log(hour);*/
    var hour = 23;

    if(hour>=06 && hour<=17)
    {
        bg="sprites/bg.png"
    }

    else{

        bg="sprites/bg2.jpg"
      }

      backgroundImg=loadImage(bg)
}
