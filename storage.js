document.addEventListener('DOMContentLoaded', function() {
    const guardarDatosBtn = document.getElementById('guardarDatos');

    guardarDatosBtn.addEventListener('click', function() {
        // Obtener los valores del formulario
        const nombreApellido = document.getElementById('input1').value;
        const direccion = document.getElementById('input2').value;
        const codigoPostal = document.getElementById('input3').value;
        const ciudad = document.getElementById('input4').value;
        const provincia = document.getElementById('input5').value;
        const pais = document.getElementById('input6').value;
        
        // Crear un objeto con los datos del formulario
        const userData = {
            nombreApellido: nombreApellido,
            direccion: direccion,
            codigoPostal: codigoPostal,
            ciudad: ciudad,
            provincia: provincia,
            pais: pais,
        };

        // Convertir el objeto userData a JSON
        const userDataJSON = JSON.stringify(userData);

        // Guardar los datos en el Local Storage
        localStorage.setItem('userData', userDataJSON);

        alert('Datos guardados en el Local Storage');
    });
});
