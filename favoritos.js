const botonFavorites = document.querySelectorAll(".favorite")

let favorites = [];

const updateFavoritesInLocalStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem("favorites");

    if(storedFavorites) {
        favorites = JSON.parse(storedFavorites);
    }
};