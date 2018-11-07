import { TestBed } from '@angular/core/testing';

import { ServiceGenService } from './service-gen.service';

describe('ServiceGenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceGenService = TestBed.get(ServiceGenService);
    expect(service).toBeTruthy();
  });
});
