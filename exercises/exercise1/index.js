// get HTML values
const getInputData = document.getElementById("input-item-form");
const getSaveButton = document.getElementById("button-form");
const getList = document.getElementById("items-list");

let counter = 0;

// adding an event to the button save
getSaveButton.addEventListener("click", (event) => {
  // preventing default action
  event.preventDefault();

  // if input is "" return an alert
  if (getInputData.value === "") {
    alert("Input a value before submit");
    return;
  }

  // building HTML components to create the list in frontend
  const baseList = document.createElement("li");

  const divItemList = document.createElement("div");
  divItemList.classList.add("item-list-container");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = `checkBox-${counter++}`;

  const listItem = document.createElement("p");
  listItem.innerText = getInputData.value;

  // appending components in ul from HTML
  divItemList.appendChild(checkBox);
  divItemList.appendChild(listItem);
  baseList.appendChild(divItemList);
  getList.appendChild(baseList);
});
