//User Settings///////////////////////////////////
//                                              //
//how many particles you want to have at once   //
var maxGen = 1000;                              //
//speed of particles moving from the cursor     //
var speed = 2;                                  //
//                                              //
//////////////////////////////////////////////////


//stores all the particle data
var pos = [];

//calls onse before draw
function setup(){
  //make canvas
  createCanvas(windowWidth,windowHeight);
  //color the background black
  background(0);
  //don't draw stroke
  noStroke();
  //change the frame rate to 30 fps
  frameRate(30);
}

//privious mouse position
var mpx,mpy;
//it is outside just so I can monitor
var move;

//call every frame
function draw(){
  //clear screen
  background(0);

  //calculate mouse movement
  var mx = abs(mpx-mouseX);
  var my = abs(mpy-mouseY);
  move = sqrt(mx*mx+my*my);

  //add particles amount of mouse movement
  for(var i = 0;i<move;i+=10){
    pos.push([mouseX,mouseY,random(TWO_PI),random(255),random(255),random(255),random(100)]);
  }

  //delete particles over maxGen
  while(pos.length>maxGen){
    pos.splice(0,1);
  }

  //for every particle
  for(var i = 0;i<pos.length;i++){
    //fill with data from particle pos
    fill(pos[i][3],pos[i][4],pos[i][5]);

    //draw a ellipse from pos 
    ellipse(pos[i][0],pos[i][1],pos[i][6],pos[i][6]);

    //set new positions
    pos[i][0] += sin(pos[i][2])*speed;
    pos[i][1] += cos(pos[i][2])*speed;
    pos[i][6]--;

    //if particle is smaller than 1 delete
    if(pos[i][6]<=0){
      pos.splice(i,1);
      i--;
    }
  }

  //store previous mouse
  mpx=mouseX;
  mpy=mouseY;
}