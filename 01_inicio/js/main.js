export class Form {
    constructor() {
       console.log ('Iniciado Js, clase Main')
       this.inpNombre = document.querySelector('#nombre')
       this.btnEnviar = document.querySelector('#btnEnviar')
       this.btnBorrar = document.querySelector('#btnBorrar')
       this.output = document.querySelector('#output')
       console.dir(this)
       this.btnEnviar.addEventListener('click',
            this.enviar.bind(this))
        this.btnBorrar.addEventListener('click',
            this.borrar.bind(this))
        
    }
    enviar() {
        /* const nombre = this.inpNombre.value
        this.output.innerHTML = `Hola ${nombre}` */

        this.output.innerHTML = `Hola ${this.inpNombre.value}`

    }
    borrar() {
        this.inpNombre.value = ''
        this.output.innerHTML = ''
    }
} 

export class Main2 {
    constructor(name) {
        this.name = name
        this.x = new Interna()
    }
} 

class Interna {}

/* function Main (nombre) {
    this.nombre = nombre
}

let x = new Main('Pepe') */