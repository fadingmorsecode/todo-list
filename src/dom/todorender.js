import { storageContainers } from '../logic/storage';
import { filterProject } from '../logic/filter';
import editImage from '../assets/edit-svgrepo-com.svg';
const todoListViewContainer = document.querySelector('.todo-container');

export function clearTodosRender() {
  while (todoListViewContainer.firstChild) {
    todoListViewContainer.removeChild(todoListViewContainer.lastChild);
  }
}

function todoTemplate(todo) {
  const todoItem = document.createElement('div');
  const checkContainer = document.createElement('input');
  const todoTitleText = document.createElement('div');
  const todoPriorityText = document.createElement('div');
  const todoDateText = document.createElement('div');
  const todoEditContainer = document.createElement('div');

  const editIcon = new Image();
  editIcon.src = editImage;
  editIcon.setAttribute('id', 'edit-icon');
  todoEditContainer.appendChild(editIcon);

  todoItem.classList.add('todo');
  checkContainer.classList.add('checklist-container');
  checkContainer.setAttribute('type', 'checkbox');
  todoTitleText.classList.add('todo-listview-text');
  todoPriorityText.classList.add('todo-listview-priority');
  todoDateText.classList.add('todo-listview-date');
  todoEditContainer.classList.add('edit-btn-container');

  todoTitleText.textContent = todo.title;
  todoPriorityText.textContent = `Priority: ${todo.priority}`;
  todoDateText.textContent = `Due: ${todo.dueDate}`;

  todoListViewContainer.appendChild(todoItem);
  todoItem.appendChild(checkContainer);
  todoItem.appendChild(todoTitleText);
  todoItem.appendChild(todoPriorityText);
  todoItem.appendChild(todoDateText);
  todoItem.appendChild(todoEditContainer);
}

export function renderAllTodos() {
  clearTodosRender();
  console.log(storageContainers.getTodoContainer());
  storageContainers.getTodoContainer().forEach((todo) => {
    storageContainers.logContainers();
    todoTemplate(todo);
  });
}

export function renderFilteredTodos(id) {
  clearTodosRender();
  const filteredArray = filterProject(id);
  filteredArray.forEach((todo) => {
    todoTemplate(todo);
  });
}
