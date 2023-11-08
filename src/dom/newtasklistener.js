import { newTodoModal } from './newtodomodalcontroller';

export function loadNewTaskListener() {
  function newTodo(event) {
    if (event.target.matches('.plus-icon')) {
      newTodoModal();
    }
  }
  document.addEventListener('click', newTodo);
}
