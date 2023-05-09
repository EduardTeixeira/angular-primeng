/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MtlsService } from './Mtls.service';

describe('Service: Mtls', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MtlsService]
    });
  });

  it('should ...', inject([MtlsService], (service: MtlsService) => {
    expect(service).toBeTruthy();
  }));
});
