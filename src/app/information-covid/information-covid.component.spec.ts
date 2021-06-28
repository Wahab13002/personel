import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCovidComponent } from './information-covid.component';

describe('InformationCovidComponent', () => {
  let component: InformationCovidComponent;
  let fixture: ComponentFixture<InformationCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationCovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
