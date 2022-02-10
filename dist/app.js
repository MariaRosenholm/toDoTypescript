"use strict";

const save = document.querySelector("#save");
let toDo = document.querySelector("#toDo");
const list = document.querySelector("ol");
const deleteButton = document.querySelector("#delete");
let clickCount = 0;
let clickCount1 = 0;

const listMaker = (L, counter) => {
  let newLi = document.createElement("li");
  let newDelete = document.createElement("button");
  newDelete.textContent = " ";
  newLi.textContent = L;
  newLi.appendChild(newDelete);
  list.appendChild(newLi);

  newLi.addEventListener("click", (event) => {
    event.preventDefault;
    if (newLi.classList.contains("Done")) {
      newLi.classList.remove("Done");
    } else {
      newLi.setAttribute("class", "Done");
    }
  });

  newDelete.addEventListener("click", (event) => {
    event.preventDefault;
    newDelete.parentElement.remove();
    localStorage.removeItem(L);
  });

  localStorage.setItem(L, L);
};

save.addEventListener("click", (event) => {
  event.preventDefault;
  const trimmedToDo = toDo.value.trim();
  if (trimmedToDo === "") {
    return;
  }
  listMaker(trimmedToDo, clickCount);
  clickCount++;
  toDo.value = "";
});

save.addEventListener("keyup", (event) => {
  event.preventDefault;
  if (event.keyCode === 13) {
    const trimmedToDo = toDo.value.trim();
    if (trimmedToDo === "") {
      return;
    }
    listMaker(trimmedToDo, clickCount);
    clickCount++;
    toDo.value = "";
  }
});

toDo.addEventListener("keyup", (event) => {
  event.preventDefault;
  if (event.keyCode === 13) {
    const trimmedToDo = toDo.value.trim();
    if (trimmedToDo === "") {
      return;
    }
    listMaker(trimmedToDo, clickCount);
    clickCount++;
    toDo.value = "";
  }
});

Object.keys(localStorage).forEach(function (key) {
  if (localStorage.length === 0) {
    return;
  } else {
    listMaker(localStorage.getItem(key), clickCount1);
  }
  clickCount1++;
});

deleteButton.addEventListener("click", (event) => {
  event.preventDefault;
  list.textContent = "";
  localStorage.clear();
});

deleteButton.addEventListener("keyup", (event) => {
  event.preventDefault;
  if (event.keyCode === 13) {
    list.textContent = "";
    localStorage.clear();
  }
});
