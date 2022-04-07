/* eslint-disable quotes */
"use strict";

const searchButton = document.querySelector (".js-searchButton");
const inputNameCoctel = document.querySelector (".js-searchInput");
const resultList = document.querySelector (".js-main-list");

let allDataDrinks= []

// Funciones
function connectApi() {
	let inputValue = inputNameCoctel.value.toLowerCase();

	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((response)=> response.json())
    .then((data) => {
			console.log(data.drinks);
    })
}
//Al pulsar buscar conectar la API
function handleClick(){
  connectApi();
}
// //Evento Buscar
searchButton.addEventListener("click", handleClick);