let gToDoList = [
  {
    id: makeId(),
    content: "sermasdjfj asjdsjdn sdjnsdj asdsd",
    isDone: false,
  },
  {
    id: makeId(),
    content: "sermasdjfj asjdsjdn ss asdsd",
    isDone: false,
  },
  {
    id: makeId(),
    content: "sermasdjfj ff adad asdsd",
    isDone: false,
  },
];

const elForm = document.querySelector("form");
const elToDoList = document.getElementById("toDoList");

elToDoList.addEventListener("click", (ev) => markTaskDone(ev));

function markTaskDone(ev) {
  ev.target.classList.toggle("is-done");
  const task = gToDoList.find((listing) => listing.id === taskId);
  task.isDone = !task.isDone;
}

elForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const contentValue = elForm.querySelector("#newTask").value;
  createListing(contentValue);
  elForm.reset();
});

// DELETE
function deleteListing(listingId) {
  const newList = [];

  for (let i = 0; i < gToDoList.length; i++) {
    const listing = gToDoList[i];

    if (listing.id !== listingId) {
      newList.push(listing);
    }
  }

  gToDoList = newList;

  const elListingToDelete = elToDoList.querySelector("#el-" + listingId);
  elToDoList.removeChild(elListingToDelete);
}

function renderToDoList() {
  elToDoList.innerHTML = "";
  for (let i = 0; i < gToDoList.length; i++) {
    const listing = gToDoList[i];
    const elListing = document.createElement("li");
    elListing.setAttribute("id", "el-" + listing.id);

    elListing.innerHTML = `
    <span>${listing.content}</span>
    <button onclick="deleteListing('${listing.id}')">Delete</button>
    `;
    elToDoList.appendChild(elListing);
  }
}

function displayCompleteTasks() {
  console.log(gToDoList);

  elToDoList.innerHTML = "";

  for (let i = 0; i < gToDoList.length; i++) {
    const listing = gToDoList[i];
    console.log(listing.isDone);
    if (!listing.isDone) continue;
    const elListing = document.createElement("li");
    elListing.setAttribute("id", "el-" + listing.id);

    elListing.innerHTML = `
    <span>${listing.content}</span>
    <button onclick="deleteListing('${listing.id}')">Delete</button>
    `;
    elToDoList.appendChild(elListing);
  }
}

function createListing(content) {
  const newListing = {
    id: makeId(),
    content: content,
    isDone: false,
  };

  gToDoList.push(newListing);
  renderToDoList();
}

renderToDoList();

function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}
