import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCityComponent } from './selected-city.component';

describe('SelectedCityComponent', () => {
  let component: SelectedCityComponent;
  let fixture: ComponentFixture<SelectedCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SelectedCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
