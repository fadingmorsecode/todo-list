const storageContainers = (function () {
  const todoContainer = [];
  const projectContainer = [];

  const addTodo = function (todo) {
    _todoContainer.push(todo);
  };

  const addProject = function (project) {
    _projectContainer.push(project);
  };

  const displayContainers = function () {
    console.log(_todoContainer);
    console.log(_projectContainer);
  };

  return {
    addTodo,
    addProject,
    todoContainer,
    projectContainer,
    displayContainers,
  };
})();

export { storageContainers };
