import { storageContainers } from '../logic/storage';
import { renderSelectedProject } from './todorendercondition';

export function loadTodoDeleteListener() {
  function deleteSelectedTodo(event) {
    if (event.target.matches('.todo-delete-icon')) {
      const index = storageContainers
        .getTodoContainer()
        .indexOf(event.target.parentNode.parentNode.data);
      storageContainers.deleteTodo(index);
      renderSelectedProject();
    }
  }

  document.addEventListener('click', deleteSelectedTodo);
}
