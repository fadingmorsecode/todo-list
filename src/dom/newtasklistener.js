export function loadNewTaskListener() {
  function newTodo(event) {
    if (event.target.matches('.plus-icon')) {
      // Function for new task modal.
    }
  }
  document.addEventListener('click', newTodo);
}
