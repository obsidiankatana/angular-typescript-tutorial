import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs: ['isSelected']
})
export class FavoriteComponent implements OnInit {
  // making the isSelected variable receive input
  // is-selected becomes an alias for the isSelected
  @Input('is-selected') isSelected!: boolean;
  // making the change event output a function
  @Output('change') change = new EventEmitter();
  // isSelected!: boolean;

  constructor() { }

  ngOnInit() { }

  doThis() {
    // if selected is true set to false | if selected is false set to true
    this.isSelected = !this.isSelected;
    // actually emitting the event
    // in theis emitter passing the isSelected variable sends the state of
    // isSelected when it's true or false and detecting that change
    // and sending it through
    // you can also pass in objects
    // this.change.emit(this.isSelected);
    this.change.emit({ newValue: this.isSelected })
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
