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

console.log(`Console.log:`);
console.log(storageContainers.todoContainer);
console.log(storageContainers.projectContainer);

console.log('Method logging:');
storageContainers.logContainers();

//Delete Project (homework)
storageContainers.deleteProject(1);

console.log(`Console.log:`);
console.log(storageContainers.todoContainer);
console.log(storageContainers.projectContainer);
console.log('Method logging:');
storageContainers.logContainers();
