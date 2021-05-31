
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

//MESSI
const messi = document.querySelector('#messi')

const selectedMessi = () => {
    const div = document.querySelector('#messi-div')
    let beneficio = document.createElement('p')
    beneficio.setAttribute('class', 'beneficio')
    beneficio.innerHTML = 'Elegir a MESSI otorga a tus jugadores un 20% mas de AGILIDAD'
    div.appendChild(beneficio)
}

 const unselectedMessi = () => {
     const beneficioDelete = document.querySelector('.beneficio')
     beneficioDelete.remove()
 }

messi.addEventListener('mouseenter', selectedMessi)
messi.addEventListener('mouseleave', unselectedMessi)

//RONALDO
const ronaldo = document.querySelector('#ronaldo')

const selectedRonaldo = () => {
    const div = document.querySelector('#ronaldo-div')
    let beneficio = document.createElement('p')
    beneficio.setAttribute('class', 'beneficio')
    beneficio.innerHTML = 'Elegir a RONALDO otorga a tus jugadores un 20% mas de VELOCIDAD'
    div.appendChild(beneficio)
}

 const unselectedRonaldo = () => {
     const beneficioDelete = document.querySelector('.beneficio')
     beneficioDelete.remove(ronaldo)
 }


ronaldo.addEventListener('mouseenter', selectedRonaldo)
ronaldo.addEventListener('mouseleave', unselectedRonaldo)

//VANDIJK
const vandijk = document.querySelector('#vandijk')

const selectedVandijk = () => {
    const div = document.querySelector('#vandijk-div')
    let beneficio = document.createElement('p')
    beneficio.setAttribute('class', 'beneficio')
    beneficio.innerHTML = 'Elegir a VANDIJK otorga a tus jugadores un 20% mas de FUERZA'
    div.appendChild(beneficio)
}

 const unselectedVandijk = () => {
     const beneficioDelete = document.querySelector('.beneficio')
     beneficioDelete.remove()
 }

vandijk.addEventListener('mouseenter', selectedVandijk)
vandijk.addEventListener('mouseleave', unselectedVandijk)

//ALISSON
const alisson = document.querySelector('#alisson')

const selectedAlisson = () => {
    const div = document.querySelector('#alisson-div')
    let beneficio = document.createElement('p')
    beneficio.setAttribute('class', 'beneficio')
    beneficio.innerHTML = 'Elegir a ALISSON otorga a tus jugadores un 20% mas de REFLEJOS'
    div.appendChild(beneficio)
}

 const unselectedAlisson = () => {
     const beneficioDelete = document.querySelector('.beneficio')
     beneficioDelete.remove()
 }

alisson.addEventListener('mouseenter', selectedAlisson)
alisson.addEventListener('mouseleave', unselectedAlisson)

