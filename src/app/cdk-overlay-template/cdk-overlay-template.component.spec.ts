import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkOverlayTemplateComponent } from './cdk-overlay-template.component';

describe('CdkOverlayTemplateComponent', () => {
  let component: CdkOverlayTemplateComponent;
  let fixture: ComponentFixture<CdkOverlayTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkOverlayTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkOverlayTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
