let brown1, brown2

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noLoop();
    brown1 = color('#1b120c')
    brown2 = color("#574f4c")

}
function draw() {
    background(0);
    translate(width / 2, height);
    branch(250);
}
function branch(len) {// length of branch to draw
    let maxAngle = 45;
    strokeWeight(map(len, 20, 250, 1, 20));
    stroke(lerpColor(brown1, brown2, random(0.4, 0.7)));
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 25) {


        if (len < 50) {
            //leaves
            let r = 255 + random(-20, 20);
            let g = 183 + random(-20, 20);
            let b = 197 + random(-20, 20);
            fill(r, g, b, 200);
            let size = 15 + random(15);
            noStroke()
            // triangle(-size/2, 0, size/2, 0, 0, -size);
            beginShape()
            let radius = random(10, 20);
            for (let i = 45; i < 135; i++) {
                let x = radius * cos(i);
                let y = radius * sin(i);
                vertex(x, y);
            }
            for (let i = 135; i > 45; i--) {
                let x = radius * cos(i);
                let y = radius * sin(-i);
                vertex(x, y);
            }
            endShape(CLOSE);

        }
        else {
            // branch 1
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.4)
            pop();
            //branch 2
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.87)
            pop();
            // branch 3
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.67)
            pop();
            // branch 4
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.77)
            pop();

            
        }

    }
}