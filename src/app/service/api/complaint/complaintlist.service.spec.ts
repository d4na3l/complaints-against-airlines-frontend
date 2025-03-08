import { TestBed } from '@angular/core/testing';

import { ComplaintlistService } from './complaintlist.service';

describe('ComplaintlistService', () => {
  let service: ComplaintlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
