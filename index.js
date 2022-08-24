//selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todolist");
//EventListener
todoButton.addEventListener("click", addTodo);
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
