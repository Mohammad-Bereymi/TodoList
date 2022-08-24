//selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todolist");
const filterOption = document.querySelector(".filter-todos");
//EventListener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkRemove);
filterOption.addEventListener("click", filterTodos);
//function

function addTodo(e) {
  e.preventDefault();
  //get todo value
  //create new todo
  //add to dom
  //reset input
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = `  <li>${todoInput.value}</li>
  <span><i class="fa-solid fa-square-check"></i></span>
  <span><i class="fa-solid fa-trash-can"></i></span>`;
  todoDiv.innerHTML = newTodo;
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function checkRemove(e) {
  const classList = [...e.target.classList];
  const item = e.target;

  if (classList[1] === "fa-square-check") {
    const todo = item.parentElement.parentElement;
    todo.classList.toggle("completed");
  } else if (classList[1] === "fa-trash-can") {
    const todo = item.parentElement.parentElement;
    todo.remove();
  }
}

function filterTodos(e) {
  const todos = [...todoList.childNodes];
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
