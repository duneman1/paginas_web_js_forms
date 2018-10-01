import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { FormsModule } from '@angular/forms';
import { SaludoComponent } from './saludo/saludo.component';
import { SaludoLocalComponent } from './saludo-local/saludo-local.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        SaludoComponent,
        SaludoLocalComponent,
      ],
      imports : [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
