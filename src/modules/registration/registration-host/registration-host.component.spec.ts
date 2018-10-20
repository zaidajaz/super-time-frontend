import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationHostComponent } from './registration-host.component';

describe('RegistrationHostComponent', () => {
  let component: RegistrationHostComponent;
  let fixture: ComponentFixture<RegistrationHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
