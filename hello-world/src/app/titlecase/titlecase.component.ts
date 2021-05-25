import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'titlecase',
  templateUrl: './titlecase.component.html',
  styleUrls: ['./titlecase.component.css']
})
export class TitlecaseComponent {
  textInput!: string;
  inputText: any;
}
