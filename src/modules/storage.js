const storageContainers = (function () {
  const todoContainer = [];
  const projectContainer = ['music', 'homework'];

  const addTodo = function (todo) {
    todoContainer.push(todo);
  };

  const addProject = function (project) {
    projectContainer.push(project);
  };

  const deleteTodo = function (index) {
    todoContainer.splice(index, 1);
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
    deleteTodo,
  };
})();

export { storageContainers };
