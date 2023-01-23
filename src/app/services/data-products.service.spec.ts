import { TestBed } from '@angular/core/testing';

import { DataProductsService } from './data-products.service';

describe('DataProductsService', () => {
  let service: DataProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
