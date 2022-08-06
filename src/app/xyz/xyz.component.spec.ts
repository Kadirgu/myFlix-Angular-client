import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyzComponent } from './xyz.component';

describe('XyzComponent', () => {
  let component: XyzComponent;
  let fixture: ComponentFixture<XyzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XyzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
