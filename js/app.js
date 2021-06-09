
// Inicio del programa, recuperacion/indagacion de datos. Creacion de JUGADORES.

/*let cantidad = 2;

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

inicio()*/


     
///////////////////////////////////////////////////
// CREACION DINAMICA DE CAPITANES MEDIANTE ARRAY //
//////////////////////////////////////////////////

let captainsArray = [
    {id: 1, nombre: 'LIONEL', apellido: 'messi', img: 'imagenes/messiCap.png', beneficio: 'AGILIDAD'},
    {id: 2, nombre: 'CRISTIANO', apellido: 'ronaldo', img: 'imagenes/ronaldoCap.png', beneficio: 'VELOCIDAD'},
    {id: 3, nombre: 'VIRGIL', apellido: 'vandijk', img: 'imagenes/kanteCap.png', beneficio: 'FUERZA'},
    {id: 4, nombre: 'BECKER', apellido: 'alisson', img: 'imagenes/alissonCap.png', beneficio: 'REFLEJOS'}
] 

const captainsDiv = document.querySelector('.capitanes-container')


function capitanSeleccionado(array){
    array.forEach((el)=>{
        let div = document.createElement('div')
        div.classList.add('img_caps-container')
        
        div.innerHTML += `
            <img src=${el.img} id=${el.apellido} class="img-fluid captain" alt="">
            <button id=${el.id} class="captainButton"> ELEGIR CAPITAN </button>
        `
        captainsDiv.appendChild(div) 

        const button = document.getElementById(`${el.id}`)
      
        button.addEventListener('click', ()=>{
            const confirmacion = confirm(`¿Deseas elegir a ${el.apellido} como tu CAPITAN?`)
            if(confirmacion == true){
                alert('Enhorabuena! Has seleccionado tu CAPITAN, puedes chequearlo en "STATS & FORMACION"')
                seleccionCapitan(`${el.id}`)
            }else{
                alert('Entendido! Puedes elegir otro CAPITAN')
            }
            
         })
    })

}

capitanSeleccionado(captainsArray)

    //////////////////////////
    // SELECCION DE CAPITAN //
    /////////////////////////

    let capitanElegido = []
    const capitanElegidoDiv = document.querySelector('#capitanSeleccionado')

    function seleccionCapitan (id) {
        //const validar = capitanElegido.some(x => x.id == id)
        const validar = capitanElegido.some(x => x)
        if(validar){
            alert('ATENCION! Ya tienes un capitan elegido, para modificarlo borra el que ya tienes!')
        }else{
            let capitanAgregar = captainsArray.filter(el => el.id == id)[0]
            capitanElegido.push(capitanAgregar)
            console.log(capitanAgregar)

            const div = document.createElement('div')
            div.classList.add('currentCap')
            div.innerHTML += `
            <h3> TU CAPITAN </h3>

            <img src="${capitanAgregar.img}" class="img-fluid" id="" alt="">
            <p>Tu capitan ${capitanAgregar.nombre} aumenta un 20% ${capitanAgregar.beneficio}</p>
            <button id="eliminar${capitanAgregar.id}" class="boton_eliminar-capitan"><i class="far fa-trash-alt"></i></button>
            `
            capitanElegidoDiv.appendChild(div) 

            const botonEliminar = document.getElementById(`eliminar${capitanAgregar.id}`)
            console.log(botonEliminar)

            botonEliminar.addEventListener('click', ()=>{
                const confirmar = confirm('ATENCION! Deseas eliminar a tu CAPITAN?')
                if(confirmar == true){
                    botonEliminar.parentElement.remove()
                    capitanElegido.shift()
                }else{}
            }) 
        }
    
   
    }






/////////////////////////////////////////////////////
// BENEFICIO DE CAPITANES AL HACER HOVER FUNCIONES //
////////////////////////////////////////////////////

const captains = document.querySelectorAll('.captain') //llamo todos lo elementos html que compartan la clase .captain
const captainsArr = Array.from(captains)

//console.log(captainsArr)

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


//////////////////////////
// CREADOR DE JUGADORES //
/////////////////////////

    //CREANDO EL FORMULARIO
    //const creadorCollapse = document.querySelector('#playerCreator-collapse') 
    const jugadoresCreados = []
    const form = document.getElementById('playerCreator-form')

    function tuJugador (nombre, apellido, media, velocidad, fuerza, reflejos, agilidad, id) {
        this.nombre=nombre,
        this.apellido=apellido,
        this.media=media,
        this.velocidad=velocidad,
        this.fuerza=fuerza,
        this.reflejos=reflejos,
        this.agilidad=agilidad,
        this.id = id
    }
    
   function formData(id) {
        form.addEventListener('submit', (event)=> {
        event.preventDefault();
        jugadoresCreados.push(new tuJugador(
                form.querySelector('#nombre').value,
                form.querySelector('#apellido').value,
                form.querySelector('#media').value,
                form.querySelector('#velocidad').value,
                form.querySelector('#fuerza').value,
                form.querySelector('#reflejos').value,
                form.querySelector('#agilidad').value,
                form.querySelector('#id').value
            ))

        //JSON LOCALSTORAGE SAVING and VERIFICATION
        let verificacion = jugadoresCreados.some(x => x.id == id)
        if(verificacion){
            alert(`Uno de tus JUGADORES ya posee el ID por favor`)
        }else{
            const jugadoresJSON = JSON.stringify(jugadoresCreados)
            localStorage.setItem('jugadores_base', jugadoresJSON)
        }       

      }) 
    
    }

     function recuperacion () { 
        let playersJSON = JSON.parse(localStorage.getItem('jugadores_base'));
   
            jugadoresCreados.push(playersJSON)
      
    }

    function formDataexe () {
       recuperacion()
       jugadoresCreados.forEach(el=>formData(el.id))
    }

    formDataexe()

   /*
   function recuperacion () { 
        let recuperacion = JSON.parse(localStorage.getItem('jugadores_base'));
        recuperacion.forEach(element => {
            arrayJugadores.push(element)
        });
    }
   
   function formDataexe () {
    let recorrido = jugadoresCreados.forEach((el) => el.id)
    if(localStorage.jugadores_base){
        let confirm = confirm('Hay JUGADORES CREADOS en la BASE, quieres recuperarlos?')
        if(confirm == true){
            recuperacion()
            formData(recorrido)
        }else{
            formData(recorrido)
        }
    }else{
        formData(recorrido)
    }
}*/




   



  /*function startJSON() {
       if(localStorage.jugadores_base){
            const confirm = confirm('Hay DATOS en la BASE, deseas recuperarlos?')
            switch(confirm){
                case true:
                    recuperacion()
                    break
                case false:
                    break    
            }
       }else{

       }
   }*/

   


    



    



//////////////////////////////////////////////////////
// BOTONES/CREACION Y ELIMINACION DE CAMPO DE JUEGO //
//////////////////////////////////////////////////////
    const crear = document.querySelector('#see')
    const nocrear = document.querySelector('#unsee')
    const field = document.querySelector('#field')
    const fieldFirstPosition = document.querySelector('.positionsDivContainer')

    let creado = 'Creaste un elemento';
    const arrayContador = []
    
    nocrear.addEventListener('click', function(){
        arrayContador.shift()
        console.log(arrayContador.length)
        field.remove()
        const newFieldRemove = document.querySelector('.recreatedField')
        newFieldRemove.remove()
    })



    crear.addEventListener('click', function(){
        
        arrayContador.push(creado)
        console.log(arrayContador.length)
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


































