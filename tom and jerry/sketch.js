var cat,catImg,catImg2,catImg3;
var mouse,mouseImg,mouseImg2;
var garden,gardenImg;

function preload() {
    gardenImg = loadImage("garden.png");
    catImg = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimtion("cat4.png");
    mouseImg = loadImage("mouse4.png");
    mouseImg2 = loadAnimation("mouse1.png","mouse2.png","mouse3.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(0,0,10,10);
    garden.addImage(gardenImg);
    garden.scale = 0.8;

    cat = createSprite(800,700,10,10);
    cat.addImage(catImg);

    mouse = createSprite(1000,700,10,10);
    mouse.addAnimation(mouseImg2);

}

function draw() {

    background(0);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catSitting",catImg3);
        cat.changeAnimation("catSitting");
        mouse.addAnimation("mouseSitting",mouseImg);
        mouse.changeAnimation("mouseSitting");
     
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
}


}
