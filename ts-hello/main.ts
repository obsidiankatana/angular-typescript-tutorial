// This is a class
class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log(`X: ${this.x}, Y: ${this.y}`);
    };

    getDistance: (another: Point) => {
        // ...
    };
}

// This is an object aka an instance of a class
let point = new Point(1, 2);
point.draw();



// let log = function(message) {
//     console.log(message);
// }

// let dLog = (message) => {
//     console.log(message);
// }

// let dLog = (message) => console.log(message);

// let message;
// message = 'abc'
// let endsWithC = (<string>message).endsWith('c');
// let alternateWay = (message as string).endsWith('c');


// let a: number;
// let b: boolean;
// let c: string;

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color {Red = 0, Green = 1, Blue = 2, Puirple = 3};
// let backgroundColor = Color.Red;