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

loadImages();
loadNewProjListener();
loadDeleteProjListener();

createTodo();
createSecondTodo();
createThirdTodo();

storageContainers.logContainers();

storageContainers.editTodo(
  2,
  'snoop',
  'something about me',
  '10/10/10',
  'medium',
  'notes notes notes',
  'homework'
);

storageContainers.logContainers();

createProject('music');
createProject('movies');
createProject('homework');

storageContainers.logContainers();

renderProjects();
