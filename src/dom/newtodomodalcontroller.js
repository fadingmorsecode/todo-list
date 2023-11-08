import { newTodoModalLoader } from './newtodomodal';
import { storageContainers } from '../logic/storage';

export function newTodoModal() {
  newTodoModalLoader();
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

  // Submit Button Functionality Below

  function submitted(event) {
    const todoForm = document.querySelector('.new-todo-modal-form');
    if (todoForm.checkValidity()) {
      event.preventDefault();
      modal.remove();
    }
  }

  const submitBtn = document.querySelector('.todo-modal-submit');
  submitBtn.addEventListener('click', submitted);
}
