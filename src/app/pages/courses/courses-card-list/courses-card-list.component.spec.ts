import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCardListComponent } from './courses-card-list.component';

describe('CoursesCardListComponent', () => {
  let component: CoursesCardListComponent;
  let fixture: ComponentFixture<CoursesCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCardListComponent ]
    })
    .compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(CoursesCardListComponent);
      component = fixture.componentInstance;
    });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CoursesCardListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    console.log(component);
  });
});
