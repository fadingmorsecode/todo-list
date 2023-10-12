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

  const deleteProject = function (index) {
    projectContainer.splice(index, 1);
  };

  return {
    addTodo,
    addProject,
    todoContainer,
    projectContainer,
    deleteTodo,
    deleteProject,
  };
})();

export { storageContainers };
