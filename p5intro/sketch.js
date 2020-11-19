//Loads only once when website loads
function setup() {
    let cnv = createCanvas(innerWidth,innerHeight);
    cnv.parent("#sketch-parent");
    background(230,100,120)
  }
  //runs at 60 or 60+ fps
  function draw() {
    //background(225);
    stroke(0,0,255);
    strokeWeight(1)
    fill(255,55,mouseX,mouseY)
    noStroke();  
    ellipse (mouseX,mouseY, 50,50)
  }