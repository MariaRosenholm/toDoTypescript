const save = document.getElementById("save") as HTMLInputElement;
let toDo = document.querySelector("#toDo") as HTMLInputElement;
const list = document.querySelector("ol") as HTMLOListElement;
const deleteButton = document.querySelector("#delete") as HTMLInputElement;
let trimmedTodo: string;

let listMaker: (L: string) => void;
listMaker = (L) => {
  let newLi = document.createElement("li") as HTMLLIElement;
  let newDelete = document.createElement("button") as HTMLButtonElement;
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
    newDelete.parentElement!.remove();
    localStorage.removeItem(L);
  });

  localStorage.setItem(L, L);
};

save.addEventListener("click", (event) => {
  event.preventDefault;
  trimmedTodo = toDo.value.trim();
  if (trimmedTodo === "") {
    return;
  }
  listMaker(trimmedTodo);
  toDo.value = "";
});

save.addEventListener("keyup", (event) => {
  event.preventDefault;
  if (event.keyCode === 13) {
    trimmedTodo = toDo.value.trim();
    if (trimmedTodo === "") {
      return;
    }
    listMaker(trimmedTodo);
    toDo.value = "";
  }
});

toDo.addEventListener("keyup", (event) => {
  event.preventDefault;
  if (event.keyCode === 13) {
    trimmedTodo = toDo.value.trim();
    if (trimmedTodo === "") {
      return;
    }
    listMaker(trimmedTodo);
    toDo.value = "";
  }
});

Object.keys(localStorage).forEach(function (key) {
  if (localStorage.length === 0) {
    return;
  } else {
    const k: string = key!;
    listMaker(localStorage.getItem(k) || "");
  }
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
