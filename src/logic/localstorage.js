import { storageContainers } from './storage';
import { createDefaults } from './defaultcreations';
import { todo } from './itemcreation';

// On page load - load localStorage if it exists or defaults if it doesn't
export function checkForLocalStorage() {
  if (localStorage.getItem('todos') || localStorage.getItem('projects')) {
    storageContainers.loadLocalStorage();
  } else {
    createDefaults();
  }
}

// Function to add/update storage

export function updateLocalStorage() {
  const stringifiedTodos = JSON.stringify(storageContainers.getTodoContainer());
  localStorage.setItem('todos', stringifiedTodos);

  const stringifiedProjects = JSON.stringify(
    storageContainers.getProjectContainer()
  );
  localStorage.setItem('projects', stringifiedProjects);
}

// Get local storage arrays

export function getLocalTodos() {
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  storedTodos.forEach((storedTodo) => {
    Object.setPrototypeOf(storedTodo, todo.prototype);
  });
  return storedTodos;
}

export function getLocalProjects() {
  return JSON.parse(localStorage.getItem('projects'));
}
