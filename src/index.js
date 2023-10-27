import './styles.css';
import { loadImages } from './logic/imageloader';
import {
  createSecondTodo,
  createThirdTodo,
  createTodo,
} from './modules/itemcreation';
import { createProject } from './logic/projectcreation';
import { storageContainers } from './logic/storage';
import { filterProject } from './logic/filter';

createTodo();
createSecondTodo();
createThirdTodo();

console.log(JSON.stringify(storageContainers.todoContainer));

storageContainers.editTodo(
  1,
  'grace',
  'something something',
  '10/30/2025',
  'low',
  'do this and that',
  'homework'
);

console.log(JSON.stringify(storageContainers.todoContainer));
console.log('start');
console.log(JSON.stringify(storageContainers.projectContainer));
console.log(JSON.stringify(storageContainers.todoContainer));

storageContainers.editProject(1, 'Stuff');

console.log(JSON.stringify(storageContainers.projectContainer));
console.log(JSON.stringify(storageContainers.todoContainer));
