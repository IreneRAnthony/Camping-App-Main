import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTripComponent } from './about-trip.component';

describe('AboutTripComponent', () => {
  let component: AboutTripComponent;
  let fixture: ComponentFixture<AboutTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
