/* eslint-disable quotes */
"use strict";

const searchButton = document.querySelector(".js-searchButton");
const inputNameCocktail = document.querySelector(".js-searchInput");
const resultList = document.querySelector(".js-main-list");
const favoriteList = document.querySelector(".js-main-listfav");
const defaultImage =
  "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
const reset = document.querySelector(".js-formReset");

let drinks = [];
let favorite =[];

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
        drinks = data.drinks.map ((product) => {
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
function paintDrinks() {
  let html = "";
  for (const drinkItem of drinks) {
      html += `
      <li>
      <h2>${drinkItem.strDrink}</h2>
      <img src="${drinkItem.strDrinkThumb}"/>
      </li>`;
    }
    resultList.innerHTML = html;
    listenListDrinks();
}

function listenListDrinks() {
  const listDrinks = document.querySelectorAll(".js-cocktail");
  for (const drink of listDrinks) {
    drink.addEventListener("click", getFavDrinks);
  }
}

function getFavDrinks(event) {

  const selectedDrink = parseInt(event.currentTarget.id);

  //console.log(drinks);
  const clickedDrink = drinks.find((data) => {
    return data.idDrink == selectedDrink;
  });

  console.log(clickedDrink);

  const favoritesCheck = favorites.findIndex((data) => {
    return data.idDrink == selectedDrink;
  });

  console.log(favoritesCheck);
  if (favoritesCheck === -1) {
    favorites.push(clickedDrink);
  } else {
    favorites.splice(favoritesCheck, 1);
  }
  paintFavorites();
}
function paintFavorites() {
  let html2 = "";
  for (const favorite of favorites) {
    if (favorite.strDrinkThumb !== " ") {
      html2 += `
                  <li id="${favorite.idDrink}"  >
                  <h2>${favorite.strDrink}</h2>
                  <img src="${favorite.strDrinkThumb}"/>
                  </li>
                `;
    } else {
      html2 += `
                        <li id="${favorite.idDrink}" > >
                        <h2>${favorite.strDrink}</h2>
                        <img src="${defaultImage}"/>
                        </li>
              `;
    }
  }
  favoriteList.innerHTML = html2;
}


searchButton.addEventListener("click", handleClick);

  