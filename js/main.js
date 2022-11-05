const reservarTurno = document.getElementById ("enviar"),
data = document.getElementById("table"),
vaciarFormulario = document.getElementById("form"),
devoluciones = document.getElementById("devoluciones"),
datosProductos = document.getElementById("productos");

function Turno (nombre, fecha, nuevaSeleccion) {
   this.nombre = nombre;
   this.fecha = fecha;
   this.nuevaSeleccion = nuevaSeleccion;
  }

reservarTurno.addEventListener("click", (e) =>{
   
   e.preventDefault();
   let nombreGuardar = document.getElementById("nombre").value;
   let fechaGuardar = document.getElementById("fecha").value;
   let nuevaSeleccion = document.getElementById("productos").value;
   
   nuevoTurno = new Turno(nombreGuardar, fechaGuardar, nuevaSeleccion);

   guardarDatos();
   vaciarFormulario.reset()
});


const baseDatos = [];

function guardarDatos() {

   baseDatos.push(nuevoTurno);

   const datosDom = document.getElementById("tabla-turnos");

   datosDom.innerHTML += '<td>'+nuevoTurno.nombre+'</td><td>'+nuevoTurno.fecha+'</td><td>'+nuevoTurno.nuevaSeleccion+'</td>';

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
   fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(datos =>{
   datos = JSON;
   const seleccionaModo = document.createElement("productos");
   JSON.innerHTML = seleccionaModo;
   seleccionaModo.innerHTML = `
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

      datosProductos.appendChild(seleccionaModo);
})
}

fetch1()
//min  1.33

