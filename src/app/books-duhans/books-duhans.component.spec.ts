import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDuhansComponent } from './books-duhans.component';

describe('BooksDuhansComponent', () => {
  let component: BooksDuhansComponent;
  let fixture: ComponentFixture<BooksDuhansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksDuhansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksDuhansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
