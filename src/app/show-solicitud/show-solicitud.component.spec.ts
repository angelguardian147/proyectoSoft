import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSolicitudComponent } from './show-solicitud.component';

describe('ShowSolicitudComponent', () => {
  let component: ShowSolicitudComponent;
  let fixture: ComponentFixture<ShowSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
