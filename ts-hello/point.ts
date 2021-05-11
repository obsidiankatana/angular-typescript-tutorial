// This is a class
export class Point {
    _x: number;
    _y: number;

    constructor(_x?: number, _y?: number) {
        this._x = _x;
        this._y = _y;
    }

    draw() {
        console.log(`X: ${this._x}, Y: ${this._y}`);
    };

    get X() {
        return this._x
    }

    set X(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    }

    getDistance: (another: Point) => {
        // ...
    };
}

