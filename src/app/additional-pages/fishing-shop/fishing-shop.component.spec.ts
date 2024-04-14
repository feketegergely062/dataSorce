import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingShopComponent } from './fishing-shop.component';

describe('FishingShopComponent', () => {
  let component: FishingShopComponent;
  let fixture: ComponentFixture<FishingShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishingShopComponent]
    });
    fixture = TestBed.createComponent(FishingShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
