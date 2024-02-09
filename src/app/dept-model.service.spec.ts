import { TestBed } from '@angular/core/testing';

import { DeptModelService } from './dept-model.service';

describe('DeptModelService', () => {
  let service: DeptModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
