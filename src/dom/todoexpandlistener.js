import { expandTodoController } from './todoexpandcontroller';

export function loadExpandListener() {
  function expandTodo(event) {
    if (event.target.matches('.edit-icon')) {
      expandTodoController(event.target.parentNode.parentNode.data);
    }
  }
  document.addEventListener('click', expandTodo);
}
