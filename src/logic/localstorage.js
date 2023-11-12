import { storageContainers } from './storage';
import { createDefaults } from './defaultcreations';
import { create } from 'lodash';

// ON PAGE LOAD
// IF LOCAL STORAGE EXISTS
export function checkForLocalStorage() {
  if (localStorage.getItem('todos') || localStorage.getItem('projects')) {
    console.log('local storage exists');
    // load local storage
  } else {
    console.log('defaults needs to be loaded');
    createDefaults();
  }
}

export function storeTodos() {
  const stringifiedTodos = JSON.stringify(storageContainers.getTodoContainer());

  localStorage.setItem('todos', stringifiedTodos);
}

export function storeProjects() {
  const stringifiedProjects = JSON.stringify(
    storageContainers.getProjectContainer()
  );

  localStorage.setItem('projects', stringifiedProjects);
}

export function getStoredTodos() {
  return JSON.parse(localStorage.getItem('todos'));
}

export function getStoredProjects() {
  return JSON.parse(localStorage.getItem('projects'));
}
