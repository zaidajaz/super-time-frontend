import { TestBed, inject } from '@angular/core/testing';

import { CustomerActionsService } from './customer-actions.service';

describe('CustomerActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerActionsService]
    });
  });

  it('should be created', inject([CustomerActionsService], (service: CustomerActionsService) => {
    expect(service).toBeTruthy();
  }));
});
