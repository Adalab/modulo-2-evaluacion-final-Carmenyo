function listenListDrinks() {
  const listDrinks = document.querySelectorAll(".js-cocktail");
  for (const drink of listDrinks) {
    drink.addEventListener("click", getFavDrinks);
  }
}
// Capturar favoritos
function getFavDrinks(event) {

    const selectedDrink = parseInt(event.currentTarget.id);
  //me busca el objeto
    const clickedDrink = drinks.find((data) => {
      return data.idDrink == selectedDrink;
    });
    //me busca la posición del objeto
    const favoritesCheck = favorites.findIndex((data) => {
      return data.idDrink == selectedDrink;
    });
  
    if (favoritesCheck === -1) {
      favorites.push(clickedDrink);
    } else {
      favorites.splice(favoritesCheck, 1);
    }
  
    console.log(favorites);
    setLocalStorage();
  
    paintFavorites();
  }
  function paintFavorites() {
    let html2 = "";
    for (const favorite of favorites) {
      if (favorite.strDrinkThumb !== " ") {
        html2 += `
                    <li class= "js-selectedDrink" id="${favorite.idDrink}">
                    <h2 class="js-titleDrink">${favorite.strDrink}</h2>
                    <img class="js-image" src="${favorite.strDrinkThumb}"/>
                    <i id="${favorite.idDrink}" class="fa-solid fa-heart js-favicon"></i>
                    </li>`;
      } else {
        html2 += `
                          <li class= "js-selectedDrink" id="${favorite.idDrink}">
                          <h2>${favorite.strDrink}</h2> 
                          <img class="js-image" src="${defaultImage}"/>
                          <i id="${favorite.idDrink}" class="fa-solid fa-heart js-favicon"></i>
                          </li>`;
      }
    }
    favoriteList.innerHTML = html2;

    document.querySelectorAll(".js-favicon").forEach((favicon) => favicon.addEventListener ("click",handleFavIconClick));
  }

