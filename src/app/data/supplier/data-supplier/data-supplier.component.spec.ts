import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSupplierComponent } from './data-supplier.component';

describe('DataSupplierComponent', () => {
  let component: DataSupplierComponent;
  let fixture: ComponentFixture<DataSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
