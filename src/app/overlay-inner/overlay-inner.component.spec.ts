import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayInnerComponent } from './overlay-inner.component';

describe('OverlayInnerComponent', () => {
  let component: OverlayInnerComponent;
  let fixture: ComponentFixture<OverlayInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
