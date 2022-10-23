let url = "js/planes.json"
let arreglo = [];
    fetch(url)

      .then(response => response.json())
      .then(data => { 
          console.log(data)
          arreglo = data.arreglo
          console.log(arreglo) 
     
     
          let cad = `<div class="Flexcontainer">`
     
          for (plan of arreglo) {
              cad += `
          <div class="tarjeta">
              <div class="iconosTarjetas">
                <img class="icono" src="${plan.iconoConexion}" alt="${plan.tipo}">
                <img src="${plan.iconoTipo}">
              </div>
              <div class="cuerpo">

                  <h4>${plan.nombre}</h4>
                  <p>${plan.descripcion}</p>
                  
              </div>

              <div class="tarjetaBoton">
                    <a href="contacto.html"><button>SOLICITAR</button></a>
              </div>
          </div>   
      `
          }
     
     
          cad += `</div>
          `
     
          console.log(cad)
     
     
     
          document.getElementById("tarjetas").innerHTML = cad;
     
     
      });
   