import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbouquetComponent } from './addbouquet.component';

describe('AddbouquetComponent', () => {
  let component: AddbouquetComponent;
  let fixture: ComponentFixture<AddbouquetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddbouquetComponent]
    });
    fixture = TestBed.createComponent(AddbouquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
