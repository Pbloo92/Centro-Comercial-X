
document.addEventListener("DOMContentLoaded", function () {
  fetch('cartelera.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar la cartelera");
      }
      return response.json();
    })
    .then(data => {
      const contenedor = document.getElementById("peliculas");
      data.forEach(pelicula => {
        const div = document.createElement("div");
        div.className = "col-md-4 mb-4";
        div.innerHTML = `
          <div class="card h-100">
            <img src="${pelicula.cartel}" class="card-img-top" alt="${pelicula.titulo}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${pelicula.titulo}</h5>
              <p class="card-text">${pelicula.descripcion}</p>
              <a href="${pelicula.enlace}" class="btn btn-primary mt-auto" target="_blank">Comprar entrada</a>
            </div>
          </div>
        `;
        contenedor.appendChild(div);
      });
    })
    .catch(error => {
      console.error(error);
      document.getElementById("peliculas").innerHTML = "<p>No se pudo cargar la cartelera.</p>";
    });
});


  