import { TestBed, inject } from '@angular/core/testing';

import { StockActionsService } from './stock-actions.service';

describe('StockActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockActionsService]
    });
  });

  it('should be created', inject([StockActionsService], (service: StockActionsService) => {
    expect(service).toBeTruthy();
  }));
});
