document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const userData = {
            username: username,
            email: email,
            password: password
        };

        // Guardar datos en localStorage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Limpiar el formulario después de enviar
        form.reset();

        alert('¡Cuenta creada exitosamente!');
    });
});
