import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasComponent } from './tareas.component';
import { FormsModule } from '@angular/forms';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';


describe('TareasComponent', () => {
  let component: TareasComponent;
  let fixture: ComponentFixture<TareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TareasComponent,
        TareasSimpleComponent 
      ],
      imports : [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
