import { TestBed } from '@angular/core/testing';

import { FetchDataResolver } from './fetch-data.resolver';

describe('FetchDataService', () => {
  let service: FetchDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchDataResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
