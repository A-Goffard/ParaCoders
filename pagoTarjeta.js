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
/////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  var modal1 = document.getElementById('secondModal');
  // Get the radio button
  var radio1 = document.getElementById('Transferencia');

  // Add event listener to the radio button
  radio1.addEventListener('change', function() {
      if (this.checked) {
          modal1.style.display = 'block'; // Show the modal
      } else {
          modal1.style.display = 'none'; // Hide the modal
      }
  });

  // Get the close button
  var closeButton1 = modal1.querySelector('.close');


  // Cerrar modal cuando se da al boton
  closeButton1.addEventListener('click', function() {
      modal1.style.display = 'none';
  });
});
/////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  var openModalBtn = document.getElementById('openModalBtn');
  var modal = document.getElementById('terceraModal');
  var closeButton = modal.querySelector('.close');

  // Event listener para abrir la ventana modal
  openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  // Event listener para cerrar la ventana modal al hacer clic en el botón de cierre
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });
});



