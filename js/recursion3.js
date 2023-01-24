let brown1, brown2

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    strokeJoin(ROUND);
    brown1 = color('#d0dea7')
    brown2 = color("#63743e")
    slider = createSlider(10, 90, 45);
    slider.position(10, 10)
    slider.style("width", "200px");
    slider.input(draw);
    noLoop()

}
function draw() {
    background(0);
    resetMatrix();

    translate(width / 2, height);
    branch(250, 1);
    resetMatrix();
    translate(width / 2, height);
    branch(250,-1)
}
function branch(len, direction) {// length of branch to draw
    let maxAngle = slider.value()
    strokeWeight(map(len, 20, 250, 1, 30));
    stroke(lerpColor(brown1, brown2, random(1)));
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 25) {


            // branch 1
            push();
            rotate( maxAngle * direction);
            branch(len * 0.75, direction )
            pop();
            //branch 2
            push();
            rotate( maxAngle * direction);
            branch(len * 0.75, direction)
            pop();
             // branch 1
             push();
             rotate( maxAngle * direction);
             branch(len * 0.6 , direction)
             pop();
      


        }

    }
