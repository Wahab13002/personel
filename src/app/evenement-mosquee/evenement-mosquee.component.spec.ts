import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementMosqueeComponent } from './evenement-mosquee.component';

describe('EvenementMosqueeComponent', () => {
  let component: EvenementMosqueeComponent;
  let fixture: ComponentFixture<EvenementMosqueeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementMosqueeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementMosqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
