const btnsFavorites = document.querySelectorAll(".favorite")
const products = document.querySelectorAll(".card-product");

let favorites = [];

const updateFavoritesInLocalStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem("favorites");

    if(storedFavorites) {
        favorites = JSON.parse(storedFavorites);
/*         showHTML(); */
    };
};

/* Si existe lo quito y si no existe lo pongo */

const toggleFavorite = product => {
    const index = favorites.findIndex(element => element.id === product.id);
/* cuando el index es -1 es porque no está dentro del array y no existe */
    if (index > -1) {
        favorites.splice(index, 1);
        updateFavoritesInLocalStorage();/* esto hay que hacer cada vez que se hace un cambio porque estamos usando el local storage */
    } else {
        favorites.push(product);
        updateFavoritesInLocalStorage();
    }
};

const showHTML = () => {
    products.forEach(product => {
        const contentCard = product.querySelector(".content-card-product")
    });
}




/* para sacar las partes que nos interesan del div al que está llamando */

btnsFavorites.forEach(button => {
    button.addEventListener("click", e => {
        const card = e.target.closest(".content-card-product");

        const product = {
            id: card.dataset.productId,
            title: card.querySelector("h3").textContent,
            price: card.querySelector(".precio").textContent,
        };

        toggleFavorite(product);

    });
});