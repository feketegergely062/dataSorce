import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersenyekComponent } from './versenyek.component';

describe('VersenyekComponent', () => {
  let component: VersenyekComponent;
  let fixture: ComponentFixture<VersenyekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VersenyekComponent]
    });
    fixture = TestBed.createComponent(VersenyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
