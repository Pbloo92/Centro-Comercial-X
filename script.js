// Función para abrir el modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Función para cerrar el modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Cerrar el modal cuando se hace clic fuera del contenido
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

 // Mostrar json
    fetch('cartelera.json')
      .then(response => response.json())
      .then(data => {
        const contenedor = document.getElementById('cartelera');

        data.forEach(pelicula => {
          const card = `
            <div class="col-md-4">
              <div class="card h-100 shadow-sm">
                <img src="${pelicula.cartel}" class="card-img-top" alt="${pelicula.titulo}">
                <div class="card-body">
                  <h5 class="card-title">${pelicula.titulo}</h5>
                  <p class="card-text"><strong>Director:</strong> ${pelicula.director}</p>
                  <p class="card-text">${pelicula.descripcion}</p>
                </div>
                <div class="card-footer bg-transparent border-top-0">
                  <a href="${pelicula.enlace}" class="btn btn-danger w-100" target="_blank">Sitio oficial</a>
                </div>
              </div>
            </div>
          `;
          contenedor.innerHTML += card;
        });
      });

// CONFIRMAR EMAIL
 document.getElementById("miFormulario").addEventListener("submit", function(event) {
  const nombre = document.getElementById("nombre").value.trim();
  const apellidos = document.getElementById("apellidos").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const confirmarCorreo = document.getElementById("confirmarCorreo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const condiciones = document.getElementById("condiciones").checked;
  const mensajeError = document.getElementById("mensajeError");

  let errores = [];

  // Verificar campos vacíos
  if (!nombre || !apellidos || !direccion || !correo || !confirmarCorreo || !telefono) {
    errores.push("Todos los campos son obligatorios.");
  }

  // Validar correos
  if (correo !== confirmarCorreo) {
    errores.push("Los correos electrónicos no coinciden.");
  }

  // Validar que el teléfono solo tenga números
  if (!/^\d+$/.test(telefono)) {
    errores.push("El teléfono solo debe contener números.");
  }

  // Verificar si se aceptaron las condiciones
  if (!condiciones) {
    errores.push("Debe aceptar las condiciones para continuar.");
  }

  // Si hay errores, impedir el envío y mostrarlos
  if (errores.length > 0) {
    event.preventDefault();
    mensajeError.innerHTML = errores.join("<br>");
  } else {
    mensajeError.innerHTML = "";
    alert("Formulario enviado correctamente");
  }
});
