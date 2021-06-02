
// Inicio del programa, recuperacion/indagacion de datos. Creacion de JUGADORES.

let cantidad = 2;

function plantelInicial (nombre, apellido, posicion, piernaHabil) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.posicion=posicion;
    this.piernaHabil=piernaHabil
}

const arrayJugadores = [];

function datosJugador() {
    do {
        alert("Bienvenido a FUTSimulator! Crea a 5 de tus 11 jugadores.")
        arrayJugadores.push(new plantelInicial(
            prompt("Nombre del jugador"),
            prompt("Apellido del jugador"),
            prompt("Posicion del jugador"),
            prompt("Pierna habil del jugador. (D, I, Ambidiestro)"), 
            )
    )}while(arrayJugadores.length!=cantidad)

    let jugadorJSON = JSON.stringify(arrayJugadores);
    localStorage.setItem('datos', jugadorJSON) 
}

function recuperar() {
    let recuperacion = JSON.parse(localStorage.getItem('datos'));
    recuperacion.forEach(element => {
        arrayJugadores.push(element)
    });
}


function inicio() {
    if (localStorage.datos) {
        let aviso = confirm("Hay datos en la base, desea recuperarlos?");
        if (aviso==true) {
            recuperar()
        }else {
            datosJugador()
        }
        
    }else {
        datosJugador()
    }
}

inicio()



//Eventos

//MANIPULACION DE CAPITANES Y FUNCIONES

const captains = document.querySelectorAll('.captain') //llamo todos lo elementos html que compartan la clase .captain
const captainsArr = Array.from(captains)

const containers = document.querySelectorAll('.img_caps-container') //llamo todos los elementos html que compartan la clase img_caps-container
const containersArr = Array.from(containers)

const captainNewSite = document.querySelector('#capitanSeleccionado')

//con un foreach, recorro cada elemento del array que se crea al llamar a todos los .captain
captainsArr.forEach(el => {
    el.addEventListener('mouseenter', function(){ //funcion que se ejecuta al hacer hover
        let captainBenefit = document.createElement('p')
        switch(el.id) {
            case 'messi': 
            captainBenefit.innerHTML = 'Elegir a MESSI otorga a tus jugadores un 20% mas de AGILIDAD'
            containersArr[0].appendChild(captainBenefit)
            captainBenefit.setAttribute('class', 'benefitText')
            break

            case 'ronaldo':
            captainBenefit.innerHTML = 'Elegir a Ronaldo otorga a tus jugadores un 20% mas de VELOCIDAD'
            containersArr[1].appendChild(captainBenefit)
            captainBenefit.setAttribute('class', 'benefitText')           
            break
         

            case 'vandijk':
            captainBenefit.innerHTML = 'Elegir a VAN DIJK otorga a tus jugadores un 20% mas de FUERZA'
            containersArr[2].appendChild(captainBenefit)
            captainBenefit.setAttribute('class', 'benefitText')
            break
          

            case 'alisson':
            captainBenefit.innerHTML = 'Elegir a ALISSON otorga a tus jugadores un 20% mas de REFLEJOS'
            containersArr[3].appendChild(captainBenefit)
            captainBenefit.setAttribute('class', 'benefitText')
            break     
        }

    })

    el.addEventListener('mouseleave', function() { //funcion que se ejecuta al salir del hover
        const captainBenefitDelete = document.querySelector('.benefitText')
        captainBenefitDelete.remove()
    })


    

    /*
    //SELECCION DE CAPITAN
    //EN PROGRESO 
    el.addEventListener('click', function(){
        let captainAlert
        let estructuraCapitan

        switch (el.id) {
            case 'messi':
            captainAlert = confirm('¿Deseas elegir a MESSI como CAPITAN?')
                if (captainAlert == true) {
                    estructuraCapitan = document.create
                }

             break
            
             case 'ronald o': 
             captainAlert = confirm
        }
    })*/

})







//COMPLEMENTARIO EVENTOS!!
    const crear = document.querySelector('#see')
    const nocrear = document.querySelector('#unsee')
    const field = document.querySelector('#field')
    const fieldFirstPosition = document.querySelector('.positionsDivContainer')

    let i = 0;
    const arrayContador = []
    
    nocrear.addEventListener('click', function(){
        arrayContador.shift()
        console.log(arrayContador.length)
        field.remove()
        const newFieldRemove = document.querySelector('.recreatedField')
        newFieldRemove.remove()
    })



    crear.addEventListener('click', function(){
        i++
        arrayContador.push(i)
        console.log(arrayContador.length)
        console.log(arrayContador)
        let fieldPosition = document.createElement('div')
        fieldPosition.setAttribute('class', 'recreatedField')
        fieldPosition.innerHTML += `
        <img src="imagenes/planillaFutbol.jpg" id="field" class="img-fluid" alt="">
        `
        fieldFirstPosition.appendChild(fieldPosition)  
        
})
            /*
            crear.addEventListener('click',function(){
            i++
            arrayContador.push(i)
            console.log(arrayContador.length)
            do{
                let fieldPosition = document.createElement('div')
                fieldPosition.setAttribute('class', 'recreatedField')
                fieldPosition.innerHTML += `
                <img src="imagenes/planillaFutbol.jpg" id="field" class="img-fluid" alt="">
                `
                fieldFirstPosition.appendChild(fieldPosition)  
            }while(arrayContador.length<=1)
            }
            */


































///////////////////////////////////////////////////
/*
function capitanSeleccionado(array){
    captainNewSite.innerHTML = ''
    array.forEach((capitanElegido)=>){
        let div = document.createElement('div')
        div.innerHTML += `

        
        `
    }

}*/



