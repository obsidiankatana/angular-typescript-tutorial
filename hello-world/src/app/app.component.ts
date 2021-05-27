import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component'
import { numOfLikes } from './like/like.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Angular App';
  imageUrl = 'https://images.unsplash.com/photo-1621891334481-5c14b369d9d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80'

  tweet = {
    body: "Here is the body of the tweet...",
    isLiked: false,
    likesCount: 0
  }

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite has changed!", eventArgs)
  }

  onHeart(likeEvent: numOfLikes) {
    this.tweet.likesCount = likeEvent.numVal
  }
}
