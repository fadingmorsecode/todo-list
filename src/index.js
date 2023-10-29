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
import { renderProjects } from './dom/projectrender';
import { clearProjects } from './dom/projectrender';

loadImages();

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

renderProjects();
