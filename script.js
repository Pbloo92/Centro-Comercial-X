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
      .then(response => {
        if (!response.ok) throw new Error('No se pudo cargar el JSON');
        return response.json();
      })
      .then(data => {
        const lista = document.getElementById("cartelera");

        data.actividades.forEach(actividad => {
          const li = document.createElement("li");
          li.textContent = actividad;
          lista.appendChild(li);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
