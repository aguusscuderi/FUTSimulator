
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




    //EVENTOS 
/////////////////////////////////////////////////
// CREACION DINAMICA DE CAPITANES MEDIANTE ARRAY //
////////////////////////////////////////////////

let captainsArray = [
    {id: 1, nombre: 'LIONEL', apellido: 'messi', img: 'imagenes/messiCap.png'},
    {id: 2, nombre: 'CRISTIANO', apellido: 'ronaldo', img: 'imagenes/ronaldoCap.png'},
    {id: 3, nombre: 'VIRGIL', apellido: 'vandijk', img: 'imagenes/kanteCap.png'},
    {id: 4, nombre: 'BECKER', apellido: 'alisson', img: 'imagenes/alissonCap.png'}
] 

const captainsDiv = document.querySelector('.capitanes-section')

capitanSeleccionado(captainsArray)

function capitanSeleccionado(array){
    let div = document.createElement('div')
    div.classList.add('capitanes-container', 'd-flex', 'flex-wrap', 'flex-row', 'align-content-center')

    array.forEach((capitanElegido)=>{
        div.innerHTML += `
        <div class="img_caps-container" id="${capitanElegido.apellido}-div">
            <img src="${capitanElegido.img}" id="${capitanElegido.apellido}" class="img-fluid captain" alt="">
            <button id="${capitanElegido.id}" class="captainButton"> ELEGIR CAPITAN </button>
        </div>
        `
        captainsDiv.appendChild(div) 
    })

}


/////////////////////////////////////////
// MANIPULACION DE CAPITANES Y FUNCIONES //
/////////////////////////////////////////

const captains = document.querySelectorAll('.captain') //llamo todos lo elementos html que compartan la clase .captain
const captainsArr = Array.from(captains)

console.log(captainsArr)

const containers = document.querySelectorAll('.img_caps-container') //llamo todos los elementos html que compartan la clase img_caps-container
const containersArr = Array.from(containers)

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

})










//COMPLEMENTARIO EVENTOS!!
//BOTONES/CREACION Y ELIMINACION DE CAMPO DE JUEGO
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



