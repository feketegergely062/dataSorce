import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JegyComponent } from './jegy.component';

describe('JegyComponent', () => {
  let component: JegyComponent;
  let fixture: ComponentFixture<JegyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JegyComponent]
    });
    fixture = TestBed.createComponent(JegyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
