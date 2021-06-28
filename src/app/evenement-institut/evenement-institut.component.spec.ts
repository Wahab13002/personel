import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementInstitutComponent } from './evenement-institut.component';

describe('EvenementInstitutComponent', () => {
  let component: EvenementInstitutComponent;
  let fixture: ComponentFixture<EvenementInstitutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementInstitutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementInstitutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
