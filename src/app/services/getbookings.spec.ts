import { TestBed } from '@angular/core/testing';

import { Getbookings } from './getbookings';

describe('Getbookings', () => {
  let service: Getbookings;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Getbookings);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
