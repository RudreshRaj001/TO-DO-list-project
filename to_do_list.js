const todoList = [];
renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;

    const { name, dueDate } = todoObject;

    const html = `
    <div>${name}</div> 
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i},1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>
      `;
     // generating the html code
    todoListHTML += html;
  }
  
  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const InputElement = document.querySelector('.js-name-input');
  const name = InputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;


  todoList.push({
    // name: name, 
    // dueDate: dueDate
      // using shorthand property
    name,
    dueDate
  });
  console.log(todoList);

  InputElement.value = '';
  dateInputElement.value = '';
  renderTodoList();
}
