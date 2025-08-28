import { createItemList } from "./scripts/createItemList.js";

// get shopping list from HTML
// <ul id="lista-de-compras">
//  <li>
//  </li>
// </ul>
const shoppingList = document.getElementById("lista-de-compras");

// get save button from HTML
const getSaveButton = document.getElementById("adicionar-item");

// Callback function:
//  get a variable from HTML and add an event
//  the event type is "click", when clicked will exute an arrow function
getSaveButton.addEventListener("click", (event) => {
  // prevent the default action of the event from happening
  event.preventDefault();
  const itemList = createItemList();

  // Now appending to a real element in HTML
  shoppingList.appendChild(itemList);

  verifyEmptyList();
});

// When you use an queySelector you are gettin data from class
// for this you need place and . before de class name
const emptyListMessage = document.querySelector(".message-empty-list");

// Function thats verify if ListItem is empty
// if are empty add emptyList message
// if not remove emptyList message
function verifyEmptyList() {
  const itemsList = shoppingList.querySelectorAll("li");
  if (itemsList.length === 0) {
    emptyListMessage.style.display = "block";
  } else {
    emptyListMessage.style.display = "none";
  }
}

verifyEmptyList();
