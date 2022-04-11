function handleFavIconClick(event) {
    const selectedDrink = parseInt (event.currentTarget.parentElement.id);
    const favoritesCheck = favorites.findIndex ((data)=> {
        return data.idDrink == selectedDrink;
    });

if (favoritesCheck !== -1){
    favorites = favorites.filter (favorite => parseInt (favorite.idDrink) !== selectedDrink);
     
    setLocalStorage();

    paintFavorites();
}    
}
