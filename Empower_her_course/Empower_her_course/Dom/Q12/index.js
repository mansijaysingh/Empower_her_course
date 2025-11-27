const list = document.querySelector("#item-list");
const button = document.querySelector("#add-btn");

button.addEventListener("click", function() {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";

  const currentCount = list.children.length + 1;

  if (currentCount % 2 !== 0) {
    newItem.style.fontWeight = "bold";
    newItem.style.color = "blue";
  } else {
    newItem.style.fontStyle = "italic";
    newItem.style.color = "red";
  }

  list.append(newItem);
});