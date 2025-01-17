import { Component, Input } from '@angular/core';
import { a2Personal } from '../duhansInterface';
@Component({
  selector: 'app-footer-duhans',
  templateUrl: './footer-duhans.component.html',
  styleUrl: './footer-duhans.component.css'
})
export class FooterDuhansComponent {
  @Input() MyData!: a2Personal;

}
