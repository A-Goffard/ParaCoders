
        document.addEventListener('DOMContentLoaded', () => {
        const btnMostrarDetalles = document.querySelectorAll('.btnMasInfo');
        btnMostrarDetalles.forEach(btn => {
        btn.addEventListener('click', () => {
                // Obtener el ID del producto del atributo data-product-id
                const productId = btn.getAttribute('data-product-id');
                
                // Navegar a la página del producto con el ID del producto como parámetro
                window.location.href = `product1.html?id=${productId}`;


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


    // Agrega un listener al botón
    const btnMostrarDetalles = document.querySelectorAll('.btnMasInfo');
    //recorrer todos los butones que tienen la misma clase btnMasInfo
    btnMostrarDetalles.forEach(btn => {
        btn.addEventListener('click', () => {
            
        // Obtener el ID del producto del atributo data-product-id
        const productId = btn.getAttribute('data-product-id');
        console.log(productId);
         // Find the product in the JSON data array based on the product ID
         const product = productos.find(product => product.id === parseInt(productId));

         if (product) {
             // If the product is found, you can do whatever you need with it
             console.log('Product details:', product);
             // Call a function to display product details, etc.
         } else {
             console.log('Product not found');
         }

        });
        });

            // Por ejemplo, puedes mostrar los detalles del primer producto
        /* mostrarDetallesProducto(productos[0].id); */
       /*  mostrarDetallesProducto(1); */

            
    })
        .catch(error => console.error('Error:', error));

        

                
            });
        });
    });
