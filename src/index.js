import './styles.css';
import { loadImages } from './modules/imageloader';
import {
  createSecondTodo,
  createThirdTodo,
  createTodo,
} from './modules/itemcreation';
import { createProject } from './modules/projectcreation';
import { storageContainers } from './modules/storage';
import { filterProject } from './modules/filter';

createTodo();
createSecondTodo();
createThirdTodo();

console.log(JSON.stringify(storageContainers.todoContainer[0]));

storageContainers.todoContainer[0].toggleCheck();

console.log(JSON.stringify(storageContainers.todoContainer[0]));

console.log(filterProject('music'));

console.log(JSON.stringify(storageContainers.todoContainer));

storageContainers.deleteTodo(1);

console.log(JSON.stringify(storageContainers.todoContainer));
