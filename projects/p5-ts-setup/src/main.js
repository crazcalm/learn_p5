import p5 from "p5";
const sketch = (p) => {
    p.setup = () => {
        p.createCanvas(800, 600);
        p.background(30);
    };
    p.draw = () => {
        p.fill(0, 255, 200);
        p.circle(p.width / 2, p.height / 2, 100);
    };
};
new p5(sketch);
