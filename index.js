function handleSearchSubmitA(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-formA");
  let cityNameA = document.querySelector("#cityA");
  cityNameA.innerHTML = searchInput.value;
}

let searchButtonA = document.querySelector(".locationA .button");
searchButtonA.addEventListener("click", handleSearchSubmitA);

function handleSearchSubmitB(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-formB");
  let cityNameB = document.querySelector("#cityB");
  cityNameB.innerHTML = searchInput.value;
}

let searchButtonB = document.querySelector(".locationB .button");
searchButtonB.addEventListener("click", handleSearchSubmitB);
