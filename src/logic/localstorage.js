import { storageContainers } from './storage';

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
