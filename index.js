import data from "./data.js";

let filteredArray = new Array();

const cards = document.getElementById("cards");
const filterButton = document.getElementById("filterButton");
const filterInput = document.getElementById("filterInput");
const resetButton = document.getElementById("resetButton");

filterButton.addEventListener("click", (e) => {
  getResults();
});
resetButton.addEventListener("click", (e) => {
  restoreContent();
});

function createElements(arr) {
  let output = new Array();

  for (let i = 0; i < arr.length; i++) {
    output += `<div>
    <h3>${arr[i].name}</h3>
    <p>Company: ${arr[i].company}</p>
    <p>Email: ${arr[i].email}</p>
    <p>Phone: ${arr[i].phone}</p>
    <p>Age: ${arr[i].age}</p>
    <p>Gender: ${arr[i].gender}</p>
    <p>Eye color: ${arr[i].eyeColor}</p>
  </div>`;
    cards.innerHTML = output;
  }
}

createElements(data);

function getResults() {
  filterWith(data, filterInput.value);
  while (cards.firstChild) {
    cards.firstChild.remove();
  }
  createElements(filteredArray);
}

function restoreContent() {
  while (cards.firstChild) {
    cards.firstChild.remove();
  }
  createElements(data);
}

function filterWith(arr, filter) {
  if (filter.length > 2) {
    return (filteredArray = arr.filter((val) => {
      return Object.values(val)
        .toString()
        .toLowerCase()
        .includes(filter.toLowerCase());
    }));
  } else {
    return [];
  }
}
