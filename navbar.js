// navbar.js
document.addEventListener("DOMContentLoaded", function () {
  // Busca el contenedor del navbar en la página
  const navbarContainer = document.getElementById("navbar-container");

  if (navbarContainer) {
    // Carga el archivo navbar.html
    fetch("navbar.html")
      .then((response) => {
        if (!response.ok) throw new Error("No se pudo cargar el navbar");
        return response.text();
      })
      .then((data) => {
        navbarContainer.innerHTML = data;
      })
      .catch((error) => console.error("Error al cargar la navegación:", error));
  }
});

// Función para abrir y cerrar el desplegable
function toggleDropdown(event) {
  event.stopPropagation();
  const dropdown = document.getElementById("restaurantDropdown");
  if (dropdown) {
    dropdown.classList.toggle("show");
  }
}

// Cerrar el menú si se hace clic fuera
window.addEventListener("click", function (e) {
  const dropdown = document.getElementById("restaurantDropdown");
  if (dropdown && dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  }
});