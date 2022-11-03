const reservarTurno = document.getElementById ("enviar")
data = document.getElementById("table")
vaciarFormulario = document.getElementById("form")
devoluciones = document.getElementById("devoluciones")
datosProductos = document.getElementById("productos");

function Turno (nombre, fecha) {
   this.nombre = nombre;
   this.fecha = fecha;
  }

reservarTurno.addEventListener("click", (e) =>{
   
   e.preventDefault();
   let nombreGuardar = document.getElementById("nombre").value;
   let fechaGuardar = document.getElementById("fecha").value;

   nuevoTurno = new Turno(nombreGuardar, fechaGuardar);

   guardarDatos();
   vaciarFormulario.reset()
});


const baseDatos = [];

function guardarDatos() {

   baseDatos.push(nuevoTurno);

   const datosDom = document.getElementById("tabla-turnos");

   datosDom.innerHTML += '<td>'+nuevoTurno.nombre+'</td><td>'+nuevoTurno.fecha+'</td>';

   baseDatosCadena = JSON.stringify (baseDatos);
   localStorage.setItem ("MisTurnos", baseDatosCadena);

};

const JSON = {
   Corte:"$1.000",
   Tintura:"$2.500",
   Alisado:"$3.000",
   Peinado:"$3.500"
}

//console.log(JSON);
function fetch1() {
   fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(datos =>{
  // console.log(datos);
   datos = JSON;
  // console.log(datos);
   const productos1 = document.createElement("productos1")
   //console.log(productos);
   JSON.innerHTML = productos;
   //console.log(JSON);
   productos.innerHTML = `
   <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">Selecciona</label>
       <select class="form-select" id="inputGroupSelect01">
               <option selected>Ninguna</option>
               <option selected>Corte</option>
               <option value="1">Tintura</option>
               <option value="2">Peinado</option>
               <option value="3">Alisado</option>
       </select>
   </div> `

      productos.appendChild(productos1)
})
}

fetch1()
//min  1.33

