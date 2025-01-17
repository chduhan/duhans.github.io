import { Component, Input } from '@angular/core';
import { a2Personal  } from '../duhansInterface';
@Component({
  selector: 'app-header-duhans',
  templateUrl: './header-duhans.component.html',
  styleUrl: './header-duhans.component.css'
})
export class HeaderDuhansComponent {
  @Input() MyData!: a2Personal;

}
