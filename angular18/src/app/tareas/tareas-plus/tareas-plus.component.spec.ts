import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasPlusComponent } from './tareas-plus.component';
import { TareasComponent } from '../tareas.component';
import { FormsModule } from '@angular/forms';

describe('TareasPlusComponent', () => {
  let component: TareasPlusComponent;
  let fixture: ComponentFixture<TareasPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasPlusComponent ],
      imports : [TareasComponent, FormsModule]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
