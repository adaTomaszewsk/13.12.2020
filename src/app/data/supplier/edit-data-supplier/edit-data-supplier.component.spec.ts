import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataSupplierComponent } from './edit-data-supplier.component';

describe('EditDataSupplierComponent', () => {
  let component: EditDataSupplierComponent;
  let fixture: ComponentFixture<EditDataSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDataSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
