
      
      
let x = 100,
y = 100,
angle1 = 0.0,
segLength = 0;

function setup() {
createCanvas(968, 758);
}

function draw() {
    background(0,179,60);

dx = mouseX - x;
dy = mouseY - y;
angle1 = atan2(dy, dx);
x = mouseX - cos(angle1) * segLength;
y = mouseY - sin(angle1) * segLength;

fill(255,255,0);
ellipse(x, y, 50, 30);

fill(0,0,0);
rect(x-15, y-13, 10, 26);

fill(0,0,0);
rect(x, y-13, 10, 28);

fill(0,0,0);
ellipse(x+18, y-4, 4, 4);

fill(0,0,0);
rect(x-30, y, 4, 3);

fill(200);
ellipse(x-6, y-30, 20, 30);

fill(0,0,0);
rect(x+18, y+5, 4, 3);

fill(0,0,0);
rect(x+17, y-30, 3, 20);

fill(0,0,0);
ellipse(x+18, y+5, 4, 3);

fill(0,0,0);
ellipse(x+20, y-32, 7, 3);
}
