import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cas-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  
  @ViewChild('localNombre')  nodoLocalNombre: ElementRef

  constructor() { }

  ngOnInit() {
    console.log(this.nodoLocalNombre)
   
  }

  btnBorrar() {
    
  }
}
