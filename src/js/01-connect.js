// Conectar API
// Manejadora
function handleClick() {
  connectApi();
}


function connectApi() {
  let inputValue = inputNameCocktail.value.toLowerCase();
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      drinks = data.drinks.map((product) => {
        const newDrink = {
          idDrink: product.idDrink,
          strDrink: product.strDrink,
          strDrinkThumb: product.strDrinkThumb,
        };
        return newDrink;
      });
      paintDrinks();
    });
}

searchButton.addEventListener("click", handleClick);
