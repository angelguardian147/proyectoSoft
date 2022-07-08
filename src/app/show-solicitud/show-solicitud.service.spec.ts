import { TestBed } from '@angular/core/testing';

import { ShowSolicitudService } from './show-solicitud.service';

describe('ShowSolicitudService', () => {
  let service: ShowSolicitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowSolicitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
