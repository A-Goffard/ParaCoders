const seleccionar_todo = document.querySelector (".boton_check");
const botones = document.querySelectorAll (".boton_check_all");


// ----------Seleccionar todos los checkbox-----------

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

// ---------Sumar y restar productos en los botones-----------

let botones_sumar= document.querySelectorAll(".btn_cm");
let botones_restar= document.querySelectorAll(".btn_com_rest")


botones_sumar.forEach (event=>{
        event.addEventListener ('click', function () {
            alert(Hola);
        })
})






/* let numero_inicial
let contador=0; */

/*document.querySelectorAll[0](".btn_cm").addEventListener("click", function(){

    contador++;
    alert(contador);
    document.querySelectorAll(".num_compra").innerHTML=contador

}); */
/* document.getElementById("primero").addEventListener("click",function(){
    contador++;
    alert(contador);
    //document.querySelectorAll(".num_compra").innerHTML=contador

});
document.querySelectorAll[0](".btn_cm_rest").addEventListener("click", restarUno)
 */


//function sumarUno(){
  

//}

/* function restarUno(){
    contador= contador -1;
    document.querySelectorAll(".num_compra").innerHTML=contador

} */