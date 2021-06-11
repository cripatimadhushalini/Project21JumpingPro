var canvas;
var music;
var sprite1;
var sprite2;
var sprite3;
var sprite4;
var box;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    music.loop();

    sprite1 = createSprite(100,590,150,20);
    sprite1.shapeColor = "blue";

    sprite2 = createSprite(300,590,150,20);
    sprite2.shapeColor = "orange";

    sprite3 = createSprite(500,590,150,20);
    sprite3.shapeColor = "red";

    sprite4 = createSprite(700,590,150,20);
    sprite4.shapeColor = "green";

    box = createSprite(200,200,20,20);
    box.shapeColor = "white";

    box.velocityY = 3;
    box.velocityX = 3;
}

function draw() {
    background(rgb(169,169,169));
    
   edges=createEdgeSprites();
   box.bounceOff(edges);
    
    if(sprite3.isTouching(box) && box.bounceOff(sprite3)){
        box.shapeColor = "red";
    }

    if(sprite1.isTouching(box) && box.bounceOff(sprite1)){
        box.shapeColor = "blue";
    }

    if(sprite2.isTouching(box) && box.bounceOff(sprite2)){
        box.shapeColor = "orange"
        music.loop = false;
    }

    if(sprite4.isTouching(box) && box.bounceOff(sprite4)){
        box.shapeColor = "green"
    }

    console.log(box.x)
    drawSprites();
    
    if(sprite1.isTouching(box)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        music.stop();
    }
}
