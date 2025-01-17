import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusDuhansComponent } from './campus-duhans.component';

describe('CampusDuhansComponent', () => {
  let component: CampusDuhansComponent;
  let fixture: ComponentFixture<CampusDuhansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampusDuhansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampusDuhansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
