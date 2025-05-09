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

// CARTELERA CINE
fetch("cartelera.json")
.then(response => response.json())
.then(peliculas => {
  const contenedor = document.getElementById("cartelera");
  peliculas.forEach(pelicula => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
        <div class="card-body">
          <h5 class="card-title">${pelicula.titulo}</h5>
          <p class="card-text">${pelicula.descripcion}</p>
          <a href="${pelicula.enlace}" target="_blank" class="btn btn-primary">Comprar entrada</a>
        </div>
      </div>
    `;
    contenedor.appendChild(col);
  });
})
.catch(error => {
  console.error("Error al cargar la cartelera:", error);
});

  