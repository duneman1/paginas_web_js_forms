export class Form {
    /**
     *  Prpcesa un radio Button 
     */
    setRadio(name) {
        // let aTurnos = document.getElementsByName('turno')
        // let id = '[name=' + name + ']' // Es como se hacia antes
        let id = `[name='${name}']`
        let aRadio = document.querySelectorAll(id)
        //console.log(aTurnos)
        for (let i = 0; i < aRadio.length; i++) {
            const item = aRadio[i];
            if (item.checked) {
                return item.value
            }
        }
    }
    /**
     * Procesa un Select/Opciones
     */
    setSelect(name) {
        const opciones = document.querySelector(`#${name}`)
        //console.dir(curso.selectedIndex)
        //console.dir(curso[curso.selectedIndex])
        const oDato = {
            value :  opciones[opciones.selectedIndex].value,
            text :  opciones[opciones.selectedIndex].textContent
        }
        return oDato
    }
    /**
     * Procesa varios checkbox con la misma clase
     */
    setMultiCheck(name) {
        let aDatos = []
        let aCheckBoxes = document.querySelectorAll(`.${name}`)
        aCheckBoxes.forEach( item => {
            if (item.checked) {
                aDatos.push(item.id)
            }
        })
        return aDatos
    }
}