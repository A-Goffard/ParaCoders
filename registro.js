document.addEventListener("DOMContentLoaded", function() {
    // Verificar si hay datos almacenados en el Local Storage al cargar la página
    if(localStorage.getItem("formData")) {
        console.log(FormData)
        // Si hay datos almacenados, significa que el usuario ya tiene una cuenta
        // En lugar de mostrar el formulario de inicio de sesión, podrías redirigirlo a otra página o realizar alguna otra acción
        window.location.href = "index.html";
        // Aquí podrías redirigir al usuario usando window.location.href = "URL de la página principal";
    } else {
        // Si no hay datos almacenados, significa que el usuario no tiene una cuenta
        // Mostrar un mensaje indicando que el usuario debe crear una cuenta
        alert("Debes crear una cuenta primero.");
    }

    // Escuchar el evento de envío del formulario
    document.querySelector(".form-acceso").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío predeterminado del formulario

        // Obtener los valores del formulario
        const nombre = document.getElementById("acceso-nombre").value;
        const email = document.getElementById("acceso-email").value;
        const password = document.getElementById("acceso-password").value;

        // Guardar los datos del formulario en el Local Storage
        localStorage.setItem("formData", JSON.stringify({ nombre, email, password }));

        // Aquí puedes agregar cualquier otra lógica de envío del formulario que necesites

        // Simular envío del formulario para este ejemplo
        alert("Formulario enviado correctamente");
    });
});
