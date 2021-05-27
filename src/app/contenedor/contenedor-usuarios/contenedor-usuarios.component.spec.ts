import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorUsuariosComponent } from './contenedor-usuarios.component';

describe('ContenedorUsuariosComponent', () => {
  let component: ContenedorUsuariosComponent;
  let fixture: ComponentFixture<ContenedorUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenedorUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
