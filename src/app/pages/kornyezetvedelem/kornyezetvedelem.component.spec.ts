import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KornyezetvedelemComponent } from './kornyezetvedelem.component';

describe('KornyezetvedelemComponent', () => {
  let component: KornyezetvedelemComponent;
  let fixture: ComponentFixture<KornyezetvedelemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KornyezetvedelemComponent]
    });
    fixture = TestBed.createComponent(KornyezetvedelemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
