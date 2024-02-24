
    document.addEventListener('DOMContentLoaded', () => {
    // Ruta al archivo JSON de productos
    const productosURL = 'productos.json';

    // Fetch para obtener los datos del archivo JSON
    fetch(productosURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los productos');
            }
            return response.json();
        })
        .then(productos => {
            // Una vez que se cargan los datos, puedes trabajar con ellos aquí
            console.log('Productos cargados:', productos);

            function mostrarDetallesProducto(idProducto) {
    // Aquí puedes utilizar los datos de productos cargados para mostrar los detalles del producto
    // Encuentra el producto por su ID
    const producto = productos.find(producto => producto.id === idProducto);

    // Actualiza el contenido HTML con los detalles del producto
    const productDetailsContainer = document.getElementById('productContainer');
    console.log(productDetailsContainer);
    productDetailsContainer.innerHTML = `
    <section id="producto-solo" class="producto-solo-descripcion">
    
    
    <div class="col3 productosGeneral marginupdown">
    
    <div class="imagen-producto">
        <img class="small-imagen-producto" src="${producto.imagen}" alt="${producto.nombre}">
        <p>${producto.nombre}</p>
        <p class="precio"><b>${producto.precio} €</b></p>
        <div class="puntuacion">
            <i class="fa-solid fa-cannabis"></i>
            <i class="fa-solid fa-cannabis"></i>
            <i class="fa-solid fa-cannabis"></i>
            <i class="fa-solid fa-cannabis"></i>
            <i class="fa-solid fa-cannabis"></i>
        </div>
    </div>

    <div class="butones-contador ">
        <button class="decrement-btn NPo">-</button>
        <span class="count">0</span>
        <button class="increment-btn NPo">+</button>
    </div>
    
    <div class="butones-anadir">
        <button class="favorite">
            <i class="fa-regular fa-star" id="favorite-regular" class="estrellaBacia"></i>
            <i class="fa-solid fa-star" id="added-favorite" class="estrellaLLena"></i>
        </button>
        <button class="NPa" id="mas-info">Añadir</button>
    </div>
    </div>
    <div class="col2 marginupdown">
        <ul class="marijuana-list"> 
            <li data-value="TexturaUntuosa"><i class="fa-solid fa-cannabis" ></i>Textura untuosa</li>

            <li data-value="AromaFrescoMentolado"><i class="fa-solid fa-cannabis"></i>Aroma fresco y mentolado </li>  

            <li data-value="NoContieneTHC"><i class="fa-solid fa-cannabis"></i>No contiene THC.</li>

            <li data-value="IndicadoUsoDiario"><i class="fa-solid fa-cannabis"></i>Está indicado para uso diario.</li>  

            <li data-value="Formato"><i class="fa-solid fa-cannabis"></i>Formato: 50gr</li>
        </ul>

    </div>
    <div class="col1 marginupdown">
        <h5 data-value="Descripcion">Descripcion :</h5>
        <p data-value="BalsamoCannabis">
            ${producto.descripcion}
        </p>
        <h6 data-value="AnalgésicoNatural">El aceite de cáñamo o cannabis es un analgésico natural :</h6>
        <ul class="lista-dolores">
            <li data-value="DoloresMusculares">Dolores musculares</li>
            <li data-value="DoloresArticulares">Dolores articulares</li>
            <li data-value="DoloresCronicos">Dolores crónicos: artrosis, artritis, reúmas, fibromialgias...</li>
            <li data-value="Eczemas">Eczemas</li>
            <li data-value="Psoriasis">Psoriasis </li>
            <li data-value="DermatitisAtopica">Dermatitis atópica…</li>
        </ul>

    </div>

</section>

    `;
}

            // Por ejemplo, puedes mostrar los detalles del primer producto
        mostrarDetallesProducto(productos[0].id);

            
        })
        .catch(error => console.error('Error:', error));
    
        
});