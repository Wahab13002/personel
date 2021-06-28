import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosqueeComponent } from './mosquee.component';

describe('MosqueeComponent', () => {
  let component: MosqueeComponent;
  let fixture: ComponentFixture<MosqueeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosqueeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
