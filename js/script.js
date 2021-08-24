var taskInput = document.querySelector(".inputBox");
var addBtn = document.getElementById("addBtn");
var todoContainer = document.querySelector(".todos-container");
function handleCheckbox() {
  var todoItem = this.parentElement.parentElement.parentElement;
  if (this.checked) {
    todoItem.classList.add("completed");
    setTimeout(() => {
      todoItem.remove();
    }, 3000);
  }
}

function handleDelete() {
  var todoItem = this.parentElement.parentElement.parentElement;
  todoItem.remove();
}

function handleTaskAdd() {
  let taskName = taskInput.value;
  let task = `<div class="todo-item">
                    <div class="todo-content-container">
                        <div class="todo-content">
                            <input class="checkbox" type="checkbox" name="doneCheckBox" id="done">
                            <h2>${taskName}</h2>
                        </div>
                        <div class="todo-content">
                            <i class="fas fa-trash fa-lg btn-delete"></i>
                        </div>
                    </div>
                </div>`;
  todoContainer.innerHTML += task;
  var doneCheckBox = document.querySelectorAll("input[name=doneCheckBox]");
  var deleteBtn = document.querySelectorAll(".btn-delete");
  deleteBtn.forEach((item) => {
    item.addEventListener("click", handleDelete);
  });
  doneCheckBox.forEach((item) => {
    item.addEventListener("CheckboxStateChange", handleCheckbox);
  });
}

addBtn.addEventListener("click", handleTaskAdd);
