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


searchButton.addEventListener("click", handleClick);

  