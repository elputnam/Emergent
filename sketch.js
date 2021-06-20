let float = []
let rad = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
  let num = width*.3;
  //let rad = 0;
  for (let i = 0; i < num; i++){
    float.push(new Bubble());
  }

}

function draw() {
  background(random(50), 0.5);
  colorMode(HSB);
  print(mouseX, mouseY);
  ripples();
  push();
  translate(random(-width*.05, width*.05),random(height*.1, height*.15));
  
  rad += 10;
  dandelion();
  pop();

  for (let i = 0; i < float.length; i++){
    float[i].display();
    float[i].update();
    float[i].edge();
  }

  if (rad > width){
    rad = 0;
 } 
}

function dandelion(){
  noFill();
  //stem
  strokeWeight(3);
  stroke(150, random(200,360), random(100));
  beginShape();
  curveVertex(random(width*.47, width*.53), height*0.75);
  curveVertex(random(width*.47, width*.53), height*0.75);
  curveVertex(random(width*.5, width*.6), height*0.6);
  curveVertex(random(width*0.48, width*0.52), height*0.5);
  curveVertex(random(width*0.4, width*0.5), height*0.4);
  curveVertex(width*0.5, height*0.25);
  curveVertex(width*0.5, height*0.25);
  endShape();
  
  //flower head
  strokeWeight(5);
  for (i = 0; i < 70; i++){
    stroke(random(45, 50), random(200, 360), random(360));
    line(width*.5, height*.25, random(width*0.5-100, width*0.5+100), random(height*0.25-150,height*0.25+50));
  }
}

function ripples() {
  strokeWeight(random(10));
  noFill();
  stroke(random(100, 250), random(360), random(200,360), random(0.3, 0.7));
  circle(width*.5, height*.35, rad);
} 

class Bubble{
  constructor(){
    this.loc = createVector(random(width), random(height,height+50));
    this.len = random(10,20);
    this.speed = random(6);
  }

  display(){
    //bubble
    noStroke();
    fill(random(300,360), random(360), random(360), 0.5);
    circle(this.loc.x, this.loc.y, this.len);
  }

  update(){
    this.loc.y -= this.speed;
    this.loc.x += random(-5, 5);
  }

  edge(){
    if (this.loc.y < 0){
      this.loc.y = height+50;
    }
  }
}
