import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css']
})
export class SaludoLocalComponent implements OnInit {

  nombre: string
  nombre1: string

  constructor() { }

  ngOnInit() {
    this.nombre = 'Pepe'
    this.nombre1 = "Juan"
  }

  btnBorrar() {
    this.nombre = ''
    this.nombre1 = ''
  }
}
