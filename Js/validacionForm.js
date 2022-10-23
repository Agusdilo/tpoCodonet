const nombre = document.getElementById("nombre")
const tel = document.getElementById("tel")
const mail = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")
const parrafo = document.getElementById("advertencia")

form.addEventListener("submit", e=> {
    e.preventDefault()
    let advertencia = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length < 1){
        advertencia += `Debe ingresar su nombre<br>`
        entrar = true
    }

    if(tel.value.length < 1){
        advertencia += `Debe ingresar un numero de telefono<br>`
    } else if((isNaN(tel.value)) || (tel.value.length < 10)){
        advertencia += `El numero de telefono no es valido<br>`
        entrar = true
    }
    
    if(email.value.length < 1){
        advertencia += `Debe ingresar un mail<br>`
    } else if(!regexEmail.test(email.value)){
        advertencia += `El email no es valido<br>`
        entrar = true    
    }
    if(mensaje.value.length < 1){
        advertencia += `Debe ingresar un mensaje<br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = advertencia
    } else {
        parrafo.innerHTML = "Los datos se enviaron correctamente!<br>El responsable del area se pondra en contacto con usted en breve"
        form.reset();
    }


})
