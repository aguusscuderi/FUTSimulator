
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


///////////////////////////
// USER CARD CREATOR ////////AND
/////////////////////////// 
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
    

    function formData() {
        form.addEventListener('submit', (event)=> {
        event.preventDefault();
        let id = form.querySelector('#id').value
        let verificacion = jugadoresCreados.some(x => x.id == id)
        if(verificacion){
            alert(`Uno de tus JUGADORES ya posee el ID por favor`)
        }else{
            if(jugadoresCreados.length <= 5){
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
            const jugadoresJSON = JSON.stringify(jugadoresCreados)
            localStorage.setItem('jugadores_base', jugadoresJSON)


            //USER CARD CREATOR
            jugadoresCreados.map(el=> {
                if(el.id == id){
                    const div = document.createElement('div')
                    div.classList.add('card-container')
                    div.innerHTML += `
               
                    <div class="media-container">
                        <p> ${el.media} </p>
                    </div>
                    <div class="sep_line1"></div>
                    <div class="nation-container"><img src="imagenes/argentinaIMG.jpg" alt=""></div>
                    <div class="playerPic-container"><img src="imagenes/messiCard.png" alt=""></div>
                    <div class="player-name">
                        <p>${el.nombre}</p>
                    </div>
                    <div class="player-surname">
                        <p>${el.apellido}</p>
                    </div>
                    <div class="stats-line-separator"></div>
                    <div class="name-separator"></div>
                    <div class="stats">
                        <div class="dri">
                            <p class="value">${el.agilidad}</p>
                            <p class="name_value">DRI</p>
                        </div>
                        <div class="phy">
                            <p class="value">${el.fuerza}</p>
                            <p class="name_value">PHY</p>
                        </div>
                        <div class="ref">
                            <p class="value">${el.reflejos}</p>
                            <p class="name_value">REF</p>
                        </div>
                        <div class="def">
                            <p class="value">${el.velocidad}</p>
                            <p class="name_value">DEF</p>
                        </div>
                    </div>
                    <img id="fifa_card" src="imagenes/goldCard.png" alt="">
              
                `
                const userPlayersDiv = document.querySelector('.user-players-div')
                userPlayersDiv.appendChild(div)
                }else{
                   
                }
            })
        }
    }
      
      }) 
    }

    formData()


    //L.S RECUPERACION USER PLAYERS
    function recuperacion () { 
        let playersJSON = JSON.parse(localStorage.getItem('jugadores_base'));
        if(playersJSON){
            playersJSON.forEach(el=>{
               jugadoresCreados.push(el) 
            })
        }
    }
    recuperacion()





    ////////////////////////////////
    // RECUPERACION DE USER CARDS //
    ///////////////////////////////
    const card_but = document.getElementById('card_button')

   /* function createCard () {
    card_but.addEventListener('click', () => {
        for (let i = 0; i <= 0; i++) {     
            jugadoresCreados.forEach((el)=> {   
            const div = document.createElement('div')
            div.classList.add('card-container')
            div.innerHTML += `
           
                <div class="media-container">
                    <p> ${el.media} </p>
                </div>
                <div class="sep_line1"></div>
                <div class="nation-container"><img src="imagenes/argentinaIMG.jpg" alt=""></div>
                <div class="playerPic-container"><img src="imagenes/messiCard.png" alt=""></div>
                <div class="player-name">
                    <p>${el.nombre}</p>
                </div>
                <div class="player-surname">
                    <p>${el.apellido}</p>
                </div>
                <div class="stats-line-separator"></div>
                <div class="name-separator"></div>
                <div class="stats">
                    <div class="dri">
                        <p class="value">${el.agilidad}</p>
                        <p class="name_value">DRI</p>
                    </div>
                    <div class="phy">
                        <p class="value">${el.fuerza}</p>
                        <p class="name_value">PHY</p>
                    </div>
                    <div class="ref">
                        <p class="value">${el.reflejos}</p>
                        <p class="name_value">REF</p>
                    </div>
                    <div class="def">
                        <p class="value">${el.velocidad}</p>
                        <p class="name_value">DEF</p>
                    </div>
                </div>
                <img id="fifa_card" src="imagenes/goldCard.png" alt="">
          
            `
            const userPlayersDiv = document.querySelector('.user-players-div')
            userPlayersDiv.appendChild(div)
        })
        }
        
    })

    }*/
     


    /*for (let i = 0; i <= 1; i++) {
        console.log(i)
        if(i >= 2){ 
            alert('Ya recuperaste tus jugadores.')
        }else{      
            card_but.addEventListener('click', () => {    
                console.log(i) 
                jugadoresCreados.forEach((el)=> {   
                const div = document.createElement('div')
                div.classList.add('card-container')
                div.innerHTML += `       
                    <div class="media-container">
                        <p> ${el.media} </p>
                    </div>
                    <div class="sep_line1"></div>
                    <div class="nation-container"><img src="imagenes/argentinaIMG.jpg" alt=""></div>
                    <div class="playerPic-container"><img src="imagenes/messiCard.png" alt=""></div>
                    <div class="player-name">
                        <p>${el.nombre}</p>
                    </div>
                    <div class="player-surname">
                        <p>${el.apellido}</p>
                    </div>
                    <div class="stats-line-separator"></div>
                    <div class="name-separator"></div>
                    <div class="stats">
                        <div class="dri">
                            <p class="value">${el.agilidad}</p>
                            <p class="name_value">DRI</p>
                        </div>
                        <div class="phy">
                            <p class="value">${el.fuerza}</p>
                            <p class="name_value">PHY</p>
                        </div>
                        <div class="ref">
                            <p class="value">${el.reflejos}</p>
                            <p class="name_value">REF</p>
                        </div>
                        <div class="def">
                            <p class="value">${el.velocidad}</p>
                            <p class="name_value">DEF</p>
                        </div>
                    </div>
                    <img id="fifa_card" src="imagenes/goldCard.png" alt="">
              
                `
                const userPlayersDiv = document.querySelector('.user-players-div')
                userPlayersDiv.appendChild(div)
            })
            
        }) 
        }
        
    }*/

    //createCard()


    for (let i=0; i<=1; i++){
         card_but.addEventListener('click', () => {    
            jugadoresCreados.forEach((el)=> {   
            const div = document.createElement('div')
            div.classList.add('card-container')
            div.innerHTML += `       
                <div class="media-container">
                    <p> ${el.media} </p>
                </div>
                <div class="sep_line1"></div>
                <div class="nation-container"><img src="imagenes/argentinaIMG.jpg" alt=""></div>
                <div class="playerPic-container"><img src="imagenes/messiCard.png" alt=""></div>
                <div class="player-name">
                    <p>${el.nombre}</p>
                </div>
                <div class="player-surname">
                    <p>${el.apellido}</p>
                </div>
                <div class="stats-line-separator"></div>
                <div class="name-separator"></div>
                <div class="stats">
                    <div class="dri">
                        <p class="value">${el.agilidad}</p>
                        <p class="name_value">DRI</p>
                    </div>
                    <div class="phy">
                        <p class="value">${el.fuerza}</p>
                        <p class="name_value">PHY</p>
                    </div>
                    <div class="ref">
                        <p class="value">${el.reflejos}</p>
                        <p class="name_value">REF</p>
                    </div>
                    <div class="def">
                        <p class="value">${el.velocidad}</p>
                        <p class="name_value">DEF</p>
                    </div>
                </div>
                <img id="fifa_card" src="imagenes/goldCard.png" alt="">
          
            `
            const userPlayersDiv = document.querySelector('.user-players-div')
            userPlayersDiv.appendChild(div)
        })
        
    })
    }


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


































