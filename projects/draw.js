var bus=100;
var rbus=128;
var gbus=0;
var bbus=0;
function setup () {
createResponsiveCanvas (1000, 900);
background (255,255,255);
} 
function draw () {
  fill (rbus,gbus,bbus);
  noStroke();
  if (mouseIsPressed){
    circle (mouseX, mouseY, bus);
  }
  if ( keyIsPressed){   
    if(key=='s'){
      if(bus>0){
        bus=bus-10;
      }
    }
    if(key=='m'){
      bus=bus+10;
    }
    if(key=='b'){
      background (255,255,255);
    }
    if(key=='r'){
      rbus=255;
      gbus=0;
      bbus=0;
    }
    if(key=='w'){
      rbus=255;
      gbus=255;
      bbus=255;
    }
    if(key=='v'){
    rbus=128;
    gbus=0;
    bbus=0;
    
    }
  if(key=='n'){
  rbus=0;
  gbus=0;
  bbus=0;
  
  }
}
 
}