const seleccionar_todo = document.querySelector (".boton_check");
const botones = document.querySelectorAll (".boton_seleccion_carrito");


//---------------------------------------------------------------------

seleccionar_todo.addEventListener("change", (event) => {
    botones.forEach((element) => {
        element.checked = false;
    })
    
    if(event.target.checked){
        botones.forEach((element) => {
            element.checked = true;
        })

    }


});