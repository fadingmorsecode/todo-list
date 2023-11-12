import { loadImages } from '../logic/imageloader';
import { renderProjects } from '../dom/projectrender.js';
import { loadNewProjListener } from '../dom/newprojectlistener';
import { loadDeleteProjListener } from '../dom/projectdeletelistener';
import { loadProjectListeners } from '../dom/projectlisteners';
import { renderAllTodos } from '../dom/todorender';
import { loadHighlighting } from '../dom/projecthighlight';
import { loadNewTaskListener } from '../dom/newtasklistener';
import { loadExpandListener } from '../dom/todoexpandlistener';
import { loadCheckListener } from '../dom/checklistener';
import { loadTodoDeleteListener } from '../dom/tododeletelistener';
import { checkForLocalStorage } from '../logic/localstorage';

export function loadAll() {
  checkForLocalStorage();
  loadImages();
  loadNewProjListener();
  loadDeleteProjListener();
  loadProjectListeners();
  renderAllTodos();
  renderProjects();
  loadHighlighting();
  loadNewTaskListener();
  loadExpandListener();
  loadCheckListener();
  loadTodoDeleteListener();
}
