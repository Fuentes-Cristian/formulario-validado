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
   let nuevaSeleccion =  document.getElementById("select").value;
     
   nuevoTurno = new Turno(nombreGuardar, fechaGuardar, nuevaSeleccion);

   guardarDatos();
    //sweetAlert
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Turno reservado',
      showConfirmButton: false,
      timer: 1500
    })
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

function fetch1() {
   fetch('./js/datos.json')
  .then(response => response.json())
  .then(datos =>{
   
   datos.forEach(e => {
      const seleccionaModo = document.createElement("option");
      seleccionaModo.innerHTML = `<option value="${e.servicios}">${e.servicios}</option>`;
   
      const select = document.getElementById("select");
      select.appendChild(seleccionaModo);
   });
})
}
fetch1()
//min  1.33

