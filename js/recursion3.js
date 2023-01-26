let brown1, brown2, slider, slider2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    strokeJoin(ROUND);
    brown1 = color('#d0dea7')
    brown2 = color("#63743e")
    slider = createSlider(10, 60, 10);
    slider.position(10, 10)
    slider.style("width", "200px");
    slider.input(draw);
    slider2 = createSlider(150, 350, 250);
    slider2.position(10,35)
    slider2.style("width","200px" )
    slider2.input(draw);
    noLoop()

}
function draw() {
    background(0);
    resetMatrix();
    let initalheight = map(slider.value(), 10, 90 , 50, 550)
    console.log(slider.value())

    translate(width / 2, height);
    branch(initalheight, 1);
    resetMatrix();
    translate(width / 2, height);
    branch(initalheight,-1)
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
