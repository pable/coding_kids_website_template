let proposedWidth, proposedHeight;

function dimensionsFromClientWidth(){
    const width = document.getElementsByClassName('demo-content')[0].clientWidth;
    const factor = 0.95;
    return [
        factor*width,
        factor*width*proposedHeight/proposedWidth
    ];
}

function createResponsiveCanvas(width, height){
    proposedWidth = width;
    proposedHeight = height;

    const dimensions = dimensionsFromClientWidth();

    createCanvas(dimensions[0], dimensions[1])
        .parent('demo');
}

function windowResized(){
    const dimensions = dimensionsFromClientWidth();

    resizeCanvas(dimensions[0], dimensions[1]);
}
