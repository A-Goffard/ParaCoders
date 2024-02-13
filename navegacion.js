/* AHORA NO ESTA FUNCIONANDO */



/* alert("el script de navegación funciona"); */
document.addEventListener("DOMContentLoaded", function() {
    let botonMedicamentos = document.getElementById("navMedicamentos");
    let botonCuidado  = document.getElementById("navCuidado");
    let botonHerbolario  = document.getElementById("navHerbolario");
    let botonOrtopedia  = document.getElementById("navOrtopedia");

    botonMedicamentos.addEventListener("click", function(event) {
        event.preventDefault();
        alert("funciona cuando le das al botón");
        let secMedicamentos = document.getElementById("medicamentos");

        secMedicamentos.scrollIntoView({behavior: "smooth"});
    });

    botonCuidado.addEventListener("click", function(event) {
        event.preventDefault();

        let secCuidado = document.getElementById("cuidado");

        secCuidado.scrollIntoView({behavior: "smooth"});
    });

    botonHerbolario.addEventListener("click", function(event) {
        event.preventDefault();

        let secHerbolario = document.getElementById("herbolario");

        secHerbolario.scrollIntoView({behavior: "smooth"});
    });

    botonOrtopedia.addEventListener("click", function(event) {
        event.preventDefault();

        let secOrtopedia = document.getElementById("ortopedia");

        secOrtopedia.scrollIntoView({behavior: "smooth"});
    });

});

