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

let currentFilter = null;

const elForm = document.querySelector("form");
const elToDoList = document.getElementById("toDoList");

elToDoList.addEventListener("click", (ev) => markTaskDone(ev));

elForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const contentValue = elForm.querySelector("#newTask").value;
  createListing(contentValue);
  elForm.reset();
});

document.getElementById("displayAll").addEventListener("click", () => {
  currentFilter = null;
  renderToDoList(currentFilter);
});
document.getElementById("displayCompleted").addEventListener("click", () => {
  currentFilter = true;
  renderToDoList(currentFilter);
});
document.getElementById("displayNotCompleted").addEventListener("click", () => {
  currentFilter = false;
  renderToDoList(currentFilter);
});

function markTaskDone(ev) {
  ev.target.classList.toggle("is-done");

  const task = gToDoList.find(
    (listing) => "el-" + listing.id === ev.target.parentElement.id
  );
  task.isDone = !task.isDone;
  renderToDoList(currentFilter);
}

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

function renderToDoList(filter = false) {
  elToDoList.innerHTML = "";

  for (let i = 0; i < gToDoList.length; i++) {
    const listing = gToDoList[i];

    if (filter === true && !listing.isDone) continue;
    if (filter === false && listing.isDone) continue;

    const elListing = document.createElement("li");
    elListing.setAttribute("id", "el-" + listing.id);

    if (listing.isDone) {
      elListing.classList.add("is-done");
    }

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
