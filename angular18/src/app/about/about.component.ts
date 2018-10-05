import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  cliente: object
  empresa: string
  constructor() { 
    
  }

  ngOnInit() {
    this.empresa = 'CAS'
    this.cliente = { nombre: 'Sermicro'}
  }

}
