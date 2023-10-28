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

loadImages();

createTodo();
createSecondTodo();
createThirdTodo();

console.log(JSON.stringify(storageContainers.projectContainer));
console.log(JSON.stringify(storageContainers.todoContainer));

storageContainers.deleteProject(1);

console.log(JSON.stringify(storageContainers.projectContainer));
console.log(JSON.stringify(storageContainers.todoContainer));
