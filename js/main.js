const reservarTurno = document.getElementById ("enviar")
data = document.getElementById("table")
vaciarFormulario = document.getElementById("form");

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






//min  1.33

