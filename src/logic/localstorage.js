import { storageContainers } from './storage';
import { createDefaults } from './defaultcreations';

// On page load - load localStorage if it exists or defaults if it doesn't
export function checkForLocalStorage() {
  if (localStorage.getItem('todos') || localStorage.getItem('projects')) {
    console.log('local storage exists');
    storageContainers.loadLocalStorage();
  } else {
    console.log('defaults needs to be loaded');
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
  return JSON.parse(localStorage.getItem('todos'));
}

export function getLocalProjects() {
  return JSON.parse(localStorage.getItem('projects'));
}
