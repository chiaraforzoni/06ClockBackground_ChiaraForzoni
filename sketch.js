var sfondo;

function preload() {
    sfondo = loadImage("libraries/pizza.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    
}

function draw() {
    background("#3d251d");
    imageMode(CENTER);
    image(sfondo, width/2,height/2, windowWidth, windowWidth*0.64);
    
    var margineore = windowWidth / 24;
    var marginesecmin = windowWidth / 60;
    
    var ore = margineore * hour();
    var minutes = marginesecmin * minute();
    var seconds = marginesecmin * second();
    
    
      textSize(90);
    
    fill("#7ad14b");
     text(hour()+"pizze", ore,windowHeight/3*0.6);
     text(minute()+"pizze",minutes,windowHeight/3*1.6);
      text(second()+"pizze", seconds,windowHeight/3*2.6);
    textSize(50);
  textFont('Pacifico');
    text("Less diet, \nmore pizza", windowWidth-260,60);
      
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}








function backgroundImage(img) {
    
    var x = 0;
    var y = 0;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch,  x, y, w, h);
}