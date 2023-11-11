import { todoDeleteModal } from './deletemodalcontroller';

export function loadTodoDeleteListener() {
  function deleteSelectedTodo(event) {
    if (event.target.matches('.todo-delete-icon')) {
      todoDeleteModal(event);
    }
  }

  document.addEventListener('click', deleteSelectedTodo);
}
