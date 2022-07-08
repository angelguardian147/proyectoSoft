import { TestBed } from '@angular/core/testing';

import { RegSolicitudService } from './reg-solicitud.service';

describe('RegSolicitudService', () => {
  let service: RegSolicitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegSolicitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
