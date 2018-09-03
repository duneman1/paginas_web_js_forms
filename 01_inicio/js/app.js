//import { Main, Main2 } from './main.js'

import { Form } from './main.js'
import { Interactivo } from './interactivo.js'
// Primera manera.
/* function iniciar() {
    console.log ("Iniciado JS")
}

document.addEventListener ('DOMContentLoaded', iniciar) */

//2 Metodo, con funcion anonima
/* document.addEventListener('DOMContentLoaded', function () {
    console.log("Iniciado JS, función anónima")
}) */

// 3 metodo, con funcion anonima arrow
/* document.addEventListener('DOMContentLoaded', () =>
    console.log("Iniciado JS, función anónima arrow")
) */


/* document.addEventListener('DOMContentLoaded', 
                            () => new Main ()
    
) */

document.addEventListener('DOMContentLoaded', () => {
    new Form()
    new Interactivo()
})

