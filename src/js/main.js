"use strict";

const searchButton = document.querySelector(".js-searchButton");
const inputNameCocktail = document.querySelector(".js-searchInput");
const resultList = document.querySelector(".js-main-list");
const favoriteList = document.querySelector(".js-main-listfav");
const resetFav = document.querySelector(".js-favReset")
const defaultImage =
  "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
const reset = document.querySelector(".js-formReset");

let drinks = [];
let favorites = [];

if (localStorage.getItem("selected") !== null) {
  getLocalStorage();
}

// Funciones
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

function listenListDrinks() {
  const listDrinks = document.querySelectorAll(".js-cocktail");
  for (const drink of listDrinks) {
    drink.addEventListener("click", getFavDrinks);
  }
}

function getFavDrinks(event) {

  const selectedDrink = parseInt(event.currentTarget.id);

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

  console.log(favorites);
  setLocalStorage();

  paintFavorites();
}

function setLocalStorage() {
  localStorage.setItem("selected", JSON.stringify(favorites));
}

function getLocalStorage() {
  favorites = JSON.parse(localStorage.getItem("selected"));
  paintFavorites();
}
function paintFavorites() {
  let html2 = "";
  for (const favorite of favorites) {
    if (favorite.strDrinkThumb !== " ") {
      html2 += `
                  <li class= "js-selectedDrink"id="${favorite.idDrink}">
                  <h2 class="js-titleDrink">${favorite.strDrink}</h2>
                  
                  <img class="js-image" src="${favorite.strDrinkThumb}"/>
                  <i id="${favorite.idDrink}" class="fa-solid fa-heart js-favicon"></i>
                  </li>`;
    } else {
      html2 += `
                        <li id="${favorite.idDrink}">
                        <h2>${favorite.strDrink}</h2> 
                        <img class="js-image" src="${defaultImage}"/>
                        <i id="${favorite.idDrink}" class="fa-solid fa-heart js-favicon"></i>
                        </li>`;
    }
  }
  favoriteList.innerHTML = html2;
}
function resetLocalStorage(){
  favorites = [];
  localStorage.clear();
  location.reload();
}

searchButton.addEventListener("click", handleClick);
resetFav.addEventListener("click", resetLocalStorage)

