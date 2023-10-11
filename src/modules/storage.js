const storageContainers = (function () {
  const todoContainer = [];
  const projectContainer = ['music', 'homework'];

  const addTodo = function (todo) {
    todoContainer.push(todo);
  };

  const addProject = function (project) {
    projectContainer.push(project);
  };

  const displayContainers = function () {
    console.log(todoContainer);
    console.log(projectContainer);
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
