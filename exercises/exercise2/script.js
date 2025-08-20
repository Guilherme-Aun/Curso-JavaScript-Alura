const buttonSave = document.getElementById("adicionar_Button");

function addFilm() {
  const filmList = document.getElementById("lista_de_filmes");
  const getFilmFromInput = document.getElementById("input_item");
  if (getFilmFromInput.value === "") {
    alert("Write an film name in input");
    return;
  }

  const filmItem = document.createElement("li");
  // This time we use .textContent
  // the diference between textContent and create an <p>
  // is text content is more simple but you can`t stylize him
  filmItem.textContent = getFilmFromInput.value;
  filmList.appendChild(filmItem);
  getFilmFromInput.value = "";
}

buttonSave.addEventListener("click", (event) => {
  event.preventDefault();
  addFilm();
});
