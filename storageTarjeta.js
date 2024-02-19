document.addEventListener('DOMContentLoaded', function() {
    const guardarDatosBtn = document.getElementById('guardarDatosT');

    guardarDatosBtn.addEventListener('click', function() {
		const nombreApellidoTarjeta = document.getElementById('cardNombre').value;
        const numeroTarjeta = document.getElementById('cardNumero').value;
        const fechaTarjeta = document.getElementById('cardFecha').value;
        const codigo = document.getElementById('cardCVV').value;

		 // Crear un objeto con los datos del formulario
		 const userTarjeta = {
            nombreApellidoTarjeta:nombreApellidoTarjeta,
            numeroTarjeta: numeroTarjeta,
            fechaTarjeta: fechaTarjeta,
            codigo: codigo
        };

        // Convertir el objeto userData a JSON
        const userTarjetaJSON = JSON.stringify(userTarjeta);

        // Guardar los datos en el Local Storage
        localStorage.setItem('userTarjeta', userTarjetaJSON);

        alert('Datos guardados en el Local Storage');
    });
});
