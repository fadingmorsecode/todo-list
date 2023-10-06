const storageContainers = (function () {
  const _todoContainer = [];
  const _projectContainer = [];

  const addTodo = function (todo) {
    _todoContainer.push(todo);
  };

  const addProject = function (project) {
    _projectContainer.push(project);
  };

  const displayTodoContainer = function () {
    console.log(_todoContainer);
  };

  return {
    addTodo,
    addProject,
    displayTodoContainer,
  };
})();

export { storageContainers };
