import { renderProjects } from '../dom/projectrender';
import { getLocalProjects, updateLocalStorage } from './localstorage';
import { getLocalTodos } from './localstorage';
const storageContainers = (function () {
  let todoContainer = [];
  let projectContainer = [];

  const loadLocalStorage = function () {
    todoContainer = getLocalTodos();
    projectContainer = getLocalProjects();
  };

  const addTodo = function (todo) {
    todoContainer.push(todo);
    updateLocalStorage();
  };

  const addProject = function (project) {
    projectContainer.push(project);
    updateLocalStorage();
  };

  const deleteTodo = function (index) {
    todoContainer.splice(index, 1);
    updateLocalStorage();
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
        updateLocalStorage();
      }
    });
  };

  const getTodoContainer = function () {
    return todoContainer;
  };
  const getProjectContainer = function () {
    return projectContainer;
  };

  const replaceTodoContainer = function (newContainer) {
    todoContainer = newContainer;
  };

  const replaceProjectContainer = function (newContainer) {
    projectContainer = newContainer;
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
    updateLocalStorage();
  };

  const editProject = function (index, newName) {
    const oldName = projectContainer[index];
    projectContainer[index] = newName;

    todoContainer.forEach((todo) => {
      if (todo['project'] === oldName) {
        todo['project'] = newName;
      }
    });
    updateLocalStorage();
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
    loadLocalStorage,
    replaceTodoContainer,
    replaceProjectContainer,
  };
})();

export { storageContainers };
