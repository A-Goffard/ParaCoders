

// Obtener referencias a los elementos del DOM para la segunda ventana modal
var secondModal = document.getElementById("secondModal");
var openSecondModalBtn = document.getElementById("openSecondModalBtn");
var closeSecondModal = document.querySelector("#secondModal .close");

// Obtener referencias a los elementos del DOM para la tercera ventana modal
var terceraModal = document.getElementById("terceraModal");
var openTerceraModalBtn = document.getElementById("openTerceraModalBtn");
var closeTerceraModal = document.querySelector("#terceraModal .close");

document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  var modal = document.getElementById('firstModal');
  // Get the radio button
  var radio = document.getElementById('Tarjeta');

  // Add event listener to the radio button
  radio.addEventListener('change', function() {
      if (this.checked) {
          modal.style.display = 'block'; // Show the modal
      } else {
          modal.style.display = 'none'; // Hide the modal
      }
  });

  // Get the close button
  var closeButton = document.querySelector('.close');

  // Cerrar modal cuando se da al boton
  closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
  });
});


// Funciones para mostrar y ocultar la segunda ventana modal
openSecondModalBtn.onclick = function() {
  secondModal.style.display = "block";
}

closeSecondModal.onclick = function() {
  secondModal.style.display = "none";
}

// Funciones para mostrar y ocultar la tercera ventana modal
openTerceraModalBtn.onclick = function() {
  terceraModal.style.display = "block";
}

closeTerceraModal.onclick = function() {
  terceraModal.style.display = "none";
}

