import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHostComponent } from './customer-host.component';

describe('CustomerHostComponent', () => {
  let component: CustomerHostComponent;
  let fixture: ComponentFixture<CustomerHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
