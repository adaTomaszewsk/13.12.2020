import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataCutomerComponent } from './edit-data-cutomer.component';

describe('EditDataCutomerComponent', () => {
  let component: EditDataCutomerComponent;
  let fixture: ComponentFixture<EditDataCutomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDataCutomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataCutomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
