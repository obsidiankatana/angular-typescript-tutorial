import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authorTitle = "This is an author";
  authors;
  authNum;
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.authNum = service.getAuthorNum()
  }

}
