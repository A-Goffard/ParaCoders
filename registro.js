document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay datos almacenados en el Local Storage al cargar la página
    if (!localStorage.getItem('userData')) {
        // Si no hay datos almacenados, significa que el usuario no tiene una cuenta
        // Mostrar un mensaje indicando que debe crear una cuenta nueva
        const message = document.createElement('p');
        message.textContent = '¡Bienvenido! Parece que aún no tienes una cuenta. Por favor, crea una nueva cuenta ';

        const link = document.createElement('a');
        link.textContent = 'aquí';
        link.href = '/acceso.html'; // Reemplaza esto con la URL correcta de la página de creación de cuenta

        const container = document.querySelector('.sectionCrear');
        container.appendChild(message);
        container.appendChild(link);
    }
});