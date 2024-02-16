const btnsFavorites = document.querySelectorAll(".favorite")
const products = document.querySelectorAll(".card-product");
const counterFavorite = document.querySelector(".counter-favorite");

const containerListFavorites = document.querySelector(".container-list-favorites");
const listFavorites = document.querySelector(".list-favorites");

let favorites = [];

const updateFavoritesInLocalStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem("favorites");

    if(storedFavorites) {
        favorites = JSON.parse(storedFavorites);
    showHTML(); 
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

const updateFavoriteMenu = () => {
    listFavorites.innerHTML = "";

    favorites.forEach(product => {
        const favoriteCard = document.createElement("div");
        favoriteCard.classList.add("card-favorite");

        const titleElement = document.createElement("p");
        titleElement.classList.add("title");
        titleElement.textContent = product.title;
        favoriteCard.appendChild(titleElement);

        const priceElement = document.createElement("p");
        priceElement.textContent = product.price;
        favoriteCard.appendChild(priceElement);

        listFavorites.appendChild(favoriteCard);
    })
}

const showHTML = () => {
    products.forEach(product => {       
        const contentCard = product.querySelector(".content-card-product");
        const productId = contentCard.dataset.productId;
        
        //un metodo de arrays para saber si es true o false que está seleccionado
        const isFavorite = favorites.some(
            favorite =>favorite.id === productId
        );
        //esto añade la clase favorite-active a la estrella que está elegida
        const favoriteButton = product.querySelector(".favorite");
        const favoriteButtonActive = product.querySelector("#added-favorite");
        const favoriteRegularIcon = product.querySelector("#favorite-regular");
        
        favoriteButtonActive.classList.toggle("active", isFavorite);
        favoriteRegularIcon.classList.toggle("active", isFavorite);
        favoriteButton.classList.toggle("favorite-active", isFavorite);
    });
    counterFavorite.textContent = favorites.length;
    updateFavoriteMenu();
};




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
        showHTML();
    });
});

const btnClose = document.querySelector("#btn-close");
const buttonHeaderFavorite = document.querySelector("#button-header-favorite");

buttonHeaderFavorite.addEventListener("click", (e) => {
    containerListFavorites.classList.toggle("show"); 
})

btnClose.addEventListener("click", e => {
    containerListFavorites.classList.remove("show");
})

loadFavoritesFromLocalStorage();
updateFavoriteMenu();