function main() {

    function promesas() {
        return new Promise(
            (resolve) => {
                setTimeout (() => resolve('Ha pasado un rato'), 3000)
            }
        )
    }

    // Otra manera de gestionar promesas.
    /* function pintar(msg) {
        console.log(msg)
    }
    
    promesas()
    .then(pintar) */

    promesas().then(
        (response) => { console.log(response)}
    )

     console.log('Ultima linea')


}

document.addEventListener('DOMContentLoaded', main)