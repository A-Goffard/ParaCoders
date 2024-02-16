var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

// Función para abrir la ventana modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Función para cerrar la ventana modal al hacer clic en la X
span.onclick = function() {
  modal.style.display = "none";
}

