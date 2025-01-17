import { Component, Input } from '@angular/core';
import { campusData } from '../duhansInterface';
@Component({
  selector: 'app-campus-duhans',
  templateUrl: './campus-duhans.component.html',
  styleUrl: './campus-duhans.component.css'
})
export class CampusDuhansComponent {
  @Input() campusData991701782!: campusData[];

  selectCampus: string = '';
  campusAdd: { campus: string; street: string; city: string } = {
    campus: '',
    street: '',
    city: ''
  };

  onChange() {
    this.campusAdd = this.campusData991701782.find(campus => campus.campus === this.selectCampus) || { campus: '', street: '', city: '' };
  }
}