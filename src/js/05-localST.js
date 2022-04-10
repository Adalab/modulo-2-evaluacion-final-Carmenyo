// Cargar lo que tenga en local Storage
if (localStorage.getItem("selected") !== null) {
    getLocalStorage();
  }
  
  //local storage
  function setLocalStorage() {
    localStorage.setItem("selected", JSON.stringify(favorites));
  }
  
  function getLocalStorage() {
    favorites = JSON.parse(localStorage.getItem("selected"));
    paintFavorites();
  }
  // Poner favoritos en el HTML
  