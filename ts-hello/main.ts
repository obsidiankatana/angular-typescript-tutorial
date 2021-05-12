import { LikeComponent } from './like.component';

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likeCount: ${component.likesCount}, isSelected: ${component.isSelected}`)

// import { Point } from './point';



// This is an object aka an instance of a class
// let point = new Point(1, 2);
// let x = point.X
// point.X
// point.draw();



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