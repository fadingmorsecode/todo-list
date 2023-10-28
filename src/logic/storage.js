const storageContainers = (function () {
  let todoContainer = [];
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
    const projectName = projectContainer[index];
    const toBeFiltered = [];
    todoContainer.forEach((todo) => {
      if (todo['project'] === projectName) {
        toBeFiltered.push(todo);
      }
    });
    const result = todoContainer.filter((item) => !toBeFiltered.includes(item));
    console.log(result);
    todoContainer = result;
    projectContainer.splice(index, 1);
  };

  const logContainers = function () {
    console.log(todoContainer);
    console.log(projectContainer);
  };

  const editTodo = function (
    index,
    newTitle,
    newDescription,
    newDueDate,
    newPriority,
    newNotes,
    newProject
  ) {
    todoContainer[index]['title'] = newTitle;
    todoContainer[index]['description'] = newDescription;
    todoContainer[index]['dueDate'] = newDueDate;
    todoContainer[index]['priority'] = newPriority;
    todoContainer[index]['notes'] = newNotes;
    todoContainer[index]['project'] = newProject;
  };

  const editProject = function (index, newName) {
    const oldName = projectContainer[index];
    projectContainer[index] = newName;

    todoContainer.forEach((todo) => {
      if (todo['project'] === oldName) {
        todo['project'] = newName;
      }
    });
  };

  return {
    addTodo,
    addProject,
    todoContainer,
    projectContainer,
    deleteTodo,
    deleteProject,
    editTodo,
    editProject,
    logContainers,
  };
})();

export { storageContainers };