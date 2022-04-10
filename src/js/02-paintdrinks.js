
// pintar HTML principal
function paintDrinks() {
    let html = "";
    for (const drinkItem of drinks) {
      if (drinkItem.strDrinkThumb !== "") {
        html += `
          <li id="${drinkItem.idDrink}" class="js-cocktail">
          <h2 class="js-titleDrink">${drinkItem.strDrink}</h2>
          <img class="js-image" src="${drinkItem.strDrinkThumb}">
          </li>`;
      } else {
        html += `
        <li id="${drinkItem.idDrink}" class="js-cocktail">
        <h2 class="js-titleDrink">${drinkItem.strDrink}</h2>
        <img class="js-image" src="${defaultImage}">
        </li>`;
      }
    }
  
    resultList.innerHTML = html;
    listenListDrinks();
  }