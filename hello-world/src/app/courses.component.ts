import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses', // <courses>
    // template: `
    //             <button class="btn btn-primary">Save</button>
    //             <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    //           `
    template: `
                {{text | summary}}
              `
})
export class CoursesComponent {
    text = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum est ante, sed venenatis neque aliquam quis. Aenean sem nunc, vulputate id aliquam quis, tristique eu lorem. Vestibulum vitae congue sem, luctus porta urna. Sed placerat, enim id tincidunt venenatis, purus est sagittis lacus, sed sagittis ante erat a nisl.
    `
    // email: any;
    // email = "me@example.com"

    // onKeyUp() {
    //     console.log(this.email);
    // }
}