// Obtener referencias a los elementos del DOM para la primera ventana modal
var firstModal = document.getElementById("firstModal");
var openFirstModalBtn = document.getElementById("openFirstModalBtn");
var closeFirstModal = document.querySelector("#firstModal .close");

// Obtener referencias a los elementos del DOM para la segunda ventana modal
var secondModal = document.getElementById("secondModal");
var openSecondModalBtn = document.getElementById("openSecondModalBtn");
var closeSecondModal = document.querySelector("#secondModal .close");

// Funciones para mostrar y ocultar la primera ventana modal
openFirstModalBtn.onclick = function() {
  firstModal.style.display = "block";
}

closeFirstModal.onclick = function() {
  firstModal.style.display = "none";
}

// Funciones para mostrar y ocultar la segunda ventana modal
openSecondModalBtn.onclick = function() {
  secondModal.style.display = "block";
}

closeSecondModal.onclick = function() {
  secondModal.style.display = "none";
}

// Función para cerrar las ventanas modales haciendo clic fuera de ellas
/* window.onclick = function(event) {
  if (event.target == firstModal) {
    firstModal.style.display = "none";
  }
  if (event.target == secondModal) {
    secondModal.style.display = "none";
  }
}

 */
