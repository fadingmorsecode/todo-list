import { newTodoModalLoader } from './newtodomodal';
import { storageContainers } from '../logic/storage';
import { renderAllTodos } from './todorender';
import { renderFilteredTodos } from './todorender';

export function expandTodoController(expandedTodo) {
  newTodoModalLoader();

  const editBtn = document.querySelector('.todo-modal-submit');
  editBtn.textContent = 'Save';

  const taskParagraph = document.querySelector('#todo-modal-paragraph');
  taskParagraph.textContent = 'Edit Your Task';

  const modal = document.querySelector('.new-todo-modal-container');
  modal.style.display = 'flex';

  const cancelBtn = document.querySelector('.todo-modal-cancel');
  cancelBtn.addEventListener('click', function () {
    modal.remove();
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.remove();
    }
  });

  storageContainers.getProjectContainer().forEach((project) => {
    const projectSelect = document.querySelector('#todo-modal-project');
    const option = document.createElement('option');
    option.textContent = `${project.title}`;
    option.value = `${project.id}`;
    projectSelect.appendChild(option);
  });

  const todoTitle = document.querySelector('#todo-modal-title');
  todoTitle.value = expandedTodo.title;
  const todoDescription = document.querySelector('#todo-modal-description');
  todoDescription.value = expandedTodo.description;
  const todoDueDate = document.querySelector('#todo-modal-dueDate');
  todoDueDate.value = expandedTodo.dueDate;
  const todoPriority = document.querySelector('#todo-modal-priority');
  todoPriority.value = expandedTodo.priority;
  const todoNotes = document.querySelector('#todo-modal-notes');
  todoNotes.value = expandedTodo.notes;
  const todoProject = document.querySelector('#todo-modal-project');
  todoProject.value = expandedTodo.project;

  function edited(event) {
    const todoForm = document.querySelector('.new-todo-modal-form');
    if (todoForm.checkValidity()) {
      event.preventDefault();

      const todoIndex = storageContainers
        .getTodoContainer()
        .indexOf(expandedTodo);

      storageContainers.editTodo(
        todoIndex,
        todoTitle.value,
        todoDescription.value,
        todoDueDate.value,
        todoPriority.value,
        todoNotes.value,
        todoProject.value
      );

      let currentlySelected = document.querySelector('.grey');
      if (currentlySelected === document.querySelector('.inbox')) {
        renderAllTodos();
      } else {
        const projContainer = document.querySelector('.project-container');
        const projects = projContainer.childNodes;
        [...projects].forEach((project) => {
          if (project.classList.contains('grey')) {
            renderFilteredTodos(project.data.id);
          }
        });
      }

      modal.remove();
    }
  }

  editBtn.addEventListener('click', edited);
}
