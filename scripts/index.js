// get input item in text field from HTML
const getInputData = document.getElementById("input-item");

// get shopping list from HTML
// <ul id="lista-de-compras">
//  <li>
//  </li>
// </ul>
const shoppingList = document.getElementById("lista-de-compras");

// get save button from HTML
const getSaveButton = document.getElementById("adicionar-item");

// counter that will be used to create unique IDs for checkboxes
let counter = 0;

// Callback function:
//  get a variable from HTML and add an event
//  the event type is "click", when clicked will exute an arrow function
getSaveButton.addEventListener("click", (event) => {
  // prevent the default action of the event from happening
  event.preventDefault();
  if (getInputData.value === "") {
    alert("Please enter an item.");
    return;
  }

  // Create html element li
  const ListItem = document.createElement("li");

  // Create container with class lista-item-container
  const containerItemList = document.createElement("div");
  containerItemList.classList.add("lista-item-container");

  // Create an checkbox input element
  const inputCheckBox = document.createElement("input");
  inputCheckBox.type = "checkbox";
  inputCheckBox.id = `checkbox-${counter++}`;

  // Create an p with value in getInputData
  const itemName = document.createElement("p");
  itemName.innerText = getInputData.value;

  // Add an style or remove depending in check button status
  inputCheckBox.addEventListener("click", () => {
    if (inputCheckBox.checked) {
      itemName.style.textDecoration = "line-through";
    } else {
      itemName.style.textDecoration = "none";
    }
  });

  // Appending checkBox and itemName to containerItemList
  containerItemList.appendChild(inputCheckBox);
  containerItemList.appendChild(itemName);

  // Appending containerItemList to ListItem
  ListItem.appendChild(containerItemList);

  // Now appending to a real element in HTML
  shoppingList.appendChild(ListItem);

  // Catch only the day when the action occurred
  const daysOfWeek = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
  });

  // Catch date in pattern based in Brazil model date
  const date = new Date().toLocaleDateString("pt-BR");

  const hour = new Date().toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
  });

  const completedDate = `${daysOfWeek} (${date}) às ${hour}`;

  const itemTime = document.createElement("p");
  itemTime.classList.add("texto-data");
  itemTime.innerText = completedDate;

  ListItem.appendChild(itemTime);
});
