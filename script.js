// Select DOM elements
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

// initialize array
let data = [];

// get random user from API

function doubleMoney() {
  // alla users property money ska dubblas
  // TIPS: använd spread operator för att se till att all tidigare data inte
  // körs över
}

function sortByRichest() {
  // sortera listan med den rikaste personen först
}

function showMillionaires() {
  // visa endast users som är miljonärer
}

function calculateWealth() {
  // räkna ihop allas pengar, alltså totala förnögenheten
  // den här är svårast och använder en lite mer komplicerad array metod
}

// add new user to data array

// update the DOM

// format money
// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// event listeners
// här lägger ni eventlisteners till alla knappar i menyn
