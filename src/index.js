import './styles.css';
import { loadImages } from './modules/imageloader';
import { createTodo } from './modules/itemcreation';
import { createProject } from './modules/projectcreation';
import { storageContainers } from './modules/storage';

createTodo();

console.log(JSON.stringify(storageContainers.todoContainer[0]));

storageContainers.todoContainer[0].toggleCheck();

console.log(JSON.stringify(storageContainers.todoContainer[0]));
