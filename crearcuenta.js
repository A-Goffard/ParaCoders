document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('signup-form');

	form.addEventListener('submit', function(event) {
		event.preventDefault();

		const username = document.getElementById('input1').value;
		const userapellido = document.getElementById('input2').value;
		const email = document.getElementById('input3').value;
		const contrasena = document.getElementById('input4').value;
		const numero_tarjeta = document.getElementById('input5').value;
		const nombre_tarjeta = document.getElementById('input6').value;
		const fecha_expiracion = document.getElementById('input7').value;
		const cvv = document.getElementById('input8').value;

		const userData = {
			username: username,
			userapellido: userapellido,
			email: email,
			contrasena: contrasena,
			numero_tarjeta: numero_tarjeta,
			nombre_tarjeta: nombre_tarjeta,
			fecha_expiracion: fecha_expiracion,
			cvv: cvv
		};

		localStorage.setItem('userData', JSON.stringify(userData));

		form.reset();

		alert('¡Cuenta creada exitosamente!');
	});
});