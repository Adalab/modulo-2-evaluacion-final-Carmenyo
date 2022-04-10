// reset local Storage
function resetLocalStorage(){
    favorites = [];
    localStorage.clear();
    location.reload();
  }
  
  // reset de main list
  function resetMainList(){
    drinks = [];
    location.reload();
  }

  reset.addEventListener ("click", resetMainList)

