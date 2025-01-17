import { Component, Input } from '@angular/core';
import { myBooks} from '../duhansInterface';
@Component({
  selector: 'app-books-duhans',
  templateUrl: './books-duhans.component.html',
  styleUrl: './books-duhans.component.css'
})
export class BooksDuhansComponent {
  @Input() myBooks991701782!: myBooks[];

  displayedColumns: string[] = ["authorName","bookTitle","published"];

}
