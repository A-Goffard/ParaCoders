//Catalogo

let productosCatalogo=[
    //Medicamentos
    {
        id:"med-01",
        nombre:"Epidyolex",
        imagen:"img/Categorias/Medicamentos/Medicamentos_Epidyolex.png",
        precio:10,
        categoria:"medicamentos",
        

    },
    {
        id:"med-02",
        nombre:"Marinolpng",
        imagen:"img/Categorias/Medicamentos/Medicamentos_Marinolpng",
        categoria:"medicamentos",
        precio:12

    },
    {
        id:"med-03",
        nombre:"Sativex",
        imagen:"img/Categorias/Medicamentos/Medicamentos_Sativex.png",
        categoria:"medicamentos",
        precio:14

    },
    {
        id:"med-04",
        nombre:"Syndros",
        imagen:"img/Categorias/Medicamentos/Medicamentos_Syndros.png",
        categoria:"medicamentos",
        precio:16

    },


    //Cuidado Natural
    {
        id:"nat-01",
        nombre:"Aceite de Cañamo.",
        imagen:"img/Categorias/CuidadoNatural/CuidadoNatural_AceiteCanamo.png",
        categoria:"natural",
        precio:21

    },
    {
        id:"nat-02",
        nombre:"Kernnabis",
        imagen:"img/Categorias/CuidadoNatural/CuidadoNatural_Kernnabis.png",
        categoria:"natural",
        precio:23

    },
    {
        id:"nat-03",
        nombre:"Pentalium",
        imagen:"img/Categorias/CuidadoNatural/CuidadoNatural_Pentalium.png",
        categoria:"natural",
        precio:25

    },
    {
        id:"nat-04",
        nombre:"Syndros",
        imagen:"img/Categorias/Medicamentos/Medicamentos_Syndros.png",
        categoria:"natural",
        precio:27

    },

     //Herbolario
     {
        id:"herb-01",
        nombre:"AceiteCBD",
        imagen:"img/Categorias/Herbolario/Herbolario_AceiteCBD.png",
        categoria:"herbolario",
        precio:31

    },
    {
        id:"herb-02",
        nombre:"Cannabidiol",
        imagen:"img/Categorias/Herbolario/Herbolario_Cannabidiol.png",
        categoria:"herbolario",
        precio:32

    },
    {
        id:"herb-03",
        nombre:"Pentalium",
        imagen:"img/Categorias/Herbolario/Herbolario_Santosha.png",
        categoria:"herbolario",
        precio:33

    },
    {
        id:"herb-04",
        nombre:"Syndros",
        imagen:"img/Categorias/Herbolario/Herbolario_TerraVerda.png",
        categoria:"herbolario",
        precio:34

    },

     //Ortopedia
     {
        id:"ort-01",
        nombre:"AceiteCBD",
        imagen:"img/Categorias/Ortopedia/Ortopedia_Baston.png",
        categoria:"ortopedia",
        precio:41

    },
    {
        id:"ort-02",
        nombre:"Muñequera",
        imagen:"img/Categorias/Ortopedia/Ortopedia_Munequera.png",
        categoria:"ortopedia",
        precio:42

    },
    {
        id:"ort-03",
        nombre:"Pentalium",
        imagen:"img/Categorias/Ortopedia/Ortopedia_Rodillera.png",
        categoria:"ortopedia",
        precio:43

    },
    {
        id:"ort-04",
        nombre:"Syndros",
        imagen:"img/Categorias/Ortopedia/Ortopedia_SillaRueda.png",
        categoria:"ortopedia",
        precio:44

    }
];

function getProductoFromStorage(){
    let retrievedProductos=JSON.parse(localStorage.getItem("productosCatalogo"));

    /* if(retrievedProductos==null){
        productosCatalogo=[];
    }else {
        productosCatalogo=retrievedProductos;
    } */

    productosCatalogo=retrievedProductos ?? [];

    

}

getProductoFromStorage(); 


/* let name=localStorage.getItem("name");
alert(name) */

//agregar producto al catalogo
document.getElementById("add-btn").addEventListener("click",function(){
    let productId=prompt("Product ID");
    let productName=prompt("Nombre Producto");
    let productImage=prompt("ruta imagen Producto");
    let productCategoria=prompt("Categoria Producto");
    let productPrecio=prompt("Precio Producto");

    


    let prpductObj={
        "id":productId,
        "nombre":productName,
        "imagen":productImage,
        "categoria":productCategoria,
        "precio":productPrecio

    }
    productosCatalogo.push(prpductObj);

    storeCatalogo();

    fillCatalogoOnThePage();

    })
    

    //Eliminar producto

    function eliminarProducto(index){
        let producto=productosCatalogo[index];
        console.log(producto);
        let isConfirmed=confirm("estas seguro ?"+productosCatalogo.nombre);

        if(isConfirmed){
            productosCatalogo.splice(index,1);
            storeCatalogo();
            fillCatalogoOnThePage();
        }
    }

    //Modificar producto

    function modificarProducto(index){
        let producto=productosCatalogo[index];
        producto.nombre=newProductoNombre;
        storeCatalogo();
        fillCatalogoOnThePage();
    }





    //========= Storage Functions ========

    function storeCatalogo(){
        let catalogoString=JSON.stringify(productosCatalogo);
         /*     console.log(catalogoString); */
        localStorage.setItem("productosCatalogo",catalogoString);
    }
