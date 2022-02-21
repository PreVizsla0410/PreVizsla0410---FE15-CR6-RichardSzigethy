import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardswithinfoComponent } from './cardswithinfo.component';

describe('CardswithinfoComponent', () => {
  let component: CardswithinfoComponent;
  let fixture: ComponentFixture<CardswithinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardswithinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardswithinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
