import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHttpComponent } from './demo-http.component';

describe('DemoHttpComponent', () => {
  let component: DemoHttpComponent;
  let fixture: ComponentFixture<DemoHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
