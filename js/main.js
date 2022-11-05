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
   let nuevaSeleccion =  document.getElementById("modos").value;
     
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

const JSON1 = {
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
   datos = JSON1;
   const seleccionaModo = document.createElement("productos");
   JSON1.innerHTML = seleccionaModo;
   seleccionaModo.innerHTML = `
   <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">Selecciona</label>
       <select class="form-select" id="modos">
               <option selected>Ninguna</option>
               <option selected>Corte</option>
               <option selected>Tintura</option>
               <option selected>Peinado</option>
               <option selected>Alisado</option>
       </select>
   </div> `

      datosProductos.appendChild(seleccionaModo);
})
}

fetch1()
//min  1.33

