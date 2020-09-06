//Fetch the items from the JSON file
function loadItems() {
  return fetch("./data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// Create HTML list item from given data item
function createHTMLString(item) {
  return `
    <li class="list ${item.type} ${item.color}">
        <img src="${item.image}" alt="${item.type}" class="thumbnail"/>
        <span class="description">${item.gender}, ${item.size}</span>
    </li>`;
}

function setEventListeners(items) {
  // Events
  const shirtBtn = document.querySelector(".blue_t");
  const pantsBtn = document.querySelector(".blue_p");
  const skirtBtn = document.querySelector(".blue_s");
  const blueBtn = document.querySelector(".blue_btn");
  const yellowBtn = document.querySelector(".yellow_btn");
  const pinkBtn = document.querySelector(".pink_btn");

  const logo = document.querySelector(".logo");
  const list = document.querySelectorAll(".list");

  const sortItems = (item) => {
    resetItems();
    for (let i = 0; i < list.length; i++) {
      if (list[i].className.match(item) == null) {
        list[i].classList.add("inactive");
      } else {
        list[i].classList.add("active");
      }
    }
  };

  const resetItems = () => {
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("inactive");
      list[i].classList.remove("active");
    }
  };
  const resetDisplay = () => resetItems();

  const clickedShirt = () => sortItems("shirt");
  const clickedPants = () => sortItems("pants");
  const clickedSkirt = () => sortItems("skirt");
  const clickedBlueBtn = () => sortItems("blue");
  const clickedYellowBtn = () => sortItems("yellow");
  const clickedPinkBtn = () => sortItems("pink");
  logo.addEventListener("click", resetDisplay);
  shirtBtn.addEventListener("click", clickedShirt);
  pantsBtn.addEventListener("click", clickedPants);
  skirtBtn.addEventListener("click", clickedSkirt);
  blueBtn.addEventListener("click", clickedBlueBtn);
  yellowBtn.addEventListener("click", clickedYellowBtn);
  pinkBtn.addEventListener("click", clickedPinkBtn);
}
//main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
