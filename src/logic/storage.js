import { renderProjects } from '../dom/projectrender';
const storageContainers = (function () {
  let todoContainer = [];
  const projectContainer = [];

  const addTodo = function (todo) {
    todoContainer.push(todo);
  };

  const addProject = function (project) {
    projectContainer.push(project);
  };

  const deleteTodo = function (index) {
    todoContainer.splice(index, 1);
  };

  const deleteProject = function (id) {
    projectContainer.forEach((project) => {
      const projIndex = projectContainer.indexOf(project);
      if (project.id === id) {
        projectContainer.splice(projIndex, 1);
        renderProjects();

        const toBeFiltered = [];
        todoContainer.forEach((todo) => {
          if (todo['project'] === id) {
            toBeFiltered.push(todo);
          }
        });
        const result = todoContainer.filter(
          (item) => !toBeFiltered.includes(item)
        );
        todoContainer = result;
      }
    });
  };

  const getTodoContainer = function () {
    return todoContainer;
  };
  const getProjectContainer = function () {
    return projectContainer;
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
    getTodoContainer,
    getProjectContainer,
  };
})();

export { storageContainers };
