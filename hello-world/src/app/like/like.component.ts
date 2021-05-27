import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('isActive') isClicked!: boolean;
  @Output('like-event') update = new EventEmitter;
  @Input('likesCount') likeNum!: number;

  onLike() {
    this.isClicked = !this.isClicked
    // if button is clicked decrease likeNum by 1, otherwise increase by one
    this.likeNum += (this.isClicked) ? +1 : -1
    // if (this.isClicked) {
    //   this.likeNum += 1
    // } else {
    //   this.likeNum -= 1
    // }

    this.update.emit(this.isClicked)
    this.update.emit({ numVal: this.likeNum })
  }
}

export interface numOfLikes {
  numVal: number;
}