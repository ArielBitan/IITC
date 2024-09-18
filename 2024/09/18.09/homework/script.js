const content = document.getElementById("content");
console.log(content);
content.style.backgroundColor = "lightblue";
content.style.color = "red";
const liItems = document.querySelectorAll("li");
for (let i = 0; i < liItems.length; i++) {
  console.log(liItems[i].textContent);
}
document.querySelector("button").addEventListener("click", highlightListItems);

function highlightListItems() {
  console.log("aa");

  for (let i = 0; i < liItems.length; i++) {
    liItems[i].style.backgroundColor = "yellow";
  }
}
