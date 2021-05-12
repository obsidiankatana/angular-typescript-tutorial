export class LikeComponent {
    constructor(private _likesCount: number, private _isSelected: boolean) {
    }

    onClick() {
        // if isSelected = true then increase likeCount by 1 otherwis if false decrease by 1
        this._likesCount += (this._isSelected) ? -1 : +1
        this._isSelected = !this._isSelected;
    }

    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }
}
