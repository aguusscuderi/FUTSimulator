
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
                //alert('Enhorabuena! Has seleccionado tu CAPITAN, puedes chequearlo en "STATS & FORMACION"')
                Swal.fire({
                    title: 'Atencion!',
                    text: 'Enhorabuena! Has seleccionado tu CAPITAN, puedes chequearlo en "STATS & FORMACION',
                    confirmButtonText: 'Entendido',
                    confirmButtonColor: '#0b087d',
                    timer: 3000,
                    icon: 'confirm',
                    customClass: {
                    title:'sweet-title',
                    content: 'sweet-html',
                    },
                    showClass :{
                        popup: 'swal2-show',
                        backdrop: 'swal2-backdrop-show',
                        icon: 'swal2-icon-show'
                      }
                    
                })
                seleccionCapitan(`${el.id}`)
            }else{
                //alert('Entendido! Puedes elegir otro CAPITAN')
                Swal.fire({
                    title: 'Atencion!',
                    text: 'Entendido! Puedes elegir otro CAPITAN',
                    customClass: {
                    title:'sweet-title',
                    content: 'sweet-html',
                    },
                    showClass :{
                        popup: 'swal2-show',
                        backdrop: 'swal2-backdrop-show',
                        icon: 'swal2-icon-show'
                      }
                    
                })
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
            Swal.fire({
                title: 'Atencion!',
                text: 'ATENCION! Ya tienes un capitan elegido, para modificarlo borra el que ya tienes!',
                customClass: {
                title:'sweet-title',
                content: 'sweet-html',
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#0b087d',
                timer: 3000,
                icon: 'warning',
                },
                showClass :{
                    popup: 'swal2-show',
                    backdrop: 'swal2-backdrop-show',
                    icon: 'swal2-icon-show'
                  }
                
            })
            //alert('ATENCION! Ya tienes un capitan elegido, para modificarlo borra el que ya tienes!')
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
            <button style="border: none" id="eliminar${capitanAgregar.id}" class="bg-transparent boton_eliminar-capitan"><i class="text-white far fa-trash-alt"></i></button>
            `
            capitanElegidoDiv.appendChild(div)

            const botonEliminar = document.getElementById(`eliminar${capitanAgregar.id}`)
        
                //SUMANDO EL PORCENTAJE CORRESPONDIENTE A LA MEDIA DE LOS STATS DE LOS JUGADORES CREADOS POR EL USUARIO
             const vel = document.querySelector('#vel')
             const fue = document.querySelector('#fue')
             const agi = document.querySelector('#agi')
             const ref = document.querySelector('#ref')

             switch(capitanAgregar.id){
                 case 1 :
                    agi.innerText = (agi.innerText * (1+20/100)).toFixed(2)
                    agi.style.color = 'black'
                 break

                 case 2: 
                    vel.innerText = (vel.innerText * (1+20/100)).toFixed(2)
                    vel.style.color = 'black'
                 break

                 case 3: 
                    fue.innerText = (fue.innerText * (1+20/100)).toFixed(2)
                    fue.style.color = 'black'
                 break

                 case 4: 
                    ref.innerText = (ref.innerText * (1+20/100)).toFixed(2)
                    ref.style.color = 'black'
                 break
             }

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



//////////////////////////////
/// CREACION DE JUGADORES ///
///// CON AJAX-JQUERY //////   
///////////////////////////

    const del_container = $('#del-row')
    const mid_container = $('#mid-row')
    const def_container = $('#def-row')
    const arq_container = $('#arq-row')

    $.get(`standardPlayers.json`, (res, sta)=> {
    if(sta === "success"){
        let data = res
        displayList(data)
                }
            })

        const displayList = (obj) => {
            obj.forEach(item => {
                const {src, posicion} = item
                const div = document.createElement('div')
                div.setAttribute('class', `col-sm-12 col-md-4 col-lg-4 text-center jugador-container`)
                div.innerHTML += `
                    <img class="${posicion} jugador-standard" src=${src} alt="">
                `
                switch(item.posicion){
                    case 'delantero':
                        del_container.append(div)
                        break
                    case 'midfielder':
                        mid_container.append(div)
                        break
                    case 'defensor':
                        def_container.append(div)
                        break
                    case 'goalkeeper':
                        arq_container.append(div)
                        break
                }
                
            });

            //Ejecuto addPlayer() (LINEA 453), para que me reconozca los jugadores luego de haber cargado el programa, y asi poder agregarlos a la planilla.
            addPlayer()
        }


///////////////////////////////////
// USER CARD CREATOR ////////AND//
/////////////////////////////////
//////////////////////////
// CREADOR DE JUGADORES //
/////////////////////////         

    //CREANDO EL FORMULARIO
    //const creadorCollapse = document.querySelector('#playerCreator-collapse') 

    /*const imgPlayers = [
        {img = "imagenes/ronaldoPng.png"},
        {img = "imagenes/messiCard.png"}
    ]
    const random = Math.floor(Math.random() * imgPlayers.img);
    let randomPosition = imgPlayers[random]*/


    const jugadoresCreados = []
    const createdCards = []
    const form = document.getElementById('playerCreator-form')

    function tuJugador (nombre, apellido, media, velocidad, fuerza, reflejos, agilidad, id, position) {
        this.nombre=nombre,
        this.apellido=apellido,
        this.media=media,
        this.velocidad=velocidad,
        this.fuerza=fuerza,
        this.reflejos=reflejos,
        this.agilidad=agilidad,
        this.id = id,
        this.position = position
    }
    

    function formData() {
        form.addEventListener('submit', (event)=> {
        event.preventDefault();

        let id = form.querySelector('#id').value
        let verificacionId = jugadoresCreados.some(x => x.id == id)

        let statsAdded = []
        const vel = form.querySelector('#velocidad').value
        const fue = form.querySelector('#fuerza').value
        const agi = form.querySelector('#agilidad').value
        const ref = form.querySelector('#reflejos').value
        statsAdded.push(vel, fue, agi, ref)
        let verificacionStats = statsAdded.every(x => (x >= 1) && (x <= 99))

        if((verificacionId == true) || (verificacionStats == false)){
            //alert(`Algo esta mal! Por favor, revisa los STATS o el ID elegido`) 
            Swal.fire({
                title: 'Atencion!',
                icon: 'error',
                text: 'Algo esta mal! Por favor, revisa los STATS o el ID elegido',
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#0b087d',
                timer: 3000,
                customClass: {
                title:'sweet-title',
                content: 'sweet-html',
                }      
            })
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
                form.querySelector('#id').value,
                form.querySelector('#position').value

            ))

            //JSON LOCALSTORAGE SAVING and VERIFICATION
            const jugadoresJSON = JSON.stringify(jugadoresCreados)
            localStorage.setItem('jugadores_base', jugadoresJSON)

            //USER CARD CREATOR
            jugadoresCreados.forEach(el=> {
                if(el.id == id){
                    const div = document.createElement('div')
                    //div.setAttribute('class', `col-sm-12 col-md-6 col-lg-6`)
                    div.classList.add('card-container')
                    div.classList.add(`${el.position}`)
                    div.setAttribute('id', `${el.id}`)
                    div.innerHTML += `

                
                    <div class="media-container">
                        <p> ${el.media} </p>
                    </div>
                    <div class="sep_line1"></div>
                    <div class="nation-container"><img src="${el.media}" alt=""></div>
                    <div class="playerPic-container"><img class="img_card" src="imagenes/messiCard.png" alt=""></div>
                    <div class="player-surname">
                        <p>${el.apellido}</p>
                    </div>
                    <div class="stats-line-separator"></div>
                    <div class="name-separator"></div>
                    <div class="stats">
                        <div class="dri">
                            <p class="value">${parseInt(el.agilidad)}</p>
                            <p class="name_value">DRI</p>
                        </div>
                        <div class="phy">
                            <p class="value">${parseInt(el.fuerza)}</p>
                            <p class="name_value">PHY</p>
                        </div>
                        <div class="ref">
                            <p class="value">${parseInt(el.reflejos)}</p>
                            <p class="name_value">REF</p>
                        </div>
                        <div class="def">
                            <p class="value">${parseInt(el.velocidad)}</p>
                            <p class="name_value">DEF</p>
                        </div>
                    </div>
                    <img id="fifa_card" src="imagenes/goldCard.png" alt="">
               
              
                `
                const userPlayersDiv = document.querySelector('.grid-row-players')
                userPlayersDiv.appendChild(div)
                createdCards.push(div)
                //Ejecuto esta funcion para que el jugador sea tomado por el documento, ya que al cargar el mismo, no se encuentra creado el elemento (LINEA 449)
                addUserPlayer()
                //Ejecuto esta funcion para que me calcule nuevamente el promedio en la seccion STATS, cada vez que creo un jugador. (LINEA 579)
                stats()
                }else{
                   
                }
            })
        }
    }
      
      }) 
    }

    formData()



    ////////////////////////////////////
    /// L.S RECUPERACION USER PLAYERS //
    ///////////////////////////////////
    function recuperacion () { 
        let playersJSON = JSON.parse(localStorage.getItem('jugadores_base'));
        if(playersJSON){
            playersJSON.forEach(el=>{
               jugadoresCreados.push(el) 
               const div = document.createElement('div')
               div.classList.add('card-container')
               div.classList.add(`${el.position}`)
               div.setAttribute('id', `${el.id}`)
               div.innerHTML += `
        
               <div class="media-container">
                   <p> ${el.media} </p>
               </div>
               <div class="sep_line1"></div>
               <div class="nation-container"><img src="imagenes/argentinaIMG.jpg" alt=""></div>
               <div class="playerPic-container"><img class="img_card" src="imagenes/messiCard.png" alt=""></div>
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
           createdCards.push(div)
           })
       }
   }
   recuperacion()





    ////////////////////////////////////////
    // AGREGANDO JUGADORES A LA CANCHITA //
    //////////////////////////////////////


//const jugadoresCreados = [] (CORRESPONDE A LA VARIABLE QUE CONTIENE LOS JUGADORES CREADOS POR EL USUARIO.)   

const containerPlayer = document.querySelectorAll('.player__item')

const userPlayerDiv = document.querySelector('.user-players-div')
const userPlayerCard = userPlayerDiv.children


function addPlayer (){
    const jugadorStandard = document.querySelectorAll('.jugador-standard')
    //AGREGANDO LOS JUGADORES STANDARD
        jugadorStandard.forEach(el => {
        el.addEventListener('click', () => {
            let jugadorStandardSRC = el.currentSrc
            const div = document.createElement('div')
            div.innerHTML += `
                <img class="img_chsnPlayer" src="${jugadorStandardSRC}"/>
            `
            for (let pos of containerPlayer){
                if(pos.children.length == 0){
                    if(el.classList[0] == 'delantero' && (pos.id == 11 || pos.id == 10 || pos.id == 9)){
                        pos.appendChild(div)
                    }else if (el.classList[0] == 'midfielder' && (pos.id == 8 || pos.id == 7 || pos.id == 5)){
                        pos.appendChild(div)
                    }else if(el.classList[0] == 'defensor' && (pos.id == 6 || pos.id == 4 || pos.id == 3 || pos.id == 2)){
                        pos.appendChild(div)
                    }else if(el.classList[0] == 'goalkeeper' && pos.id == 1){
                        pos.appendChild(div)
                    }

                    //Compruebo la PLANILLA y manejo el boton de ELEGIR CAPITAN
                    buttonDisabled()
                    
                }else {
                    
                }
            
            }
        
        }) 

    })

}

//AGREGANDO JUGADORES CREADOS POR EL USUARIO
function addUserPlayer () {
        createdCards.forEach(card => {
        card.addEventListener('click', ()=>{
            jugadoresCreados.forEach(el=> {
                if(el.id == card.id){
                    const div = document.createElement('div')
                    div.classList.add('card-container-canchita')
                    div.classList.add(`${el.position}`)
                 
                    div.innerHTML += `

                    <div class="media-container">
                        <p> ${el.media} </p>
                    </div>
                    <div class="sep_line1"></div>
                    <div class="nation-container"><img src="imagenes/argentinaIMG.jpg" alt=""></div>
                    <div class="playerPic-container"><img class="player-img-canchita" src="imagenes/messiCard.png" alt=""></div>
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

                  for (let pos of containerPlayer){
                    if(pos.children.length == 0){
                            if(card.classList[1] == 'del' && (pos.id == 11 || pos.id == 10 || pos.id == 9)){
                            pos.appendChild(div)
                        }else if (card.classList[1] == 'med' && (pos.id == 8 || pos.id == 7 || pos.id == 5)){
                            pos.appendChild(div)
                        }else if(card.classList[1] == 'def' && (pos.id == 6 || pos.id == 4 || pos.id == 3 || pos.id == 2)){
                            pos.appendChild(div)
                        }else if(card.classList[1] == 'arq' && pos.id == 1){
                            pos.appendChild(div)
                        }

                        //Compruebo la PLANILLA y manejo el boton de ELEGIR CAPITAN
                        buttonDisabled()

                        }else {
                            
                        }
                    
                    }

                }else{
            
                }
            })
    
        
        })
     })
}
    
addUserPlayer()


//Esta funcion se encarga de deshabilitar el boton de ELEGIR CAPITAN, hasta que haya completado toda la PLANTILLA con JUGADORES
function buttonDisabled () {
    const positions  = containerPlayer
    //Transforme el containerPlayer (Nodelist) a ARRAY, para poder usar los metodos.
    const positionsArr = Array.from(positions)

    const someBtnDisabled = positionsArr.some(el => el.children.length == 0)

    if(someBtnDisabled){
      const btnCap = document.querySelectorAll('.captainButton')
      btnCap.forEach(el => {
          el.disabled = true
      })
    }else{
      const btnCap = document.querySelectorAll('.captainButton')
      btnCap.forEach(el => {
          el.disabled = false
      })
    } 
  }

  buttonDisabled()


 /* const random = Math.floor(Math.random() * containerPlayer.length);
        let randomPosition = containerPlayer[random]*/




    /////////////////////////////////////////////
    // DESPLAZAMIENTO DE JUGADORES CON JQUERY //
    ///////////////////////////////////////////

    $(document).ready(function(){
        $(".player__item").draggable({
         containment:".field__box",
         cursor: "grabbing"
        })
      });

    


    /////////////////////////////////////////////////////////////
    // MANEJO DE LOS STATS DE JUGADORES CREADOS POR EL USUARIO //
    ////////////////////////////////////////////////////////////

      //const jugadoresCreados = [] (CORRESPONDE A LA VARIABLE QUE CONTIENE LOS JUGADORES CREADOS POR EL USUARIO.) 
      
      function stats () {
        //Creo un ARRAY nuevo para cada caracteristica. 
        //Velocidad
        const players_velocidad = jugadoresCreados.map(el => {
         return el.velocidad
      })
      let totvel = players_velocidad.reduce((finalSt, item) => {
        return ((parseInt(item) + finalSt) / players_velocidad.length)
     }, 0).toFixed(2)

        //Fuerza
     const players_fuerza = jugadoresCreados.map(el => {
        return el.fuerza
     })
     let totfue = players_fuerza.reduce((finalSt, item) => {
        return ((parseInt(item) + finalSt) / players_fuerza.length)
        }, 0).toFixed(2)

        //Agilidad
     const players_agilidad = jugadoresCreados.map(el => {
        return el.agilidad
     })
     let totagi = players_agilidad.reduce((finalSt, item) => {
        return (((parseInt(item) + finalSt) / players_agilidad.length ))
        }, 0).toFixed(2)

        //Reflejos
     const players_reflejos = jugadoresCreados.map(el => {
        return el.reflejos
     })
     let totref = players_reflejos.reduce((finalSt, item) => {
        return ((parseInt(item) + finalSt) / players_reflejos.length)
        }, 0).toFixed(2)

        const vel = document.querySelector('#vel')
        const fue = document.querySelector('#fue')
        const agi = document.querySelector('#agi')
        const ref = document.querySelector('#ref')

        vel.textContent = totvel
        fue.textContent = totfue
        agi.textContent = totagi
        ref.textContent = totref
      }

      stats()


















