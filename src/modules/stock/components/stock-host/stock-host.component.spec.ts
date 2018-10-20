import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHostComponent } from './stock-host.component';

describe('StockHostComponent', () => {
  let component: StockHostComponent;
  let fixture: ComponentFixture<StockHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
