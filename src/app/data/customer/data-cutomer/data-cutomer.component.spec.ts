import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCutomerComponent } from './data-cutomer.component';

describe('DataCutomerComponent', () => {
  let component: DataCutomerComponent;
  let fixture: ComponentFixture<DataCutomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCutomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCutomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
