import './styles.css';
import { loadImages } from './imageloader';
import { createTodo } from './itemcreation';
import { createProject } from './projectcreation';
import { storageContainers } from './storage';

loadImages();

createTodo();

console.log(storageContainers.todoContainer[0]);

storageContainers.todoContainer[0].toggleCheck();

console.log(storageContainers.todoContainer[0]);
