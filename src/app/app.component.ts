import { Component } from '@angular/core';
import { a2Personal, myBooks,campusData } from './duhansInterface';
import Assignment2data from '../assets/data/Assignment02.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A2duhans';

  duhansPersonal: a2Personal = Assignment2data.a2Personal;
  duhansBooks: myBooks[] = Assignment2data.myBooks;
  duhansCampus: campusData[]= Assignment2data.campusData;

}
