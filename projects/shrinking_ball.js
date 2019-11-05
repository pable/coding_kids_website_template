let ballSize = 0;
function setup(){
    createResponsiveCanvas(900, 600);
}

function draw(){
    fill(random(0, 255), random(0, 255), random(0, 255));
    circle(mouseX, mouseY, ballSize);
    if(mouseIsPressed){
        ballSize = ballSize + 1;
    }
    else{
        if(ballSize > 0){
            ballSize = ballSize - 1;
        }
    }
}
