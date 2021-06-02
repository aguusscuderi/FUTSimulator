
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

const captains = document.querySelectorAll('.captain') //llamo todos lo elementos html que compartan la clase .captain
const captainsArr = Array.from(captains)

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
