import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPrayerTimeComponent } from './information-prayer-time.component';

describe('InformationPrayerTimeComponent', () => {
  let component: InformationPrayerTimeComponent;
  let fixture: ComponentFixture<InformationPrayerTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationPrayerTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPrayerTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
