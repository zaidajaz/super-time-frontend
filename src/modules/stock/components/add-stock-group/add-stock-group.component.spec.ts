import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockGroupComponent } from './add-stock-group.component';

describe('AddStockGroupComponent', () => {
  let component: AddStockGroupComponent;
  let fixture: ComponentFixture<AddStockGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStockGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStockGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
