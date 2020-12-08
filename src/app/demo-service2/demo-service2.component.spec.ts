import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoService2Component } from './demo-service2.component';

describe('DemoService2Component', () => {
  let component: DemoService2Component;
  let fixture: ComponentFixture<DemoService2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoService2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoService2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
