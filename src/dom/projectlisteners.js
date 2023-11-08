import { renderFilteredTodos } from './todorender';
import { renderAllTodos } from './todorender';

export function loadProjectListeners() {
  function listTodos(event) {
    if (event.target.matches('.proj')) {
      renderFilteredTodos(event.target.data.id);
    } else if (event.target.matches('.inbox')) {
      renderAllTodos();
    }
  }

  document.addEventListener('click', listTodos);
}
