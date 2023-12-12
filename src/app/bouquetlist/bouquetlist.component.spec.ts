import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquetlistComponent } from './bouquetlist.component';

describe('BouquetlistComponent', () => {
  let component: BouquetlistComponent;
  let fixture: ComponentFixture<BouquetlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BouquetlistComponent]
    });
    fixture = TestBed.createComponent(BouquetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
