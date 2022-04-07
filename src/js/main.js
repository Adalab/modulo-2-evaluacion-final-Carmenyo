/* eslint-disable quotes */
"use strict";

const searchButton = document.querySelector (".js-searchButton");
const inputNameCoctel = document.querySelector (".js-searchInput");
const resultList = document.querySelector ("js-main-list");


// Funciones
function connectApi() {
	fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((response)=> response.json())
    .then((data) => {
      // printDrinks(data);
			console.log(data.drinks);
    })
}
//Al pulsar buscar conectar la API
function handleClick(){
  connectApi();
}
// //Evento Buscar
searchButton.addEventListener("click", handleClick);