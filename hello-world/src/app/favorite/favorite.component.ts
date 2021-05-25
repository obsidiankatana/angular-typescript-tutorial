import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isSelected: boolean = false;

  constructor() { }

  ngOnInit() { }

  doThis() {
    // if selected is true set to false | if selected is false set to true
    this.isSelected = !this.isSelected;
  }

}
