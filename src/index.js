import './styles.css';
import { loadImages } from './logic/imageloader';
import {
  createSecondTodo,
  createThirdTodo,
  createTodo,
} from './logic/itemcreation';
import { createProject } from './logic/projectcreation';
import { storageContainers } from './logic/storage';
import { filterProject } from './logic/filter';
import { renderProjects } from './dom/projectrender.js';
import { clearProjects } from './dom/projectrender.js';
import { loadNewProjListener } from './dom/newprojectlistener';
import { loadDeleteProjListener } from './dom/projectdeletelistener';
import { deleteModalLoader } from './dom/deletemodal';
import { LoadDeleteModal } from './dom/deletemodalcontroller';
import { loadProjectListeners } from './dom/projectlisteners';
import { renderAllTodos } from './dom/todorender';
import { loadHighlighting } from './dom/projecthighlight';

createTodo();
createSecondTodo();
createThirdTodo();

createProject('music');
createProject('movies');
createProject('homework');

loadImages();
loadNewProjListener();
loadDeleteProjListener();
loadProjectListeners();
renderAllTodos();
renderProjects();
loadHighlighting();
