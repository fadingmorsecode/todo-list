import { newTodoModalLoader } from './newtodomodal';

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

  // Due Date:

  // Submit Button Functionality Below
}
