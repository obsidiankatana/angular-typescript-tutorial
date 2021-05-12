import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
    selector: 'courses', // <courses>
    template: `
                <h2>{{ title }}<h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{course}}
                    </li>
                </ul>
              `
})
export class CoursesComponent {
    title = "List of courses";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    // Add the logic to call an http endpoint
}